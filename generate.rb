#!/usr/bin/env ruby

require 'net/http'
require 'fileutils'
require 'yaml'

VERSION="v8.8.4"
COUNTRIES = ["SE", "FI", "DE"]

uri = URI("https://raw.githubusercontent.com/googlei18n/libphonenumber/#{VERSION}/javascript/i18n/phonenumbers/metadata.js")
metadata = Net::HTTP.get(uri)

REGION_TO_COUNTRY_VAR=/i18n.phonenumbers.metadata.countryCodeToRegionCodeMap/

COUNTRY_TO_META_VAR=/i18n.phonenumbers.metadata.countryToMetadata/
START_OF_COUNTRY_METADATA=/"(..)":\[/

END_OF_VAR=/\A\};/


FileUtils.mkdir_p('i18n/phonenumbers')
File.open('i18n/phonenumbers/metadata.js', 'w') do |file|
  current_var = nil
  keep = true
  already_some_region_kept = false
  already_some_metadata_kept = false

  file.puts <<-HEADER
/**
   Adapted from:
   #{uri}
   using: https://github.com/Zimpler/phone-metadata
   only keeping metadata related to the countries we care about.
   Contains the following countries: #{COUNTRIES}
**/

HEADER

  metadata.each_line do |line|
    if line =~ REGION_TO_COUNTRY_VAR
      current_var = :region_to_country
    elsif line =~ COUNTRY_TO_META_VAR
      current_var = :country_to_meta
    elsif line =~ END_OF_VAR
      current_var = nil
      keep = true
    elsif current_var == :country_to_meta && line =~ START_OF_COUNTRY_METADATA
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
    elsif current_var == :region_to_country
      if COUNTRIES.any? { |c| line.include?(c) }
        unless already_some_region_kept
          line.sub!(/\A,/, "")
          already_some_region_kept = true
        end

        line.sub!(/\[.*\]/) { |list|
          YAML.load(list).select { |c| COUNTRIES.include?(c) }.to_s
        }

        keep = true
      else
        keep = false
      end
    end

    if keep
      file.puts line
    end
  end
end
