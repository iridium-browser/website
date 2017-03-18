$(function() {
	// Validate the contact form
  $('#contactform').validate({
  	// Specify what the errors should look like
  	// when they are dynamically added to the form
  	errorElement: "label",
  	wrapper: "td",
  	errorPlacement: function(error, element) {
  		error.insertAfter( element.parent() );
  		error.wrap("<div class='error'></div>");
  		$("<div></div>").insertAfter(error);
  	},
  	
  	// Add requirements to each of the fields
  	rules: {
  		name: {
  			required: true,
  			minlength: 2
  		},
  		email: {
  			required: true,
  			email: true
  		},
  		subject: {
  			required: true
  		},

  		message: {
  			required: true,
  			minlength: 10
  		}
  	},
  	
  	// Specify what error messages to display
  	// when the user does something horrid
  	messages: {
  		name: {
  			required: "please enter your name",
  			minlength: jQuery.format("At least {0} characters required")
  		},
  		email: {
  			required: "please enter your email",
  			email: "please enter a valid email"
  		},
  		subject: {
  			required: "please select a category",
  		},
  		message: {
  			required: "please enter a message",
  			minlength: jQuery.format("At least {0} characters required")
  		}
  	},
  	
  	// Use Ajax to send everything to processForm.php
  	submitHandler: function(form) {
  		$("#send").attr("value", "Sending...");
  		$(form).ajaxSubmit({
  			success: function(responseText, statusText, xhr, $form) {
  				$(form).slideUp("fast");
  				$("#response").html(responseText).hide().slideDown("fast");
  			}
  		});
  		return false;
  	}
  });
});