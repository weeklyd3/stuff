// ==UserScript==
// @name         Hangouts Font Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://hangouts.google.com/
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('DOMContentLoaded', function() {
        var style = document.createElement('style');
        style.innerHTML="*{font-family:Arial !important;}";
        document.body.append(style);
    });
})();
