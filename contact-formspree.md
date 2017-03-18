---
layout: pagecentered
title: "Contact"
subtitle: Third-Party (Formspree.io) Approach
description: Contact Form
menu: false
id: contact
sitemap:
  exclude: 'yes'
---

<br/>
<section>
	<form method="post" action="//formspree.io/test@souldanger.com">
		<div class="row uniform 50%">
			<div class="6u 12u$(4)">
				<input type="text" name="name" id="name" value="" placeholder="name" required="required" />
			</div>
			<div class="6u$ 12u$(4)">
				<input type="email" name="email" id="email" value="" placeholder="email" required="required" />
			</div>
			<div class="12u$">
				<div class="select-wrapper">
					<select name="category" id="category" required="required">
						<option value="">- choose a category</option>
						<option value="General Question">General Question</option>
						<option value="Bug Report">Bug Report</option>
						<option value="Warning Bubble trk: tracker">Warning Bubble trk: tracker</option>
						<option value="Join the Development Team">I'd like to join the Development Team</option>
						<option value="Sponsoring">Sponsoring</option>
					</select>
				</div>
			</div>
			<div class="12u$">
				<textarea name="message" id="message" placeholder="enter your message" rows="6" required="required"></textarea>
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

