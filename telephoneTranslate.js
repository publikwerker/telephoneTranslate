'use strict';

require('dotenv').config();
const axios = require('axios').default;
const fs = require('fs');
const {longLangName, makeLangList} = require('./langList');
const API_KEY = process.env.API_KEY;
const textSource = 'testFile8.txt';
const textDestination = 'textTrans9.txt';
const sourceLanguage = 'en';

// starts and ends on English by default
const masterLangList = [  
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'pt-BR',
    'bg',
    'ca',
    'ceb',
    'zh-CN',
    'zh-TW',
    'co',
    'hr',
    'cs',
    'da',
    'nl',
    'eo',
    'en',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'haw',
    'iw',
    'hi',
    'hmn',
    'hu',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jv',
    'kn',
    'kk',
    'km',
    'rw',
    'ko',
    'ku',
    'ky',
    'lo',
    'la',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'ny',
    'or',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'tk',
    'uk',
    'ur',
    'ug',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu'
];

const langList = makeLangList(sourceLanguage, masterLangList);

// this will be replaced by dynamic input
let inputFile = fs.readFileSync(textSource, "utf8").trim();
let data = `Source: ${sourceLanguage} ${inputFile}`;

fs.writeFile(`./outputs/${textDestination}`, data, (err) => {
    if (err) throw err;
})

// changes spaces to %20
function removeSpaces (inFile) {
    return inFile.split(' ').join("%20");
}

// handles individual calls
// returns the translated text
function runTheMill(source, target, text) {

    const uri = `https://translate.googleapis.com/language/translate/v2?key=${API_KEY}&q=${text}&target=${target}&source=${source}&format=text`;

    // Send a POST request
    return axios.post(uri)
    .then(res => {
        if(res) {
            const text = res.data.data.translations[0].translatedText;
            //console.log("this is the text:   ",res.data.data.translations);
            let lang = longLangName(target);
            let lineItem = `\nIn ${lang}, it says, ${text}`;
            fs.appendFile(`./outputs/${textDestination}`, lineItem, (err) => {
                if (err) throw err;
            });
            return text;
        }
    })
    .catch(err => console.error(err));
}

// this powers the runTheMill function
async function millWrapper ( langList, inputFile ) {

    const len = langList.length - 1;
    let outputFile = inputFile;
    let i = 0;

    while(i < len) {
        let lang1 = langList[i];
        let lang2 = langList[i+1];
        let qText = removeSpaces(outputFile);
 
        try {
            outputFile = await runTheMill(lang1, lang2, qText)
            .then(res => outputFile = encodeURI(res))
            .then(res => {
                return res;
            });
        } catch (err) {
            console.error(err);
        }

        ++i;
    }

    console.log("This is final result:   ", decodeURI(outputFile));
    return decodeURI(outputFile);
}


 millWrapper(langList, inputFile);


// create translation object {string "itSays" , string "whichMeans", string "source", string "target"}
// save past translations
// module that opens with the line-by-line details
