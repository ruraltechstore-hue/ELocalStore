<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'config.php';
require_once 'phpmailer/PHPMailer.php';

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePhone($phone) {
    return preg_match('/^[0-9+\-\s()]{10,15}$/', $phone);
}

function sendResponse($success, $message, $code = 200) {
    http_response_code($code);
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Invalid request method', 405);
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    $data = $_POST;
}

$type = isset($data['type']) ? sanitizeInput($data['type']) : 'contact';
$name = isset($data['name']) ? sanitizeInput($data['name']) : '';
$email = isset($data['email']) ? sanitizeInput($data['email']) : '';
$phone = isset($data['phone']) ? sanitizeInput($data['phone']) : '';
$subject = isset($data['subject']) ? sanitizeInput($data['subject']) : '';
$message = isset($data['message']) ? sanitizeInput($data['message']) : '';

$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Name is required and must be at least 2 characters';
}

if (empty($email) || !validateEmail($email)) {
    $errors[] = 'Valid email address is required';
}

if (empty($phone) || !validatePhone($phone)) {
    $errors[] = 'Valid phone number is required';
}

if ($type === 'contact') {
    if (empty($subject)) {
        $errors[] = 'Subject is required';
    }
    if (empty($message) || strlen($message) < 10) {
        $errors[] = 'Message is required and must be at least 10 characters';
    }
}

if (!empty($errors)) {
    sendResponse(false, implode(', ', $errors), 400);
}

$mail = new PHPMailer();

$mail->setSMTP(SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USERNAME, SMTP_PASSWORD);
$mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
$mail->addAddress(CONTACT_EMAIL);
$mail->addReplyTo($email, $name);
$mail->isHTML(false);

if ($type === 'contact') {
    $mail->setSubject("Contact Form: " . $subject);

    $emailBody = "New Contact Form Submission\n\n";
    $emailBody .= "Name: {$name}\n";
    $emailBody .= "Email: {$email}\n";
    $emailBody .= "Phone: {$phone}\n";
    $emailBody .= "Subject: {$subject}\n\n";
    $emailBody .= "Message:\n{$message}\n\n";
    $emailBody .= "---\n";
    $emailBody .= "Submitted from: elocalstore.com\n";
    $emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $emailBody .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";

    $mail->setBody($emailBody);

} else if ($type === 'franchise') {
    $franchiseType = isset($data['franchiseType']) ? sanitizeInput($data['franchiseType']) : 'N/A';
    $address = isset($data['address']) ? sanitizeInput($data['address']) : 'N/A';
    $pincode = isset($data['pincode']) ? sanitizeInput($data['pincode']) : 'N/A';
    $experience = isset($data['experience']) ? sanitizeInput($data['experience']) : 'N/A';
    $locationPreference = isset($data['locationPreference']) ? sanitizeInput($data['locationPreference']) : 'N/A';

    $mail->setSubject("New Franchise Application - " . $franchiseType);

    $emailBody = "New Franchise Application Received\n\n";
    $emailBody .= "PERSONAL DETAILS:\n";
    $emailBody .= "Name: {$name}\n";
    $emailBody .= "Email: {$email}\n";
    $emailBody .= "Phone: {$phone}\n";
    $emailBody .= "Address: {$address}\n";
    $emailBody .= "Pincode: {$pincode}\n\n";
    $emailBody .= "FRANCHISE DETAILS:\n";
    $emailBody .= "Type: {$franchiseType}\n";
    $emailBody .= "Experience: {$experience}\n";
    $emailBody .= "Preferred Location: {$locationPreference}\n\n";
    $emailBody .= "---\n";
    $emailBody .= "Application ID: ELS" . substr(time(), -6) . "\n";
    $emailBody .= "Submitted from: elocalstore.com\n";
    $emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $emailBody .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";

    $mail->setBody($emailBody);
}

if ($mail->send()) {
    sendResponse(true, 'Email sent successfully');
} else {
    $errors = $mail->getErrors();
    error_log('Email sending failed: ' . implode(', ', $errors));
    sendResponse(false, 'Failed to send email. Please try again or contact us directly at helpdesk@elocalstore.com', 500);
}
