---
layout: pagecentered
title: "Contact"
description: Contact Form
menu: false
id: contact
sitemap:
  exclude: 'yes'
---

<br/>
<section>
	<form method="post" action="//formspree.io/a.roesler@kopano.com">
		<div class="row uniform 50%">
			<div class="6u 12u$(4)">
				<input type="text" name="name" id="name" value="" placeholder="Name" />
			</div>
			<div class="6u$ 12u$(4)">
				<input type="email" name="email" id="email" value="" placeholder="Email" />
			</div>
			<div class="12u$">
				<div class="select-wrapper">
					<select name="category" id="category">
						<option value="">- Category -</option>
						<option value="1">General Question</option>
						<option value="2">Bug Report</option>
						<option value="3">Warning Bubble trk: tracker</option>
						<option value="4">I'd like to join the Development Team</option>
						<option value="5">Sponsoring</option>
					</select>
				</div>
			</div>
			<div class="12u$">
				<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
			</div>
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Send Message" class="special" /></li>
					<li><input type="reset" value="Reset" /></li>
				</ul>
			</div>
		</div>
	</form>
</section>
<br/>

