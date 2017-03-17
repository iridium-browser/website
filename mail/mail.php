<?php
$name = $_POST['name'];
$email = $_POST['email'];
$email_subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent=" From: $name \n Subject: $subject \n Message: $message";
$recipient = "test@souldanger.com";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
