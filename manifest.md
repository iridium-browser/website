---
layout: default-layout
title: "Manifest"
subtitle: "Important Notice"
description: "Before Iridium Browser, we had to decide if we wanted to have cutting edge technologies like sandboxed processes, WebRTC, WebUSB … , or if we wanted to use a browser that respects our privacy. So we decided to use the power of free software and build a browser that can do both."
hotpic-fb: "{{ '/images/hotpics/Iridium-fb_hotpic-manifest.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-tw_hotpic-manifest.png' | absolute_url }}"
menu: no
sitemap:
  lastmod: 2017-11-09
  priority: 0.6
  changefreq: 'daily'
style: style2
id: about
ATTENTION: Content is in a collection see '_manifest'
---

<section class="wrapper {{ page.style }} special" id="{{ page.id }}">
<div class="container">
	<header class="major">
		<h2>{% for manifest in site.manifest %} {{ manifest.title }} {% endfor %}</h2>
		<p>{% for manifest in site.manifest %} {{ manifest.subtitle }} {% endfor %}</p>
	</header>
	{% for manifest in site.manifest %}
	{{ manifest.content }}
	{% endfor %}
</div>
</section>
