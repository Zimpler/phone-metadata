#!/usr/bin/env ruby

require 'net/http'
require 'fileutils'

VERSION="v8.8.4"
COUNTRIES = ["SE", "FI", "DE"]

uri = URI("https://raw.githubusercontent.com/googlei18n/libphonenumber/#{VERSION}/javascript/i18n/phonenumbers/metadata.js")
metadata = Net::HTTP.get(uri)

VAR=/i18n.phonenumbers.metadata.countryToMetadata/
START_OF_COUNTRY_METADATA=/"(..)":\[/

FileUtils.mkdir_p('i18n/phonenumbers')
File.open('i18n/phonenumbers/metadata.js', 'w') do |file|
  passed_var = false
  keep = true
  already_some_metadata_kept = false

  file.puts <<-HEADER
/**
   Adapted from
   #{uri}
   But only keeping metadata related to the countries we care about.
   Contains the following countries: #{COUNTRIES}
**/

HEADER

  metadata.each_line do |line|
    if !passed_var # keep everything until VAR
      if line =~ VAR
        passed_var = true
      end
      keep = true
    elsif line =~ START_OF_COUNTRY_METADATA
      country = $1
      if COUNTRIES.include?(country)
        keep = true

        unless already_some_metadata_kept
          line.sub!(/\A,/, "")
          already_some_metadata_kept = true
        end
      else
        keep = false
      end
    elsif line =~ /\A\};/
      keep = true
    end

    if keep
      file.puts line
    end
  end
end
