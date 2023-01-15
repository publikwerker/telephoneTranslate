'use strict';
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
    'en-US',
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

$(document).ready(function () {
    var select = document.createElement("select");
    var prefLang = navigator.language;
    select.name = "langSelect";
    select.id = "langSelect";

    for (const lang of masterLangList.sort()) {
        var option = document.createElement("option");
        option.value = lang;
        option.text = lang;
        if (lang == prefLang) {
            option.setAttribute("selected", "selected");
            select.prepend(option);
        } else select.add(option);
    }

    var label = document.createElement("label");
    label.innerHTML = "Select starting language: ";
    label.htmlFor = "langSelect";

    var formEl = document.getElementById("form");
    formEl.prepend(select);
    formEl.prepend(label);
});
