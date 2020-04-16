---
title:	"Why is Google Safe Browsing enabled by default?"
date:	2018-05-17 12:00
faq-id:	safe-browsing
---

Iridium has [Google Safe Browsing](http://blog.chromium.org/2012/01/all-about-safe-browsing.html) enabled by default. This means within 5 minutes after start and then periodically every 30(?) minutes, requests to iridiumbrowser.de (keeps a cache of the GSB data) as well as safebrowsing.googleapis.com ([source](https://github.com/iridium-browser/tracker/issues/131#issuecomment-394428596)) are made to update the safe browsing database. You can disable it at any time in the settings by unchecking “Privacy -> Protect you and your device from dangerous sites” (advanced settings) to avoid this request.
