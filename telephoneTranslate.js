'use strict';
const fs = require('fs');
const http = require('http');

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

let lang1 = lang2 = '';

// this will be replaced by dynamic input
let inputFile = fs.readFileSync("testFile1.txt", "utf8");

let translateAPI = `https://translate.google.com/?sl=${lang1}&tl=${lang2}&text=${inputFile}&op=translate`;

console.log(inputFile);
console.log(Date.now());
fs.writeFile('mynewfile3.txt', inputFile, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });