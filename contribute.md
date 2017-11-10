---
layout: default-layout
title: "Contribute"
subtitle: "Help to make people's privacy not an option but normal"
description: "Help to make people's privacy not an option but normal! As you can imagine, developing, provision of infrastructure, and testing is very intense work..."
hotpic-fb: "{{ '/images/hotpics/Iridium-hotpic_FB.png' | absolute_url }}"
hotpic-tw: "{{ '/images/hotpics/Iridium-hotpic_TW.png' | absolute_url }}"
menu: 4
sitemap:
  lastmod: 2017-11-09
  priority: 0.6
  changefreq: 'daily'
style: style2
id: contribute
permalink: /contribute/
ATTENTION: Content is in a collection see '_contribute'
---

<section class="wrapper {{ page.style }} special" id="{{ page.id }}">
	<div class="container">
		<header class="major">
			<h2>{% for contribute in site.contribute %} {{ contribute.title }} {% endfor %}</h2>
			<p>{% for contribute in site.contribute %} {{ contribute.subtitle }} {% endfor %}</p>
		</header>

		{% for contribute in site.contribute %}
		<div class="row">
			<div class="2u 2u(xlarge) 3u(large) 12u$(small)">
				<div class="icon {{ contribute.icon-class }}"></div>
			</div>
			<div class="10u$ 10u$(xlarge) 9u$(large) 12u$(small) content">
				<h4>{{ contribute.heading }}</h4>
				{{ contribute.content }}
			</div>
		</div>
		{% endfor %}
	</div>
</section>
