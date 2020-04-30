---
layout:				downloads-repo
title:				Download for RHEL and CentOS
label:				RHEL / CentOS
description:		Download Iridium Browser for Red Hat Enterprise Linux 7 and CentOS 7 or higher. Install package from repository using the command line.
hotpic:				"/assets/images/hotpics/Iridium-hotpic-dl-rhel.png"
menu:				no
link:				/downloads/rhel
permalink:			/downloads/rhel
page-id:			rhel
style:				style1
width:				w-75

icon-class:			fo-redhat
OS: 				Repository for RHEL & CentOS
version:			2020.04.81
chromium:			81.0.4044.92
sys-reqs:
- Red Hat Enterprise Linux 7+, CentOS 7+

structured-data:
  os0:			Red Hat Enterprise Linux | CentOS
  os1:			Red Hat Enterprise Linux
  os2:			CentOS
  value:		4.9
  count:		213
sitemap:
  lastmod:		2020-04-20 10:00
  priority:		0.8
  changefreq:	'daily'
---

#### Red Hat Enterprise Linux / CentOS 7 #

	wget -O /etc/yum.repos.d/iridium-browser.repo https://dl.iridiumbrowser.de/epel7/iridium-browser.repo
	yum install iridium-browser
{:#data}

#### Red Hat Enterprise Linux / CentOS 8 #

	wget -O /etc/yum.repos.d/iridium-browser.repo https://dl.iridiumbrowser.de/epel8/iridium-browser.repo
	yum install iridium-browser
{:#data1}