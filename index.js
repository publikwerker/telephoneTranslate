'use strict';
import millWrapper from 'telephoneTranslate';

//async function translate(result) {
  //  console.log("translate");
    //var translation = await millWrapper(masterLangList, result);
    //return translation;
//}

const runTranslate = (e) => {
    console.log("runTranslate");
    const result = (e.target.form[1].value);
    console.log(e);
    console.log(e.target.form);

    //console.log(translate(result))
    millWrapper(masterLangList, result);

    document.getElementById("result").innerHTML = `<div>
        <h3>The source language is: ${e.target.form[0].value}</h3>
        <h3>The result is: </h3>
        <span>${result}</span>
    </div>`;
}

document.getElementById("phrase").addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("translateBtn").click();
    }
});
document.getElementById("translateBtn").addEventListener("click", runTranslate);

// need to send language and phrase to telephoneTranslate.js
// 