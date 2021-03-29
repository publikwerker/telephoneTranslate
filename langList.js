'use strict';

// takes language code, returns full name
function longLangName (code) {
    switch (code) {
        case 'af':
            return "Afrikaans";
        case 'sq':
            return "Albanian";
        case 'am':
            return "Amharic";
        case 'ar':
            return "Arabic";
        case 'hy':
            return "Armenian";
        case 'az':
            return "Azerbaijani";
        case 'eu':
            return "Basque";
        case 'be':
            return "Belorusian";
        case 'bn':
            return "Bengali";
        case 'bs':
            return "Bosnian";
        case 'pt-BR':
            return "Brazilian Portuguese";
        case 'bg':
            return "Bulgarian";
        case 'ca':
            return "Catalan";
        case 'ceb':
            return "Cebuano";
        case 'zh':
        case 'zh-CN':
            return "Simplified Chinese";
        case 'zh-TW':
            return "Taiwanese Chinese";
        case 'co':
            return "Corsican";
        case 'hr':
            return "Croatian";
        case 'cs':
            return "Czech";
        case 'da':
            return "Danish";
        case 'nl':
            return "Dutch";
        case 'en':
            return "English";
        case 'eo':
            return "Esperanto";
        case 'et':
            return "Estonian";
        case 'fi':
            return "Finnish";
        case 'fr':
            return "French";
        case 'fy':
            return "Frisian";
        case 'gl':
            return "Galician";
        case 'ka':
            return "Georgian";
        case 'de':
            return "German";
        case 'el':
            return "Greek";
        case 'gu':
            return "Gujurati";
        case 'ht':
            return "Haitian Creole";
        case 'ha':
            return "Hausa";
        case 'haw': 
            return "Hawaiian";
        case 'he':
        case 'iw':
            return "Hebrew";
        case 'hi':
            return "Hindi";
        case 'hmn':
            return "Hmong";
        case 'hu':
            return "Hungarian";
        case 'is':
            return "Icelandic";
        case 'ig':
            return "Igbo";
        case 'id':
            return "Indonesian";
        case 'ga':
            return "Irish";
        case 'it':
            return "Italian";
        case 'ja':
            return "Japanese";
        case 'jv':
            return "Javanese";
        case 'kn':
            return "Kannada";
        case 'kk':
            return "Kazakh";
        case 'km':
            return "Khmer";
        case 'rw':
            return "Kinyarwanda";
        case 'ko':
            return "Korean";
        case 'ku':
            return "Kurdish";
        case 'ky':
            return "Kyrgyz";
        case 'lo':
            return "Lao";
        case 'la':
            return "Latin";
        case 'lv':
            return "Latvian";
        case 'lt':
            return "Lithuanian";
        case 'lb':
            return "Luxembourgish";
        case 'mk':
            return "Macedonian";
        case 'mg':
            return "Malagasy";
        case 'ms':
            return "Malay";
        case 'ml':
            return "Malayalam";
        case 'mt':
            return "Maltese";
        case 'mi':
            return "Maori";
        case 'mr':
            return "Marathi";
        case 'mn':
            return "Mongolian";
        case 'no':
            return "Norwegian";
        case 'ny':
            return "Nyanja";
        case 'or':
            return "Odia";
        case 'ps':
            return "Pahto";
        case 'fa':
            return "Persian";
        case 'pl':
            return "Polish";
        case 'pt-PT':
        case 'pt':
            return "Portuguese";
        case 'pa':
            return "Punjabi";
        case 'ro':
            return "Romanian";
        case 'ru':
            return "Russian";
        case 'sm':
            return "Samoan";
        case 'gd':
            return "Scots Gaelic";
        case 'sr':
            return "Serbian";
        case 'st':
            return "Sesotho";
        case 'sn':
            return "Shona";
        case 'sd':
            return "Sindhi";
        case 'si':
            return "Sinhala";
        case 'sk':
            return "Slovak";
        case 'sl':
            return "Slovenian";
        case 'so':
            return "Somali";
        case 'es':
            return "Spanish";
        case 'su':
            return "Sundanese";
        case 'sw':
            return "Swahili";
        case 'sv':
            return "Swedish";
        case 'tl':
            return "Tagalog";
        case 'tg':
            return "Tajik";
        case 'ta':
            return "Tamil";
        case 'tt':
            return "Tatar";
        case 'te':
            return "Telugu";
        case 'th':
            return "Thai";
        case 'tr':
            return "Turkish";
        case 'tk':
            return "Turkmen";
        case 'uk':
            return "Ukrainian";
        case 'ur':
            return "Urdu";
        case 'ug':
            return "Uyghur";
        case 'uz':
            return "Uzbek";
        case 'vi':
            return "Vietnamese";
        case 'cy':
            return "Welsh";
        case 'xh':
            return "Xhosa";
        case 'yi':
            return "Yiddish";
        case 'yo':
            return "Yoruba";
        case 'zu':
            return "Zulu";
        default :
            return "Unknown";
    };
};

// returns langList modified
// according to source language
function makeLangList (code, list) {
    if(!list.includes(code)) {
        console.log("Does not exist");
        return list;
    }
    else {
        let index = list.indexOf(code);
        console.log("the index is ", index);

        // if code is first in the list
        if (index === 0) {
            console.log("first");
            // move it to the end
            list.shift();
            list.push(code);
            return list;
        }
        
        // if code is last in the list
        if (index === list.length - 1) {
            console.log("last");
            return list;
        }

        // otherwise move it to the end
        let front = list.slice(0, index);
        let rear = list.slice(index+1);
        list = front.concat(rear)
        list.push(code);
        return list;
    }
}

module.exports = {longLangName, makeLangList};