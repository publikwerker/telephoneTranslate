'use strict';

// takes language code, returns full name
function longLangName (code) {
    switch (code) {
        case 'en':
            return "English";
            break;
        case 'et':
            return "Estonian";
            break;
        case 'fil':
            return "Tagalog";
            break;
        case 'fi':
            return "Finnish";
            break;
        case 'fr':
            return "French";
            break;
        case 'de':
            return "German";
            break;
        case 'el':
            return "Greek";
            break;
        case 'gu':
            return "Gujurati";
            break;
        case 'iw':
            return "Hebrew";
            break;
        case 'hi':
            return "Hindi";
            break;
        case 'hu':
            return "Hungarian";
            break;
        case 'is':
            return "Icelandic";
            break;
        case 'id':
            return "Indonesian";
            break;
        case 'it':
            return "Italian";
            break;
        case 'ja':
            return "Japanese";
            break;
        case 'kn':
            return "Kannada";
            break;
        case 'ko':
            return "Korean";
            break;
        case 'lv':
            return "Latvian";
            break;
        case 'lt':
            return "Lithuanian";
            break;
        case 'ms':
            return "Malay";
            break;
        case 'ml':
            return "Malayalam";
            break;
        case 'mr':
            return "Marathi";
            break;
        case 'no':
            return "Norwegian";
            break;
        case 'pl':
            return "Polish";
            break;
        case 'pt-PT':
            return "Portuguese";
            break;
        case 'ro':
            return "Romanian";
            break;
        case 'ru':
            return "Russian";
            break;
        case 'sr':
            return "Serbian";
            break;
        case 'zh-CN':
            return "Simplified Chinese";
            break;
        case 'sk':
            return "Slovak";
            break;
        case 'sl':
            return "Slovenian";
            break;
        case 'es':
            return "Spanish";
            break;
        case 'sw':
            return "Swahili";
            break;
        case 'sv':
            return "Swedish";
            break;
        case 'ta':
            return "Tamil";
            break;
        case 'te':
            return "Telugu";
            break;
        case 'th':
            return "Thai";
            break;
        case 'zh-TW':
            return "Taiwanese";
            break;
        case 'tr':
            return "Turkish";
            break;
        case 'ur':
            return "Urdu";
            break;
        case 'uk':
            return "Ukrainian";
            break;
        case 'vi':
            return "Vietnamese";
            break;
        case 'cy':
            return "Welsh";
            break;
        case 'am':
            return "Amharic";
            break;
        case 'ar':
            return "Arabic";
            break;
        case 'eu':
            return "Basque";
            break;
        case 'bn':
            return "Bengali";
            break;
        case 'pt-BR':
            return "Brazilian Portuguese";
            break;
        case 'bg':
            return "Bulgarian";
            break;
        case 'ca':
            return "Catalan";
            break;
        case 'hr':
            return "Croatian";
            break;
        case 'cs':
            return "Czech";
            break;
        case 'da':
            return "Danish";
            break;
        case 'nl':
            return "Dutch";
            break;
        default :
            return "";
            break;
    };
};

module.exports = longLangName;