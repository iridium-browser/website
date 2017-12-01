---
layout: downloads
title: "Download for debian based systems"
subtitle: ""
description: Download Iridium Browser for all debian based systems.
hotpic-fb: "/images/hotpics/Iridium-fb_hotpic-dl-linux.png"
hotpic-tw: "/images/hotpics/Iridium-tw_hotpic-dl-linux.png"
menu: no
id: debian
structured-data:
  os0: Linux
  os1: Ubuntu
  os2: Debian
  os3: Mint
  os4: debian-based
  value: 5
  count: 1670
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

	wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
	cat <<EOF | sudo tee /etc/apt/sources.list.d/iridium-browser.list
	deb [arch=amd64] https://downloads.iridiumbrowser.de/deb/ stable main
	#deb-src https://downloads.iridiumbrowser.de/deb/ stable main
	EOF
	sudo apt-get update
	sudo apt-get install iridium-browser
     
\\
System requirements:   
&#8226; Debian 8+, Mint 17+, Ubuntu 14.04+ (all 64-bit)    
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable

---

If this is not your operating system or if you are looking for a different platform, please choose from the following:
