'use strict';

const axios = require('axios').default;
const fs = require('fs');
const http = require('http');
const Translation = require('./Translation');

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
let inputFile = fs.readFileSync("testFile1.txt", "utf8");

function removeSpaces (inFile) {
    return inFile.split(' ').join("%20");
}

function makeTheCalls (langList, inputFile) {
    const len = langList.length - 1;

    let inFile = removeSpaces(inputFile);
 //   for(let i = 0; i < len; i++){

        let lang1 = langList[0];
        let lang2 = langList[1];
  
        let iteration = new Translation(lang1, lang2, inputFile);
        let answer = iteration.getTranslation();
        console.log(answer);

        // capture response
        
        // set inputFile to new value
 //   }
        //return final value of inputFile
}

makeTheCalls(langList, inputFile);
console.log(inputFile);
let appDate = Date.now();
fs.writeFile(`./outputs/mynewfile${appDate}.txt`, inputFile, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });