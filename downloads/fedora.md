---
layout:			dl-repo
title:			"Download for Fedora"
subtitle:		""
description:	Download Iridium Browser for Fedora 27 and 28. Install package from repository using the command line.
hotpic-fb:		"/images/hotpics/Iridium-fb_hotpic-dl-fedora.png"
hotpic-tw:		"/images/hotpics/Iridium-tw_hotpic-dl-fedora.png"
id:				fedora
style:			1
menu:			no
link:			/downloads/fedora
structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		77
sitemap:
  lastmod:		2018-06-04
  priority:		0.8
  changefreq:	'daily'
permalink:		/downloads/fedora

icon-class:			dlinux fl-fedora-inverse
OS: 				Repositories for Fedora
version:			2018.5
chromium:			67.0.3396.40
sys-reqs:
- Fedora 24+
---

#### Fedora 27 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_27/iridium-browser.repo
	dnf install iridium-browser
     	
#### Fedora 28 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_28/iridium-browser.repo
	dnf install iridium-browser
