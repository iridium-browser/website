---
layout:			downloads-repo
title:			"Download for Debian-based systems"
description:	Download Iridium Browser for all Debian-based systems. Install package from repository using the command line.
hotpic-fb:		"/images/hotpics/Iridium-fb_hotpic-dl-debian.png"
hotpic-tw:		"/images/hotpics/Iridium-tw_hotpic-dl-debian.png"
id:				debian
style:			style1
menu:			no
link:			/downloads/debian
structured-data:
  os0:			Debian-based systems
  os1:			Debian
  os2:			Mint
  os3:			Ubuntu
  os4:			Debian-based
  value:		5
  count:		401
sitemap:
  lastmod:		2018-11-20
  priority:		0.8
  changefreq:	'daily'
permalink:		/downloads/debian

icon-class:			dlinux fl-debian
OS: 				Repository for Debian-based systems
version:			2018.11.71.1
chromium:			71.0.3578.30
sys-reqs:
- Ubuntu 16.04+ (x86_64)
---

	wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
	cat <<EOF | sudo tee /etc/apt/sources.list.d/iridium-browser.list
	deb [arch=amd64] https://downloads.iridiumbrowser.de/deb/ stable main
	#deb-src https://downloads.iridiumbrowser.de/deb/ stable main
	EOF
	sudo apt-get update
	sudo apt-get install iridium-browser
