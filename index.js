'use strict';

const runTranslate = (e) => console.log(e.target.form[0].value);

document.getElementById("translateBtn").addEventListener("click", runTranslate);

