---
layout: downloads
title: "Download"
subtitle: ""
description: Download Iridium Browser for Windows, macOS, Ubuntu, Debian, Mint, OpenSUSE, Fedora and Red Hat Enterprise Linux
hotpic-fb: "{{ '/images/hotpics/Iridium-fb_hotpic-download.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-tw_hotpic-download.png' | absolute_url }}"
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
if (os_name == "Windows") { window.location="{{ '/downloads/windows.html' | relative_url }}"; }
else if (os_name == "Mac OS") { window.location="{{ '/downloads/macos.html' | relative_url }}"; } 
else if (os_name == "Ubuntu") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "Debian") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "Linux") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "SUSE") { window.location="{{ '/downloads/linux.html#suse' | relative_url }}"; }
else if (os_name == "CentOS") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "Fedora") { window.location="{{ '/downloads/linux.html#fedora' | relative_url }}"; }
else if (os_name == "DragonFly") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "Gentoo") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "Mint") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "RedHat") { window.location="{{ '/downloads/linux.html#redhat' | relative_url }}"; }
else if (os_name == "Slackware") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else if (os_name == "VectorLinux") { window.location="{{ '/downloads/linux.html' | relative_url }}"; }
else { window.location="{{ '/downloads/sorry.html' | relative_url }}"; }
</script>

<script type="application/ld+json">
[
	{
		"@context": "http://schema.org/",
		"@type": "SoftwareApplication",
		"name": "{{ site.title }}",
		"url": "{{ site.url }}",
		"downloadUrl": "{{ '/downloads/' | absolute_url }}",
		"description": "{{ site.description }}",
		"applicationCategory": "Browser",
		"operatingSystem": "Windows, macOS, Ubuntu, Debian, openSUSE, Fedora, Red Hat Enterprise Linux",
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
			"contentUrl": "{{ site.hotpic | absolute_url }}",
			"url": "{{ absolute_url }}"
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
			"contentUrl": "{{ site.hotpic | absolute_url }}",
			"url": "{{ absolute_url }}"
		},
		"offers": {
			"@type": "Offer",
			"priceCurrency": "EUR",
			"price": "0.00"		
		}
	}
]
</script>
