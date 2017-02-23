---
layout: pagecentered
title: "FAQ"
subtitle: "Frequently Asked Questions"
description: "Frequently Asked Questions"
menu: 3
id: faq
sitemap:
  lastmod: 2016-10-23
  priority: 0.3
  changefreq: 'daily'
---

##### What are the differences between Iridium and Chromium? #    
Please refer to our [Wiki on GitHub](https://github.com/iridium-browser/tracker/wiki/Differences-between-Iridium-and-Chromium){:target="_blank"}     
    
----

##### Why do some Audio / Video players not work in IridiumBrowser? #    
IridiumBrowser does not include all audio and video codecs or extensions such as Chrome.    
This has many reasons, for instance some codecs or extensions are proprietary and do not disclose their source code and sometimes there are legal issues as well. If you have any issues with audio or video, please try to install the codec or extension manually or from chrome://extensions/

----

##### Why can’t the extension verify IridiumBrowser? #    
Please try to install the extension manually or from chrome://extensions/

----

##### Is IridiumBrowser available for Android, iOS or Windows Phone/Mobile? #    
IridiumBrowser is currently <u>not</u> available for Android, iOS, Windows Phone/Mobile or any other mobile OS.

----

##### Why does a yellow warning bubble appear below the address bar? #

This helps the development team to find issues with potential privacy problems. 
The development marks all external URLs they find in the Chromium source code with a ‘trk:’ prefix. Additionally all ‘trk:’ URLs receive a number which makes tracing the code easy i.e. ‘git grep trk:173’.
When a marked URL is used while browsing, a warning ‘loading traced URL’ in form of a yellow bubble below the address will be displayed, but the request will be executed.
This must not appear every time loading a certain URL. If it does, please file a report in our bug tracker on GitHub.
In the case trk:173, an update of the spell checker from Google is loaded. From our view no real problem since no client data is submitted.

----

For all general questions about the Browser, please go to [Chrome Help](https://support.google.com/chrome/?p=help){:target="_blank"}     