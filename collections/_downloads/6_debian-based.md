---
layout:				downloads-repo
title:				Download for Debian-based systems
label:				Debian based
description:		Download Iridium Browser for all Debian-based systems. Install package from repository using the command line.
hotpic:				"/assets/images/hotpics/Iridium-hotpic-dl-debian.png"
menu:				no
link:				/downloads/debian
permalink:			/downloads/debian
page-id:			debian
style:				style1
width:				w-75

icon-class:			fo-debian
OS: 				Repository for Debian-based systems
version:			2019.04.73 - outdated
chromium:			73.0.3683.103
sys-reqs:
- Debian 10+, Mint 17+, Ubuntu 16.04+ (all 64-bit)	

structured-data:
  os0:			Debian-based systems
  os1:			Debian
  os2:			Mint
  os3:			Ubuntu
  os4:			Debian-based
  value:		5
  count:		2311
sitemap:
  lastmod:		2019-12-13 10:00:00 +0100
  priority:		0.6
  changefreq:	'daily'
---
__Please note__    
Unfortunately, there are no current releases available for any Debian based platform.

	wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
	cat <<EOF | sudo tee /etc/apt/sources.list.d/iridium-browser.list
	deb [arch=amd64] https://downloads.iridiumbrowser.de/deb/ stable main
	#deb-src https://downloads.iridiumbrowser.de/deb/ stable main
	EOF
	sudo apt-get update
	sudo apt-get install iridium-browser
{:#data}

<br/>
<span class="align-center">
<span class="fa fa-exclamation-circle"></span> **known issue**    
on some Debian based systems you will need to 'enable namespaces in Debian kernel'    
please use the following [fix](https://superuser.com/questions/1094597/enable-user-namespaces-in-debian-kernel#1122977 "enable namespaces in Debian kernel"):   
</span>

	echo 'kernel.unprivileged_userns_clone=1' > /etc/sysctl.d/00-local-userns.conf
	service procps restart
{:#data1}
