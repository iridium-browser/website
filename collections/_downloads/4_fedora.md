---
layout:				downloads-repo
title:				Download for Fedora
label:				Fedora
description:		Download Iridium Browser for Fedora 36 / 37 and 38. Install package from repository using the command line.
hotpic:				"/assets/images/hotpics/Iridium-hotpic-dl-fedora.png"
menu:				no
link:				/downloads/fedora
permalink:			/downloads/fedora
page-id:			fedora
style:				style1
width:				w-75

icon-class:			fo-fedora
OS: 				Repositories for Fedora
version:			2023.07.115.1
chromium:			115.0.5790.102
sys-reqs:
- Fedora 37 or higher

structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		697
sitemap:
  lastmod:		2023-07-25 12:00
  priority:		0.6
  changefreq:	'daily'
---

#### Fedora 37 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_37/iridium-browser.repo
	dnf install iridium-browser
{:#data}

#### Fedora 38 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_38/iridium-browser.repo
	dnf install iridium-browser
{:#data1}
