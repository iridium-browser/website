---
title:		"Why syncing and signing in to Google does not work?"
faq-id:		signin_syncing
date:		2022-12-10 12:00
position:	6
---
While not directly intentional, it kind of defeats the purpose of Iridium Browser if you are signed into Google and 
report everything to them. From a technical point of view, signing in to Google requires a Google API key, client ID 
and client secret.   
Iridium Browser does not ship with one — therefore it does not work. 
If you insist to use Google sign-in, check [Chromium API keys](http://www.chromium.org/developers/how-tos/api-keys "Chromium Developer How-To's"){:.ext-link} 
and follow the instructions for ```Providing Keys at Runtime```.     