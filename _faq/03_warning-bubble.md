---
layout: faq
title: "Why does a yellow warning bubble appear below the address bar?"
date: 2017-11-28 22:00:00 +0100
---

This helps the development team to find issues with potential privacy problems. 
The development marks all external URLs they find in the Chromium source code with a “trk:” prefix. Additionally, all “trk:” URLs receive a number which makes tracing the code easier, i.e. ```git grep trk:173```.
When a marked URL is used while browsing, a warning “loading traced URL” in form of a yellow bubble below the address will be displayed, but the request will be executed.
This must not appear every time loading a certain URL. If it does, please file a report in our bug tracker on GitHub.
In the case of trk:173, an update of the spell checker from Google is loaded. From our view, this is no real problem, since no client data is submitted.
