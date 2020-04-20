---
layout:				downloads-repo
title:				Download for Fedora
label:				Fedora
description:		Download Iridium Browser for Fedora 31 and 32. Install package from repository using the command line.
hotpic-fb:			"/images/hotpics/Iridium-fb_hotpic-dl-fedora.png"
hotpic-tw:			"/images/hotpics/Iridium-tw_hotpic-dl-fedora.png"
menu:				no
link:				/downloads/fedora
permalink:			/downloads/fedora
page-id:			fedora
style:				style1
width:				w-75

icon-class:			fo-fedora
OS: 				Repositories for Fedora
version:			2020.04.81
chromium:			81.0.4044.92
sys-reqs:
- Fedora 30+

structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		253
sitemap:
  lastmod:		2020-04-20 10:00
  priority:		0.8
  changefreq:	'daily'
---

#### Fedora 31 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_31/iridium-browser.repo
	dnf install iridium-browser
{:#data}


#### Fedora 32 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_32/iridium-browser.repo
	dnf install iridium-browser
{:#data1}