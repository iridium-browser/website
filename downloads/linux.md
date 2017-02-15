---
layout: pagecentered
title: "Download"
subtitle: IridiumBrowser for Linux
description: Download IridiumBrowser for Ubuntu, Debian, Mint and openSUSE
menu: no
id: linux
sitemap:
  lastmod: 2017-01-02
  priority: 0.9
  changefreq: 'monthly'
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
&#8226; 64-bit Ubuntu 14.04+, Debian 8+, Mint 17+<br/>
&#8226; openSUSE 13.1+, Leap 42.1+, Tumbleweed<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>

<hr/>

If this is not your Operating System or if you are looking for a different platform please choose from the following	  
<div class="container 50%">
	<div class="row">
		<div class="6u 12u$(small)"><a class="button small fit icon fa-windows" href="windows.html" title="Windows Download Page">Windows</a></div>
		<div class="6u 12u$(small)"><a class="button small fit icon fa-apple" href="mac_os.html" title="Mac OS Download Page">Mac OS</a></div>
	</div>
</div>
<br/>
Currently IridiumBrowser is available for the following Operating Systems<br/>
<span class="os-text">
Windows 7+ &#8226; 
 Mac OS X 10.9+ &#8226; 
 Ubuntu 14.04+ (64-bit) &#8226; 
 Debian 8+ (64-bit) &#8226; 
 Mint 17+ (64-bit) &#8226;
 openSUSE 13.1+ &#8226; Leap 42.1+ &#8226; Tumbleweed<br/>
</span>
<span class="fa fa-warning"></span> IridiumBrowser is <u>not</u> available for Android, iOS, Windows Mobile or any other mobile OS!
