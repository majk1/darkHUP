// ==UserScript==
// @name         darkHUP
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Dark theme for hup.hu
// @author       Majki <majki@majki.hu>
// @match        https://hup.hu/*
// @grant        _hupAddStyle
// @run-at       document-body
// ==/UserScript==

(function() {
    "use strict";

    function _hupAddStyle(css) {
        const style = document.getElementById("darkHUP_style") || (function() {
            const style = document.createElement("style");
            style.type = "text/css";
            style.id = "GM_addStyleBy8626";
            document.head.appendChild(style);
            return style;
        })();
        const sheet = style.sheet;
        sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
    }

    function _forAllInDoc(tagName, fun) {
        [...document.getElementsByTagName(tagName)].forEach(elem => {
            fun(elem);
        });
    }

    function _changeAttributeIf(tagName, attrName, attrValue, newValue) {
        _forAllInDoc(tagName, (e) => {
            if (e.hasAttribute(attrName) && e.getAttribute(attrName) === attrValue) {
                e.setAttribute(attrName, newValue);
            }
        });
    }

    // created dark theme
    _hupAddStyle("body { background-color: #202020; }");
    _hupAddStyle("#all { background-color: #202020; }");
    _hupAddStyle("#all { color: #D0D0D0; }");
    _hupAddStyle("#all a { color: #D0D0D0; }");
    _hupAddStyle("#top-nav { background-color: #303030; color: #808080; }");
    _hupAddStyle("#top-nav { border: solid 1px #707070; }");
    _hupAddStyle("#top-nav a { color: #808080; }");
    _hupAddStyle("#top-nav a:hover { color: #A0A0A0; }");
    _hupAddStyle("#primary { border-color: #707070; }");

    _hupAddStyle(".main-content th { border-bottom: 2px solid #676767; padding-bottom: 4px }");
    _hupAddStyle(".main-content tbody tr:first-child td { padding-top: 4px }");
    _hupAddStyle(".main-content .odd  { background-color: #303030; color: #C0C0C0; border-bottom: 1px solid #606060; }");
    _hupAddStyle(".main-content .even { background-color: #383838; color: #C0C0C0; border-bottom: 1px solid #606060; }");
    _hupAddStyle(".main-content a { color: #C0C0C0 }");
    _hupAddStyle(".main-content a:hover { color: #D0D0D0 }");

    _hupAddStyle(".main-content .content-title { background-color: #606060; color: #E0E0E0; border: 1px solid #707070; padding: 8px; color: #F0F0F0; }");
    _hupAddStyle(".main-content .box { background-color: #303030; border: 1px solid #606060; }");

    _hupAddStyle(".sidebar .block { border: 1px solid #404040; }");
    _hupAddStyle(".sidebar .block .content { background-color: #303030; color: #808080; }");
    _hupAddStyle(".sidebar .block .content a { color: #A0A0A0 !important; }");
    _hupAddStyle(".sidebar .block .content a:hover { color: #C0C0C0 !important; }");
    _hupAddStyle(".sidebar .block h2 { background-color: #505050; border: 1px solid #707070; }");

    _hupAddStyle("#block-block-41 div.content { background-color: #404040; }"); // jobs
    _hupAddStyle("#block-aggregator-feed-50 div.content { background-color: #404040; }"); // jobs

    _hupAddStyle(".node { background-color: #303030; }");
    _hupAddStyle(".node .title { background-color: #505050; border: 1px solid #707070; }");
    _hupAddStyle(".node.sticky { background-color: #505050; color: #E0E0E0; }");
    _hupAddStyle(".node.sticky .title { background-color: #707070; border: 1px solid #909090; color: #E0E0E0; }");

    _hupAddStyle(".preview .node { background-color: #303030; }");
    _hupAddStyle(".preview .node .title { background-color: #505050; border: 1px solid #707070; }");

    _hupAddStyle("#footer { background-color: #505050; color: #B0B0B0; border: 1px solid #606060; }");
    _hupAddStyle("#footer a { color: #C0C0C0; }");

    _hupAddStyle(".comment            { background-color: #303030; border: 1px solid #606060; }");
    _hupAddStyle(".comment .content   { background-color: #303030; color: #C0C0C0; padding: 4px; }");
    _hupAddStyle(".comment .submitted { background-color: #404040; border-bottom: 1px solid #606060; padding: 2px; }");
    _hupAddStyle(".comment .link      { background-color: #404040; border-top:    1px solid #606060; padding: 2px; }");

    _hupAddStyle(".comment-new            { background-color: #403030; border: 2px solid #906060; }");
    _hupAddStyle(".comment-new .content   { background-color: #403030; color: #D0D0D0; padding: 4px; }");
    _hupAddStyle(".comment-new .submitted { background-color: #604040; border-bottom: 1px solid #807070; padding: 2px; }");
    _hupAddStyle(".comment-new .link      { background-color: #604040; border-bottom: 1px solid #807070; padding: 2px; }");

    _hupAddStyle("#comment-controls .box { background-color: #373737; border: 1px solid #606060; }");
    _hupAddStyle("#comment-controls .box .title { color: #808080; }");
    _hupAddStyle("#comment-controls .box .content { color: #808080; }");

    _hupAddStyle(".poll .bar             { background-color: #404040 }");
    _hupAddStyle(".poll .bar .foreground { background-color: #707070 }");

    _hupAddStyle("ul.primary li a        { background-color: #404040; color: #606060; border: 1px solid #707070; border-bottom-color: #bbb }");
    _hupAddStyle("ul.primary li a:hover  { background-color: #474747; color: #A0A0A0; border-bottom-color: #bbb }");
    _hupAddStyle("ul.primary li.active a { background-color: #505050; color: #C0C0C0; border: 1px solid #808080; border-bottom-color: #bbb }");

    _hupAddStyle(".resizable-textarea .grippie { background-color: #909090; }");

    // twitter dark theme
    const meta = document.createElement("meta");
    meta.name = "twitter:widgets:theme";
    meta.content = "dark";
    document.getElementsByTagName("head")[0].appendChild(meta);

    document.addEventListener("DOMContentLoaded", function() {

        _forAllInDoc("input", inp => {
            if (inp.type === "text" || inp.type === "password") {
                inp.style.backgroundColor = "#505050";
                inp.style.color = "#E0E0E0";
                inp.style.border = "1px solid #A0A0A0";
            } else if (inp.type === "button" || inp.type === "submit") {
                inp.style.backgroundColor = "#606060";
                inp.style.color = "#E0E0E0";
                inp.style.border = "1px solid #A0A0A0";
            } else if (inp.type === "radio") {
                inp.style.backgroundColor = "#606060";
                inp.style.color = "#E0E0E0";
                inp.style.border = "1px solid #A0A0A0";
            }
        });

        _forAllInDoc("textarea", ta => {
            ta.style.backgroundColor = "#606060";
            ta.style.color = "#E0E0E0";
            ta.style.border = "1px solid #808080";
            ta.style.fontSize = "1.10em";
        });

        _forAllInDoc("select", sel => {
            sel.style.backgroundColor = "#202020";
            sel.style.color = "#B0B0B0";
            sel.style.border = "1px solid #606060";
        });

        _changeAttributeIf("tr", "bgcolor", "#dedede", "#505050");
        _changeAttributeIf("table", "bgcolor", "#d8d8c4", "#505050");
        _changeAttributeIf("font", "color", "black", "#A0A0A0");
        
        
        // these changes must go after page load due to hupper extension
        _hupAddStyle(".main-content .odd:hover  { background-color: #505050; color: #D0D0D0; border-bottom: 1px solid #606060; }");
        _hupAddStyle(".main-content .even:hover { background-color: #585858; color: #D0D0D0; border-bottom: 1px solid #606060; }");

    }, false);

})();
