<?php 

$name = $_POST['user_name'];
$email = $_POST['user_mail'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'shahzod1505@mail.ru';                 // Наш логин
$mail->Password = 'Sirius1505';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('shahzod1505@mail.ru', 'Qahhorov Shahzod');   // От кого письмо 
$mail->addAddress('shahzod1505@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Ползователь оставил данные для консультации';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $name . ' <br>
	Email: ' . $email . ' <br>
	Телефон: ' . $phone . ' <br>
	Комментария: ' .$comment . '';
	
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?> 