---
layout: default-layout
title: "About"
subtitle: "About the Project"
description: "With Iridium, the whole process is entirely transparent. The public Git repository allows a direct view on all changes made. The complete source code is therefore available."
hotpic-fb: "{{ '/images/hotpics/Iridium-hotpic_FB.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-hotpic_TW.png' | absolute_url }}"
menu: 3
sitemap:
  lastmod: 2017-11-09
  priority: 0.5
  changefreq: 'daily'
style: style1
id: about
ATTENTION: Content is in a collection see '_about'
---

<section class="wrapper {{ page.style }} special" id="{{ page.id }}">
<div class="container">
	<header class="major">
		<h2>{% for about in site.about %} {{ about.title }} {% endfor %}</h2>
		<p>{% for about in site.about %} {{ about.subtitle }} {% endfor %}</p>
	</header>
	{% for about in site.about %}
	<div class="icon {{ about.icon-class }}"></div>
	{{ about.content }}
	{% endfor %}

<!-- Developer Logos -->
	<div class="row uniform">
	{% for about-logos in site.data.about-logos %}
	<section class="3u 4u(xlarge) 6u(medium) special">
		<a href="{{ about-logos.link }}" title="{{ about-logos.title }}" target="{{ about-logos.target }}" class="{{ about-logos.logo-class }}" rel="noreferrer"></a>
		<div class="logo-text">{{ about-logos.title }}</div>
	</section>
	{% endfor %}
	</div>
</div>
</section>
