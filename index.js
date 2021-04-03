'use strict';

const runTranslate = (e) => {
    const result = (e.target.form[0].value);
    document.getElementById("result").innerHTML = `<div>
        <h3>The result is: </h3>
        <span>${result}</span>
    </div>`;
}

document.getElementById("translateBtn").addEventListener("click", runTranslate);

