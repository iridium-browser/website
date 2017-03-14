---
layout: pagecentered
title: "Contact"
description: Contact Form
menu: false
id: contact
sitemap:
  exclude: 'yes'
---

<section>
	<form method="post" action="#">
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
						<option value="1">Bug Report</option>
						<option value="1">Warning Bubble trk: tracker</option>
						<option value="1">Human Resources</option>
					</select>
				</div>
			</div>
			<div class="4u 12u$(3)">
				<input type="radio" id="priority-low" name="priority" checked>
				<label for="priority-low">Low Priority</label>
			</div>
			<div class="4u 12u$(3)">
				<input type="radio" id="priority-normal" name="priority">
				<label for="priority-normal">Normal Priority</label>
			</div>
			<div class="4u$ 12u$(3)">
				<input type="radio" id="priority-high" name="priority">
				<label for="priority-high">High Priority</label>
			</div>
			<div class="6u 12u$(3)">
				<input type="checkbox" id="copy" name="copy">
				<label for="copy">Email me a copy of this message</label>
			</div>
			<div class="6u$ 12u$(3)">
				<input type="checkbox" id="human" name="human" checked>
				<label for="human">I am a human and not a robot</label>
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