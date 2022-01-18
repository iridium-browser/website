---
layout:				downloads-repo
title:				Download for Fedora
label:				Fedora
description:		Download Iridium Browser for Fedora 34 and 35. Install package from repository using the command line.
hotpic:				"/assets/images/hotpics/Iridium-hotpic-dl-fedora.png"
menu:				no
link:				/downloads/fedora
permalink:			/downloads/fedora
page-id:			fedora
style:				style1
width:				w-75

icon-class:			fo-fedora
OS: 				Repositories for Fedora
version:			2021.12.96
chromium:			96.0.4664.110
sys-reqs:
- Fedora 34+

structured-data:
  os0:			Fedora
  os1:			Fedora
  value:		4.9
  count:		667
sitemap:
  lastmod:		2022-01-18 10:00
  priority:		0.6
  changefreq:	'daily'
---

#### Fedora 34 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_34/iridium-browser.repo
	dnf install iridium-browser
{:#data}

#### Fedora 35 #
{:.dl}

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_35/iridium-browser.repo
	dnf install iridium-browser
{:#data1}