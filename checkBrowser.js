if (typeof GestPay === 'undefined')
    var GestPay = {}; var infolink = 'https://www.gestpay.it/checkbrowser/browser-not-supported/'; var ResUriSrc = '../pagam/images/'; var PageLang = document.documentElement.lang; var userLang = navigator.language || navigator.userLanguage; if (PageLang.length > 0) { userLang = PageLang }
var IE = (function () {
    "use strict"; var ret, isTheBrowser, actualVersion, jscriptMap, jscriptVersion; isTheBrowser = !1; jscriptMap = { "5.5": "5.5", "5.6": "6", "5.7": "7", "5.8": "8", "9": "9", "10": "10" }; jscriptVersion = new Function("/*@cc_on return @_jscript_version; @*/")(); if (jscriptVersion !== undefined) { isTheBrowser = !0; actualVersion = jscriptMap[jscriptVersion] }
    ret = { isTheBrowser: isTheBrowser, actualVersion: actualVersion }; return ret
}()); var Chk = (function () {
    var ret, enabled, IE10, PRO
    IE10 = !1
    PRO = !1
    try { if (ChkResultTE) { enabled = !0 } } catch (e) {
        enabled = !1
        if (parseInt(IE.actualVersion) == 10) {
            IE10 = !0
            userLang = navigator.browserLanguage
        }
    }
    try { if (ChkResultPRO) { PRO = !0 } } catch (e) { PRO = !1 }
    ret = { enabled: enabled, IE10: IE10, PRO: PRO }
    return ret
}()); GestPay.ChkTLS = Chk; function Hide() { document.getElementById("browserAlertShort").style.display = "none" }
function showShortAlert() { document.getElementById("browserAlertShort").style.display = "block" }
var shrMsg_ITA = 'presto non sar&agrave; pi&ugrave;'; var shrMsg_ENG = 'which will soon be unsupported! '; shrMsg_ITA = 'non &eacute; pi&ugrave;'; shrMsg_ENG = 'which is not supported!';
var UpdatelinksITA = ['<span id="UpdateLinks">', '                <span><a target="_blank" href="http://windows.microsoft.com/it-it/internet-explorer/download-ie"><img src="' + ResUriSrc + 'IE10_white.png" alt="IE"></a></span> ', '                <span><a target="_blank" href="https://www.mozilla.org/it/firefox/new/"><img src="' + ResUriSrc + 'firefox-icon_white.png" alt="FIREFOX"></a></span>', '                <span><a target="_blank" href="https://www.google.com/chrome/"><img src="' + ResUriSrc + 'Chrome-icon_white.png" alt="Chrome"></a></span>', '  			</span>'].join(''); var UpdatelinksENG = ['<span id="UpdateLinks">', '                <span><a target="_blank" href="http://windows.microsoft.com/it-it/internet-explorer/download-ie"><img src="' + ResUriSrc + 'IE10_white.png" alt="IE"></a></span> ', '                <span><a target="_blank" href="https://www.mozilla.org/en/firefox/new/"><img src="' + ResUriSrc + 'firefox-icon_white.png" alt="FIREFOX"></a></span>', '                <span><a target="_blank" href="https://www.google.com/chrome/"><img src="' + ResUriSrc + 'Chrome-icon_white.png" alt="Chrome"></a></span>', '  			</span>'].join(''); GestPay.shortAlertMsgITA = '<span class="info1">Attenzione! Il browser che stai utilizzando ' + shrMsg_ITA + ' supportato!</span><span class="info2">Ti invitiamo ad aggiornarlo ' + UpdatelinksITA + '</span>'; GestPay.shortAlertMsgENG = '<span class="info1">Warning! You are using a browser  version ' + shrMsg_ENG + '</span><span class="info2">Please upgrade to a modern browser ' + UpdatelinksENG + '</span>'; GestPay.MoreInfoITA = '<div><a id="browserAlertLinkContainer" href="' + infolink + '" target="_blank">Maggiori informazioni</a></div>'
GestPay.MoreInfoENG = '<div><a id="browserAlertLinkContainer" href="' + infolink + '" target="_blank">More info</a></div>'
if (userLang.indexOf('IT') != -1) { GestPay.shortMSG = GestPay.shortAlertMsgITA; GestPay.MoreInfo = GestPay.MoreInfoITA } else { GestPay.shortMSG = GestPay.shortAlertMsgENG; GestPay.MoreInfo = GestPay.MoreInfoENG }
var html = ['<div id="browserAlertShort">', '				<div id="col2">' + GestPay.shortMSG + '</div>', '				<div id="col3">' + GestPay.MoreInfo + '</div>', '				<div id="col1"><span><a onClick="Hide();">x</a></span></div>', ' </div>'].join(''); GestPay.displayMsg = function () { try { if (!Chk.enabled) { showUIMessage('Generic') } } catch (e) { } }
function showUIMessage(msgDetail) { var newDiv = document.createElement('div'); newDiv.setAttribute("id", 'browserAlert'); newDiv.innerHTML = html; document.body.insertBefore(newDiv, document.body.firstChild) }