---
layout: faq
title: "Why syncing and signing in to Iridium or Google does not work?"
date: 2017-11-28 22:00:00 +0100
---

While not directly intentional, it kind of defeats the purpose of Iridium if you are signed into Google and report everything to them. From a technical point of view, signing in to Google requires a Google API key, client ID and client secret. Iridium does not ship with one — therefore it does not work.
If you insist to use Google sign-in, check [Chromium API keys](http://www.chromium.org/developers/how-tos/api-keys "Chromium Developer How-To's"){:target="_blank"} and follow the instructions for ```Providing Keys at Runtime```.     
