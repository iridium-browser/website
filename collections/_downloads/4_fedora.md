---
layout:				downloads-repo
title:				Download for Fedora
label:				Fedora
description:		Download Iridium Browser for Fedora 36 and 37. Install package from repository using the command line.
hotpic:				"/assets/images/hotpics/Iridium-hotpic-dl-fedora.png"
menu:				no
link:				/downloads/fedora
permalink:			/downloads/fedora
page-id:			fedora
style:				style1
width:				w-75

icon-class:			fo-fedora
OS: 				Repositories for Fedora
version:			2023.01.109
chromium:			109.0.5414.74
sys-reqs:
- Fedora 34 or higher

structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		678
sitemap:
  lastmod:		2023-01-23 12:00
  priority:		0.6
  changefreq:	'daily'
---

#### Fedora 36 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_36/iridium-browser.repo
	dnf install iridium-browser
{:#data}

#### Fedora 37 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_37/iridium-browser.repo
	dnf install iridium-browser
{:#data1}

