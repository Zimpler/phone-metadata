/**
   Adapted from:
   https://raw.githubusercontent.com/googlei18n/libphonenumber/v8.8.4/javascript/i18n/phonenumbers/metadata.js
   using: https://github.com/Zimpler/phone-metadata
   only keeping metadata related to the countries we care about.
   Contains the following countries: ["SE", "FI", "DE"]
**/

/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generated metadata for file
 * ../resources/PhoneNumberMetadata.xml
 * @author Nikolaos Trogkanis
 */

goog.provide('i18n.phonenumbers.metadata');

/**
 * A mapping from a country calling code to the region codes which denote the
 * region represented by that country calling code. In the case of multiple
 * countries sharing a calling code, such as the NANPA regions, the one
 * indicated with "isMainCountryForCode" in the metadata should be first.
 * @type {!Object.<number, Array.<string>>}
 */
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
46:["SE"]
,49:["DE"]
,358:["FI"]
};

/**
 * A mapping from a region code to the PhoneMetadata for that region.
 * @type {!Object.<string, Array>}
 */
i18n.phonenumbers.metadata.countryToMetadata = {
"DE":[,[,,"[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})",,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15]
,[3]
]
,[,,"2\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|4(?:0\\d{3,12}|\\d{5,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|6(?:\\d{5,13}|9\\d{3,12})|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-8]\\d|9\\d?)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})",,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15]
,[3,4]
]
,[,,"1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7\\d{8,9})",,,,"15123456789",,,[10,11]
]
,[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]
]
,[,,"137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})",,,,"9001234567",,,[10,11]
]
,[,,"1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})",,,,"18012345",,,[7,8,9,10,11,12,13,14]
]
,[,,"700\\d{8}",,,,"70012345678",,,[11]
]
,[,,,,,,,,,[-1]
]
,"DE",49,"00","0",,,"0",,,,[[,"(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"]
,"0$1"]
,[,"(15\\d{3})(\\d{6})","$1 $2",["15[0568]"]
,"0$1"]
,[,"(1\\d{3})(\\d{7})","$1 $2",["15"]
,"0$1"]
,[,"(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"]
,"0$1"]
,[,"(\\d{3})(\\d{3,11})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]
,"0$1"]
,[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]
,"0$1"]
,[,"(3\\d{4})(\\d{1,10})","$1 $2",["3"]
,"0$1"]
,[,"(800)(\\d{7,12})","$1 $2",["800"]
,"0$1"]
,[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:37|80)|900","1(?:37|80)|900[1359]"]
,"0$1"]
,[,"(1\\d{2})(\\d{5,11})","$1 $2",["181"]
,"0$1"]
,[,"(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"]
,"0$1"]
,[,"(18\\d{2})(\\d{7})","$1 $2",["18[68]"]
,"0$1"]
,[,"(18\\d)(\\d{8})","$1 $2",["18[2-579]"]
,"0$1"]
,[,"(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"]
,"0$1"]
,[,"(138)(\\d{4})","$1 $2",["138"]
,"0$1"]
,[,"(15[013-68])(\\d{2})(\\d{8})","$1 $2 $3",["15[013-68]"]
,"0$1"]
,[,"(15[279]\\d)(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"]
,"0$1"]
,[,"(1[67]\\d)(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"]
,"0$1"]
]
,,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]
]
,,,[,,,,,,,,,[-1]
]
,[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]
]
,,,[,,"1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})",,,,"177991234567",,,[12,13]
]
]
,"FI":[,[,,"[16]\\d{6,9}|2\\d{4,9}|[35]\\d{5,9}|4\\d{7,10}|7\\d{7,9}|8\\d{6,8}|9\\d{4,8}",,,,,,,[5,6,7,8,9,10,11]
]
,[,,"1[3-79][1-8]\\d{4,6}|[23568][1-8]\\d{5,7}|9[1-8]\\d{3,7}",,,,"131234567",,,[5,6,7,8,9]
]
,[,,"4[0-8]\\d{6,8}|50\\d{4,8}",,,,"412345678",,,[6,7,8,9,10,11]
]
,[,,"800\\d{5,6}",,,,"800123456",,,[8,9]
]
,[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"FI",358,"00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]
,"0$1"]
,[,"(116\\d{3})","$1",["116"]
,"$1"]
,[,"(\\d{2})(\\d{3,9})","$1 $2",["1(?:0[1-9]|[3-9])|2(?:0[1-9]|9)|30[1-9]|4|50|7(?:[13]|5[03-9])"]
,"0$1"]
,[,"(75\\d{3})","$1",["75[12]"]
,"0$1"]
,[,"(\\d)(\\d{4})","$1 $2",["9[1-8]"]
,"0$1"]
,[,"(\\d)(\\d{5,9})","$1 $2",["[235689][1-8]"]
,"0$1"]
,[,"(39\\d)(\\d{3})(\\d{3})","$1 $2 $3",["39"]
,"0$1"]
]
,[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]
,"0$1"]
,[,"(116\\d{3})","$1",["116"]
,"$1"]
,[,"(\\d{2})(\\d{3,9})","$1 $2",["1(?:0[1-9]|[3-9])|2(?:0[1-9]|9)|30[1-9]|4|50|7(?:[13]|5[03-9])"]
,"0$1"]
,[,"(\\d)(\\d{4})","$1 $2",["9[1-8]"]
,"0$1"]
,[,"(\\d)(\\d{5,9})","$1 $2",["[235689][1-8]"]
,"0$1"]
,[,"(39\\d)(\\d{3})(\\d{3})","$1 $2 $3",["39"]
,"0$1"]
]
,[,,,,,,,,,[-1]
]
,1,,[,,"100\\d{4,6}|20(?:0\\d{4,6}|2[023]\\d{4,5}|9[89]\\d{1,6})|300\\d{3,7}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})",,,,"1001234",,,[5,6,7,8,9,10]
]
,[,,"10(?:0\\d{4,6}|[1-46-9]\\d{5,7}|5\\d{4,7})|2(?:0(?:0\\d{4,6}|[1346-8]\\d{5,7}|2(?:[023]\\d{4,5}|[14-9]\\d{4,6})|5(?:\\d{3}|\\d{5,7})|9(?:[0-7]\\d{4,6}|[89]\\d{1,6}))|9\\d{5,8})|3(?:0(?:0\\d{3,7}|[1-57-9]\\d{5,7}|6(?:\\d{3}|\\d{5,7}))|44\\d{3}|93\\d{5,7})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})",,,,"10112345",,,[5,6,7,8,9,10]
]
,,,[,,,,,,,,,[-1]
]
]
,"SE":[,[,,"[1-35-9]\\d{5,11}|4\\d{6,8}",,,,,,,[6,7,8,9,10,12]
]
,[,,"1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",,,,"8123456",,,[7,8,9]
]
,[,,"7[02369]\\d{7}",,,,"701234567",,,[9]
]
,[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]
]
,[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]
]
,[,,"77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})",,,,"771234567",,,[6,9]
]
,[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]
]
,[,,,,,,,,,[-1]
]
,"SE",46,"00","0",,,"0",,,,[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1-$2 $3 $4",["8"]
,"0$1"]
,[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]
,"0$1"]
,[,"([1-469]\\d)(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90"]
,"0$1"]
,[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]
,"0$1"]
,[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]
,"0$1"]
,[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"]
,"0$1"]
,[,"(77)(\\d{2})(\\d{2})","$1-$2$3",["7"]
,"0$1"]
,[,"(20)(\\d{2,3})(\\d{2})","$1-$2 $3",["20"]
,"0$1"]
,[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9[034]"]
,"0$1"]
,[,"(9[034]\\d)(\\d{4})","$1-$2",["9[034]"]
,"0$1"]
,[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"]
,"0$1"]
]
,[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1 $2 $3 $4",["8"]
]
,[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]
]
,[,"([1-469]\\d)(\\d{3})(\\d{2})","$1 $2 $3",["[12][136]|3[356]|4[0246]|6[03]|90"]
]
,[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]
]
,[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]
]
,[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7"]
]
,[,"(77)(\\d{2})(\\d{2})","$1 $2 $3",["7"]
]
,[,"(20)(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]
]
,[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9[034]"]
]
,[,"(9[034]\\d)(\\d{4})","$1 $2",["9[034]"]
]
,[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["25[245]|67[3-6]"]
]
]
,[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,"(?:25[245]|67[3-6])\\d{9}",,,,"254123456789",,,[12]
]
]
};
