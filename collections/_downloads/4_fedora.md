---
layout:				downloads-repo
title:				Download for Fedora
label:				Fedora
description:		Download Iridium Browser for Fedora 32 and 33. Install package from repository using the command line.
hotpic:				"/assets/images/hotpics/Iridium-hotpic-dl-fedora.png"
menu:				no
link:				/downloads/fedora
permalink:			/downloads/fedora
page-id:			fedora
style:				style1
width:				w-75

icon-class:			fo-fedora
OS: 				Repositories for Fedora
version:			2021.06.91
chromium:			91.0.4472.114
sys-reqs:
- Fedora 34+

structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		598
sitemap:
  lastmod:		2021-07-09 20:00
  priority:		0.6
  changefreq:	'daily'
---

#### Fedora 34 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_34/iridium-browser.repo
	dnf install iridium-browser
{:#data}