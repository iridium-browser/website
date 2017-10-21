---
layout: downloads-layout
title: "Download"
subtitle: ""
description: Download Iridium Browser for Windows, Mac OSX, Ubuntu, Debian, Mint, OpenSUSE, Fedora and Red Hat Enterprise Linux
hotpic-fb: "/images/hotpics/Iridium-fb_hotpic-download.png"
hotpic-tw: "/images/hotpics/Iridium-tw_hotpic-download.png"
menu: 2
sitemap:
  lastmod: 2017-10-20
  priority: 1.0
  changefreq: 'daily'
id: downloads
---

<script type="text/javascript">
var parser = new UAParser();
var result = parser.getResult();
var os_name = result.os.name;
if (os_name == "Windows") { window.location="windows.html"; }
else if (os_name == "Mac OS") { window.location="macosx.html"; } 
else if (os_name == "Ubuntu") { window.location="linux.html"; }
else if (os_name == "Debian") { window.location="linux.html"; }
else if (os_name == "Linux") { window.location="linux.html"; }
else if (os_name == "SUSE") { window.location="linux.html#suse"; }
else if (os_name == "CentOS") { window.location="linux.html"; }
else if (os_name == "Fedora") { window.location="linux.html#fedora"; }
else if (os_name == "DragonFly") { window.location="linux.html"; }
else if (os_name == "Gentoo") { window.location="linux.html"; }
else if (os_name == "Mint") { window.location="linux.html"; }
else if (os_name == "RedHat") { window.location="linux.html#redhat"; }
else if (os_name == "Slackware") { window.location="linux.html"; }
else if (os_name == "VectorLinux") { window.location="linux.html"; }
else { window.location="sorry.html"; }
</script>

<script type="application/ld+json">
[
	{
		"@context": "http://schema.org/",
		"@type": "SoftwareApplication",
		"name": "{{ site.title }}",
		"url": "{{ site.url }}",
		"downloadUrl": "{{ '/downloads/' | prepend: site.baseurl | prepend: site.url }}",
		"description": "{{ site.description }}",
		"applicationCategory": "Browser",
		"operatingSystem": "Windows, Mac OSX, Ubuntu, Debian, openSUSE, Fedora, Red Hat Enterprise Linux",
		"aggregateRating": {
			"@type": "AggregateRating",
			"bestRating": "100",
			"ratingCount": "421",
			"ratingValue": "87"
		},
		"image": {
			"@type": "ImageObject",
			"height": "200",
			"width": "200",
			"contentUrl": "{{ site.hotpic | prepend: site.baseurl | prepend: site.url }}",
			"url": "{{ site.url | append: site.baseurl}}"
		},
		"offers": {
		"@type": "Offer",
		"priceCurrency": "EUR",
		"price": "0.00"		
		}
	},
	{ 
		"@context": "http://schema.org",
		"@type": "Product",
		"aggregateRating": {
			"@type": "AggregateRating",
			"bestRating": "100",
			"ratingCount": "421",
			"ratingValue": "87"
		},
		"name": "{{ site.title }}",
		"url": "{{ site.url | append: site.baseurl}}",
		"description": "{{ site.description }}",
		"image": {
			"@type": "ImageObject",
			"height": "200",
			"width": "200",
			"contentUrl": "{{ site.hotpic | prepend: site.baseurl | prepend: site.url }}",
			"url": "{{ site.url | append: site.baseurl}}"
		},
		"offers": {
			"@type": "Offer",
			"priceCurrency": "EUR",
			"price": "0.00"		
		}
	}
]
</script>