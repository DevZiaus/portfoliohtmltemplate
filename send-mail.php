<?php
if(isset($_POST['contact-submit'])) {

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }


    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }



    $full_name = trim($_POST['name']); // required
    $email_from = trim($_POST['email']); // required
    $email_subject = $_POST['subject']; // not required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$full_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }

  if(strlen($message) < 5) {
    $error_message .= 'The message you entered does not appear to be valid.<br />';
  }

  if(strlen($error_message) > 0) {
    died($error_message);
  }
  
	// EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "yourmail@domain.com"; //here goes your email address. Change this to your own email adderess
    $subject = "$full_name sent a message on $email_subject via your website www.yourdomain.comm"; // here change your website address

    $email_message = "Form details below.\n\n";


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($full_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Subject: ".clean_string($email_subject)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

// create email headers
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "From: " .$full_name ."<".$email_from . ">\r\n";
    $headers .= "Reply-To: ".$email_from."\r\n";
    $headers .= "X-Priority: 1\r\n";
    $headers .= "X-MSMail-Priority: High\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    mail($email_to, $subject, $email_message, $headers);
?>

<!-- include your own success html here -->

<h2>Thank you for contacting us.</h2>
<h4> We will be in touch with you very soon.</h4>
<a href="index.html">&laquo; Go to Home Page</a>


<?php

}
?>