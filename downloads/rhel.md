---
layout:			downloads-repo
title:			"Download for RHEL and CentOS"
description:	Download Iridium Browser for Red Hat Enterprise Linux 7 and CentOS 7 or higher. Install package from repository using the command line.
hotpic-fb:		"/images/hotpics/Iridium-fb_hotpic-dl-rhel.png"
hotpic-tw:		"/images/hotpics/Iridium-tw_hotpic-dl-rhel.png"
id:				rhel
style:			style1
menu:			no
link:			/downloads/rhel
structured-data:
  os0:			Red Hat Enterprise Linux | CentOS
  os1:			Red Hat Enterprise Linux
  os2:			CentOS
  value:		4.9
  count:		125
sitemap:
  lastmod:		2019-04-15 10:00:00 +0100
  priority:		0.8
  changefreq:	'daily'
permalink:		/downloads/rhel

icon-class:			dlinux fl-redhat
OS: 				Repository for RHEL & CentOS
version:			2019.04.73
chromium:			73.0.3683.103
sys-reqs:
- Red Hat Enterprise Linux 7+, CentOS 7+
---

	wget -O /etc/yum.repos.d/iridium-browser.repo https://dl.iridiumbrowser.de/epel7/iridium-browser.repo
	yum install iridium-browser
