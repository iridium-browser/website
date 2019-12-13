---
layout:			downloads-repo
title:			"Download for Fedora"
description:	Download Iridium Browser for Fedora 30 and 31. Install package from repository using the command line.
hotpic-fb:		"/images/hotpics/Iridium-fb_hotpic-dl-fedora.png"
hotpic-tw:		"/images/hotpics/Iridium-tw_hotpic-dl-fedora.png"
id:				fedora
style:			style1
menu:			no
link:			/downloads/fedora
structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		199
sitemap:
  lastmod:		2019-12-13 10:00:00 +0100
  priority:		0.8
  changefreq:	'daily'
permalink:		/downloads/fedora

icon-class:			dlinux fl-fedora-inverse
OS: 				Repositories for Fedora
version:			2019.11.78
chromium:			78.0.3904.87
sys-reqs:
- Fedora 30+
---

#### Fedora 30 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_30/iridium-browser.repo
	dnf install iridium-browser
     	
#### Fedora 31 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_31/iridium-browser.repo
	dnf install iridium-browser
