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
version:			2020.11.85
chromium:			85.0.4183.83
sys-reqs:
- Fedora 32+

structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		531
sitemap:
  lastmod:		2020-12-02 14:00
  priority:		0.6
  changefreq:	'daily'
---

#### Fedora 32 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_32/iridium-browser.repo
	dnf install iridium-browser
{:#data}


#### Fedora 33 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_33/iridium-browser.repo
	dnf install iridium-browser
{:#data1}