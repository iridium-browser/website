---
layout: pagecentered
title: "Contact"
subtitle: PHP Approach w/ JQuery Validation and Ajax
description: Contact Form
menu: false
id: contact
sitemap:
  exclude: 'yes'
---

<script type="text/javascript" src="mail/jquery.validate.min.js"></script> 
<script type="text/javascript" src="mail/jquery.form.js"></script> 
<script type="text/javascript" src="mail/contact.js"></script> 

<br/>
<section>
	<form id="contactform" action="mail/processForm.php" method="post">
		<div class="row uniform 50%">
			<div class="6u 12u$(4)">
				<div><input type="text" name="name" id="name" value="" placeholder="name" /></div>
			</div>
			<div class="6u$ 12u$(4)">
				<div><input type="email" name="email" id="email" value="" placeholder="email" /></div>
			</div>
			<div class="12u$">
				<div class="select-wrapper">
					<select name="subject" id="subject">
						<option value="" disabled selected class="select-option">- choose a category</option>
						<option value="General Question">General Question</option>
						<option value="Bug Report">Bug Report</option>
						<option value="Warning Bubble trk: tracker">Warning Bubble trk: tracker</option>
						<option value="I'd like to join the Development Team">I'd like to join the Development Team</option>
						<option value="Sponsoring">Sponsoring</option>
					</select>
				</div>
			</div>
			<div class="12u$">
				<div><textarea name="message" id="message" placeholder="enter message" rows="6"></textarea></div>
			</div>
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Send Message" id="send" class="special" /></li>
					<li><input type="reset" value="Reset" /></li>
				</ul>
			</div>
		</div>
	</form>
	<div id="response"></div>
</section>
<br/>
