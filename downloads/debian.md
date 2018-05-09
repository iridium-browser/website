---
layout: downloads
title: "Download for debian based systems"
subtitle: ""
description: Download Iridium Browser for all Debian based systems. Install package from repository using the command line.
hotpic-fb: "/images/hotpics/Iridium-fb_hotpic-dl-debian.png"
hotpic-tw: "/images/hotpics/Iridium-tw_hotpic-dl-debian.png"
id: debian
style: 1
menu: no
link: /downloads/debian
structured-data:
  os0: Debian based systems
  os1: Debian
  os2: Mint
  os3: Ubuntu
  os4: Debian-based
  value: 5
  count: 247
sitemap:
  lastmod: 2017-12-01
  priority: 0.8
  changefreq: 'daily'
permalink: /downloads/debian
---

{::options parse_block_html="true" /}
<div class="dlinux fl-debian"></div>
<header>
### Repository for debian based systems #
current version 2017.10      
<small>(based on Chromium 61.0.3163.100)</small>
</header>
<div class="container 75%">

	wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
	cat <<EOF | sudo tee /etc/apt/sources.list.d/iridium-browser.list
	deb [arch=amd64] https://downloads.iridiumbrowser.de/deb/ stable main
	#deb-src https://downloads.iridiumbrowser.de/deb/ stable main
	EOF
	sudo apt-get update
	sudo apt-get install iridium-browser
     
</div>
\\
System requirements:   
&#8226; Debian 8+, Mint 17+, Ubuntu 14.04+ (all 64-bit)    
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable
