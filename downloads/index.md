---
layout: downloads-index-layout
title: "Download"
subtitle: ""
description: Download Iridium Browser for Windows, macOS, Ubuntu, Debian, Mint, OpenSUSE, Fedora, Red Hat Enterprise Linux 7 CentOS
hotpic-fb: "{{ '/images/hotpics/Iridium-fb_hotpic-download.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-tw_hotpic-download.png' | absolute_url }}"
menu: 2
sitemap:
  lastmod: 2017-10-30
  priority: 0.5
  changefreq: 'daily'
id: downloads
---

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
