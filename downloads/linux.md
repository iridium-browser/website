---
layout: pagecentered
title: "Download"
subtitle: Download IridiumBrowser for Ubuntu, Debian or OpenSUSE
description: Download IridiumBrowser for Ubuntu, Debian or OpenSUSE
menu: no
id: downloads
---

<div class="icon dl fa-linux"></div> 
<header>
	<h3>Repository for Ubuntu / Debian</h3>
	<p>current version 54.0</p>
</header>

	wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
	cat <<EOF | sudo tee /etc/apt/sources.list.d/iridium-browser.list
	deb [arch=amd64] https://downloads.iridiumbrowser.de/deb/ stable main
	#deb-src https://downloads.iridiumbrowser.de/deb/ stable main
	EOF
	sudo apt-get update
	sudo apt-get install iridium-browser
     
<p>system requirements<br/>
&#8226; 64-bit Ubuntu 14.04+ / Debian 8+<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
   
<hr>
  
<div class="dlinux fl-opensuse"></div>
<header>
	<h3>Repositories for openSUSE</h3>
	<p>current version 54.0</p>
</header>

<h3>Leap 42.1</h3>
	
	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.1/ iridium
	zypper in iridium-browser
     
<h3>Leap 42.2</h3>
	
	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.2/ iridium
	zypper in iridium-browser
     

<h3>13.2</h3>

	zypper ar https://downloads.iridiumbrowser.de/openSUSE_13.2/ iridium  
	zypper in iridium-browser

<h3>Tumbleweed</h3>

	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Tumbleweed/ iridium  
	zypper in iridium-browser
    
<p>system requirements<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>

<hr>

If this is not your Operating System or if you are looking for a different platform please choose from the following     
<a href="windows.html"><span class="fa fa-windows"></span> Windows 7+</a> | 
<a href="mac_os"><span class="fa fa-apple"></span> Mac OS X 10.9+</a> | 
	 
<hr>
  
<div class="icon dl fa-github"></div>
<header>
	<h3>Git Repository</h3>
	<p>Clone the source code with Git</p>
</header>

	git clone https://git.iridiumbrowser.de/git/iridium-browser

<p>Browse the source code with your browser<br/>
Git web view <a href="https://git.iridiumbrowser.de/cgit.cgi/iridium-browser/" target="_blank">https://git.iridiumbrowser.de/cgit.cgi/iridium-browser/</a></p>
  
<hr>
  
<div class="icon dl fa-code"></div>
<header>
<h3>Source Code</h3>
</header>
<p>Download at <a href="https://downloads.iridiumbrowser.de/source/" target="_blank">https://downloads.iridiumbrowser.de/source/</a></p>

