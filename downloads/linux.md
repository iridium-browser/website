---
layout: downloads
title: "Download for Linux"
subtitle: ""
description: Download Iridium Browser for Ubuntu/Debian, openSUSE, Fedora and RHEL/CentOS
hotpic-fb: "{{ '/images/hotpics/Iridium-fb_hotpic-dl-linux.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-tw_hotpic-dl-linux.png' | absolute_url }}"
menu: no
id: linux
sitemap:
  lastmod: 2017-10-30
  priority: 0.8
  changefreq: 'daily'
permalink: /downloads/linux
---

{::options parse_block_html="true" /}
<div class="icon dl fa-linux"></div> 
<header>
### Repository for Ubuntu | Debian | Mint #
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
     
{: #suse }
     
---
  
<div class="dlinux fl-opensuse"></div>
<header>
### Repositories for openSUSE #
current version 2017.10      
<small>(based on Chromium 61.0.3163.100)</small>
</header>
### Leap 42.2 #
	
	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.2/ iridium
	zypper in iridium-browser
     
### Leap 42.3 #
	
	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.3/ iridium
	zypper in iridium-browser

### Tumbleweed #

	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Tumbleweed/ iridium  
	zypper in iridium-browser
     
{: #fedora }     
	 
---
     
<div class="dlfedora fl-fedora"></div>
<header>
### Repositories for Fedora #
current version 2017.10      
<small>(based on Chromium 61.0.3163.100)</small>
</header>

### Fedora 25 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_25/iridium-browser.repo
	dnf install iridium-browser
     	
### Fedora 26 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_26/iridium-browser.repo
	dnf install iridium-browser
     	
### Fedora 27 #

	dnf config-manager --add-repo https://dl.iridiumbrowser.de/fedora_27/iridium-browser.repo
	dnf install iridium-browser
     	
{: #redhat }          
     
---
     
<div class="dlfedora fl-redhat"></div>
<header>
### Repository for Red Hat Enterprise Linux | Cent OS #
current version 2017.10      
<small>(based on Chromium 61.0.3163.100)</small>
</header>

	wget -O /etc/yum.repos.d/iridium-browser.repo https://dl.iridiumbrowser.de/epel7/iridium-browser.repo
	yum install iridium-browser
     	
\\
System requirements:   
&#8226; Ubuntu 14.04+, Debian 8+, Mint 17+ (all 64-bit)    
&#8226; openSUSE Leap 42.2+, Tumbleweed    
&#8226; Fedora 25+    
&#8226; Red Hat Enterprise Linux 7+, CentOS 7+    
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable

---

If this is not your operating system or if you are looking for a different platform, please choose from the following:
