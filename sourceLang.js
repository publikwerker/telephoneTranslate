'use strict';

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
