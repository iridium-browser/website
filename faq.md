---
layout: pagecentered
title: "FAQ"
subtitle: "Frequently Asked Questions"
description: "Frequently Asked Questions | learn more about Iridium Browser and it's features such as updating the browser, synching bookmarks, search engines, extensions/addons, etc."
hotpic-fb: "{{ '/images/hotpics/Iridium-fb_hotpic-faq.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-tw_hotpic-faq.png' | absolute_url }}"
menu: 6
sitemap:
  lastmod: 2017-11-10
  priority: 0.5
  changefreq: 'weekly'
style: style2
id: faq

---

##### What are the differences between Iridium and Chromium? #    
Please refer to our [Wiki on GitHub](https://github.com/iridium-browser/tracker/wiki/Differences-between-Iridium-and-Chromium "Differences between Iridium and Chromium"){:target="_blank"}     
    
----

##### Why syncing and signing in to Iridium or Google does not work? #    
While not directly intentional it kind of defeats the purpose of Iridium if you are signed into Google and report everything to them. From a technical point of view, signing in to Google requires a Google API key, client ID and client secret and Iridium does not ship with one - thus it does not work.
If you insist to use Google sign-in, check [Chromium API-Keys](http://www.chromium.org/developers/how-tos/api-keys "Chromium Developer How-To's"){:target="_blank"} and follow the instructions for ```Providing Keys at Runtime```.     

----

##### Why does a yellow warning bubble appear below the address bar? #
This helps the development team to find issues with potential privacy problems. 
The development marks all external URLs they find in the Chromium source code with a ‘trk:’ prefix. Additionally all ‘trk:’ URLs receive a number which makes tracing the code easy i.e. ```git grep trk:173```.
When a marked URL is used while browsing, a warning ‘loading traced URL’ in form of a yellow bubble below the address will be displayed, but the request will be executed.
This must not appear every time loading a certain URL. If it does, please file a report in our bug tracker on GitHub.
In the case trk:173, an update of the spell checker from Google is loaded. From our view no real problem since no client data is submitted.

----

##### Why is Qwant the default search engine? #    
Iridium is an independent project, not connected to, supported or financed by any search engine.    
The decision for Qwant as default search engine was made about two years ago, when we were looking for a European search engine taking care of privacy and delivering good search results presented in a modern interface. 
At the time Qwant (*[see Qwant Privacy Policy](https://about.qwant.com/legal/privacy/ "see Qwant Privacy Policy"){:target="_blank"}*) and DuckDuckGo *([see DuckDuckGo Privacy Policy](https://duckduckgo.com/privacy "see DuckDuckGo Privacy Policy"){:target="_blank"})* were on our radar, but Qwant simply impressed us more.     
However, you are free to use any search engine with Iridium Browser.

----

##### How to update Iridium Browser? #    
Iridium Browser does not download and install updates automatically. Updates can only be applied manually by downloading and installing the latest build. This will not affect saved bookmarks.   
Use ````chrome://help```` to check on your build version. Latest versions can always be found in the [Download](/downloads/ "download Iridium Browser / check for Updates") Section.   
It is recommended to sign up to the mailing list in order to get all information about the latest releases.   

----

##### Why do some Audio / Video players not work in Iridium Browser? #    
Iridium Browser does not include all audio and video codecs or extensions such as Chrome.    
This has many reasons, for instance some codecs or extensions are proprietary and do not disclose their source code and sometimes there are legal issues as well. If you have any issues with audio or video, please try to install the codec or extension manually or from ```chrome://extensions/```

----

##### Why can't the extension verify Iridium Browser? #    
Please try to install the extension manually or from ```chrome://extensions/```

----

##### How is the Iridium Browser Source Code licensed? #  
As the Iridium Browser is based on Chromium the same license applies. Chromium consists of many parts and each carries its own license. By entering ```chrome://credits/``` into the address bar of the Iridium Browser all components are listed and their license can be viewed.

----

##### Is Iridium Browser available for Android, iOS or Windows Phone/Mobile? #    
Iridium Browser is currently not available for Android, iOS, Windows Phone/Mobile or any other mobile OS.

----

For all general questions about the Browser, please go to [Chrome Help](https://support.google.com/chrome/?p=help "go to Chrome Help"){:target="_blank"}     