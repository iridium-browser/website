---
layout: pagecentered
title: "Download"
subtitle: Download IridiumBrowser for Ubuntu, Debian, Mint or OpenSUSE
description: Download IridiumBrowser for Ubuntu, Debian, Mint or OpenSUSE
menu: no
id: downloads
---

<div class="icon dl fa-linux"></div> 
<header>
	<h3>Repository for Ubuntu | Debian | Mint</h3>
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
&#8226; 64-bit Ubuntu 14.04+, Debian 8+, Mint 17+<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>

<span id="suse"></span>

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
<span style="font-size:1.1em; font-weight:bold;">
<a href="windows.html" style="text-decoration:none;"><span class="fa fa-windows"></span> Windows 7+</a>    
<a href="mac_os.html" style="text-decoration:none;"><span class="fa fa-apple"></span> Mac OS X 10.9+</a>      
</span>
	 
<span class="fa fa-warning"></span> IridiumBrowser is <u>not</u> available for iOS, Android, Windows Phone or any other mobile OS!     	 

<span style="font-size:1.1em; font-weight:bold;">
<a href="git.html" style="text-decoration:none;"><span class="fa fa-github"></span> clone the Source Code with Git</a>      
<a href="source.html" style="text-decoration:none;"><span class="fa fa-code"></span> download the Source Code</a>      
</span>
