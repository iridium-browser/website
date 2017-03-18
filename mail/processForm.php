<?php

// Clean up the input values
foreach($_POST as $key => $value) {
	if(ini_get('magic_quotes_gpc'))
		$_POST[$key] = stripslashes($_POST[$key]);
	
	$_POST[$key] = htmlspecialchars(strip_tags($_POST[$key]));
}

// Assign the input values to variables for easy reference
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Test input values for errors
$errors = array();
if(strlen($name) < 2) {
	if(!$name) {
		$errors[] = "You must enter a name";
	} else {
		$errors[] = "Name must be at least 2 characters";
	}
}
if(!$email) {
	$errors[] = "You must enter an email";
} else if(!validEmail($email)) {
	$errors[] = "You must enter a valid email";
}
if(strlen($message) < 10) {
	if(!$message) {
		$errors[] = "You must enter a message";
	} else {
		$errors[] = "Message must be at least 10 characters";
	}
}

if($errors) {
	// Output errors and die with a failure message
	$errortext = "";
	foreach($errors as $error) {
		$errortext .= "<p>".$error."</p>";
	}
	echo "<div class='failure'><span class='fa fa-exclamation-circle'></span> The following errors occured:". $errortext ."</div>";
}

// Send the email
$to = "test@souldanger.com";
$subject = "Contact Form: $subject";
$message = "$message";
$headers = "From: $email";

mail($to, $subject, $message, $headers);

// Die with a success message
die("<div class='success'><h3>SUCCESS</h3><span class='fa fa-send-o' style='font-size:5em;'></span><p>...your message has been sent...</p></div>");

// A function that checks to see if
// an email is valid
function validEmail($email)
{
   $isValid = true;
   $atIndex = strrpos($email, "@");
   if (is_bool($atIndex) && !$atIndex)
   {
      $isValid = false;
   }
   else
   {
      $domain = substr($email, $atIndex+1);
      $local = substr($email, 0, $atIndex);
      $localLen = strlen($local);
      $domainLen = strlen($domain);
      if ($localLen < 1 || $localLen > 64)
      {
         // local part length exceeded
         $isValid = false;
      }
      else if ($domainLen < 1 || $domainLen > 255)
      {
         // domain part length exceeded
         $isValid = false;
      }
      else if ($local[0] == '.' || $local[$localLen-1] == '.')
      {
         // local part starts or ends with '.'
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $local))
      {
         // local part has two consecutive dots
         $isValid = false;
      }
      else if (!preg_match('/^[A-Za-z0-9\\-\\.]+$/', $domain))
      {
         // character not valid in domain part
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $domain))
      {
         // domain part has two consecutive dots
         $isValid = false;
      }
      else if(!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         // character not valid in local part unless 
         // local part is quoted
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
         {
            $isValid = false;
         }
      }
      if ($isValid && !(checkdnsrr($domain,"MX") || checkdnsrr($domain,"A")))
      {
         // domain not found in DNS
         $isValid = false;
      }
   }
   return $isValid;
}

?>