// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      1.05
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match        *://*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

// 1.05: New linkable Webmotes

var version = "1.05"

function applyWebmote(code, image, link) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, "<a href='" + link + "'><img src='" + image + "'></a>");
  });
} 

applyWebmote("stackoverflow", "https://github.com/IAP-Reloaded/Webmotes/raw/master/Stack_Overflow.png", "stackoverflow.com");
applyWebmote("minecraft-diamond", "https://github.com/IAP-Reloaded/Webmotes/raw/master/Grid_Diamant.png", "");
applyWebmote("facebook", "http://screenshots.en.sftcdn.net/en/scrn/69665000/69665708/facebook-chat-notification-02-32x32.png", "");
applyWebmote("itworks", "http://i.imgur.com/BjaY6nR.png", "")
applyWebmote("itworks-dark", "http://i.imgur.com/2u9WdEk.png", "")
applyWebmote("flipped-smile", "http://i.imgur.com/OuFD0NS.png", "")
applyWebmote("frown", "http://i.imgur.com/h206D7y.png", "")
applyWebmote("animationtest", "https://i.imgur.com/NhxgpdA.gif", "")
applyWebmote("yourversion", "https://github.com/IAP-Reloaded/Webmotes/blob/master/1.05%20Version%20Number.png?raw=true", "") // Make sure to update this!
applyWebmote("billcipherwheel", "https://i1.sndcdn.com/artworks-000132224764-hvpveo-small.jpg", "")
applyWebmote("billcipherdeal", "https://i1.sndcdn.com/artworks-000058208109-z2pw13-small.jpg", "")
applyWebmote("rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Rainbow.png", "")
applyWebmote("backwards-rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Backwards%20Rainbow.png", "")
applyWebmote("itworks-white", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/It%20Works%20White.png", "")
