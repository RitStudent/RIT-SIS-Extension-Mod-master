// ==UserScript==
// @name               RIT SIS Modifications
// @description        Adds enhancements to the RIT SIS system such as an RIT color theme.
// @namespace          demeo.rit.sismod
// @author             Thomas DeMeo
// @author             Dan Fenton
// @include            http://mycampus.rit.edu/*
// @include            https://mycampus.rit.edu/*
// @include            http://mycampustest.rit.edu/*
// @include            https://mycampustest.rit.edu/*
// @include            http://mycampustest2.rit.edu/*
// @include            https://mycampustest2.rit.edu/*
// @include            http://campus.rit.edu/*
// @include            https://campus.rit.edu/*

// @include            http://campustest2.rit.edu/*
// @include            https://campustest2.rit.edu/*

// @require            https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @icon               http://development.garnishmobile.com/TriSigma/background_tile.jpg
// @downloadURL        https://www.rit.edu/its/sisextension/SIS/sismod.user.js
// @updateURL          https://www.rit.edu/its/sisextension/SIS/sismod.user.js
// @version            1.0.0
// ==/UserScript==

function loadExtensionScript(callback) {
    var script = document.createElement("script");
    var head  = document.getElementsByTagName('head')[0];

    script.setAttribute("src", "https://www.rit.edu/its/sisextension/SIS/src/sis_extension.js");
    script.addEventListener('load', function () {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    head.appendChild(script);
}

// Used as a callback after the extension is loaded
function mainCallback() {

}

loadExtensionScript(mainCallback);
