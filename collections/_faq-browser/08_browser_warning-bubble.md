---
title:		"Why does a yellow warning bubble appear below the address bar?"
faq-id:		warning-bubble
position:	8
---
This helps the development team to find issues with potential privacy problems. 
The development marks all external URLs they find in the Chromium source code with a “trk:” prefix. Additionally, 
all “trk:” URLs receive a number which makes tracing the code easier, i.e. ```git grep trk:173```.      
When a marked URL is used while browsing, a warning “loading traced URL” in form of a yellow bubble below the 
address will be displayed, but the request will be executed.
This must not appear every time loading a certain URL. If it does, please file an issue in our bug tracker on GitHub.   
In the case of "trk:173", an update of the spell checker from Google is loaded. From our point of view, this is no 
real problem, as no client data is submitted at any time.