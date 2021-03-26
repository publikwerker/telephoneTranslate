'use strict';

require('dotenv').config();
const axios = require('axios').default;
const fs = require('fs');
const API_KEY = process.env.API_KEY;

// starts and ends on English by default
const langList = [
    'en',
    'et',
    'fil',
    'fi',
    'fr',
    'de',
    'el',
    'gu',
    'iw',
    'hi',
    'hu',
    'is',
    'id',
    'it',
    'ja',
    'kn',
    'ko',
    'lv',
    'lt',
    'ms',
    'ml',
    'mr',
    'no',
    'pl',
    'pt-PT',
    'ro',
    'ru',
    'sr',
    'zh-CN',
    'sk',
    'sl',
    'es',
    'sw',
    'sv',
    'ta',
    'te',
    'th',
    'zh-TW',
    'tr',
    'ur',
    'uk',
    'vi',
    'cy',
    'am',
    'ar',
    'eu',
    'bn',
    'en-GB',
    'pt-BR',
    'bg',
    'ca',
    'chr',
    'hr',
    'cs',
    'da',
    'nl',
    'en'
];

// this will be replaced by dynamic input
let inputFile = fs.readFileSync("testFile1.txt", "utf8").trim();

// changes spaces to %20
function removeSpaces (inFile) {
    return inFile.split(' ').join("%20");
}

// handles individual calls
// returns the translated text
function runTheMill(source, target, text) {

    // Send a POST request
    axios.post(`https://translate.googleapis.com/language/translate/v2?key=${API_KEY}&q=${qText}&target=${lang2}&source=${lang1}&format=text`)
    .then(res => {
        if(res) {
            const text = res.data.data.translations[0].translatedText;
            console.log("this is the text:   ",text)
            return text;
        } else {
            console.log("no response");
        }
    })
    .catch(err => console.log(err));
}

let lang1 = langList[0];
let lang2 = langList[1];

let qText = removeSpaces(inputFile);

runTheMill(lang1, lang2, qText);