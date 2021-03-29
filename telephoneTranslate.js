'use strict';

require('dotenv').config();
const axios = require('axios').default;
const fs = require('fs');
const API_KEY = process.env.API_KEY;
const textSource = 'testFile3.txt';
const textDestination = 'textTrans3.txt';
const sourceLanguage = 'en';

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
 //   'en-GB',
    'pt-BR',
    'bg',
    'ca',
 //   'chr',
    'hr',
    'cs',
    'da',
    'nl',
    'en'
];

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
            console.log("this is the text:   ",res.data.data.translations);
            let lineItem = `\nIn ${target}, it says, ${text}`;
            fs.appendFile(`./outputs/${textDestination}`, lineItem, (err) => {
                if (err) throw err;
            });
            return text;
        }
    })
    .catch(err => console.log(err));
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
      console.log(lang2, ' ');
        try {
            outputFile = await runTheMill(lang1, lang2, qText)
            .then(res => outputFile = encodeURI(res))
            .then(res => {
                return res;
            });
        } catch (err) {
            console.log(err);
        }

        ++i;
    }

    console.log("This is final result:   ", decodeURI(outputFile));
    return decodeURI(outputFile);
}


millWrapper(langList, inputFile);


// add function to configure langList based upon the original source language
// create translation object {string "itSays" , string "whichMeans", string "source", string "target"}
// create a function which receives lang code and returns full language name