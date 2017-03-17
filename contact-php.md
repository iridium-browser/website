---
layout: pagecentered
title: "Contact"
subtitle: PHP Approach
description: Contact Form
menu: false
id: contact
sitemap:
  exclude: 'yes'
---

<br/>
<section>
	<form name="sentMessage" id="contactForm" novalidate>
		<div class="row uniform 50%">
			<div class="6u 12u$(4) form-group">
				<input type="text" name="name" id="name" class="form-control" value="" placeholder="name" required="required" />
			</div>
			<div class="6u$ 12u$(4) form-group">
				<input type="email" name="email" id="email" class="form-control" value="" placeholder="email" required="required" />
			</div>
			<div class="12u$ form-group">
				<div class="select-wrapper">
					<select name="category" id="category" class="form-control" required="required">
						<option value="">- choose a subject -</option>
						<option value="General Question">General Question</option>
						<option value="Bug Report">Bug Report</option>
						<option value="Warning Bubble trk: tracker">Warning Bubble trk: tracker</option>
						<option value="I'd like to join the Development Team">I'd like to join the Development Team</option>
						<option value="Sponsoring">Sponsoring</option>
					</select>
				</div>
			</div>
			<div class="12u$ form-group">
				<textarea name="message" id="message" class="form-control" placeholder="enter your message" rows="6" required="required"></textarea>
			<p class="help-block text-danger"></p>
			</div>
			<div id="success"></div>
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
<script type="text/javascript" src="mail/jqBootstrapValidation.js"></script> 
<script type="text/javascript" src="mail/contact_me.js"></script> 
