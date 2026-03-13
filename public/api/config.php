<?php
// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_SECURE', 'tls');
define('SMTP_USERNAME', 'helpdesk@elocalstore.com');
define('SMTP_PASSWORD', 'YOUR_GMAIL_APP_PASSWORD_HERE'); // Use Gmail App Password, not regular password
define('SMTP_FROM_EMAIL', 'helpdesk@elocalstore.com');
define('SMTP_FROM_NAME', 'eLocal Store');
define('CONTACT_EMAIL', 'helpdesk@elocalstore.com');

// Security
define('ALLOWED_ORIGINS', ['https://elocalstore.com', 'http://localhost:5173', 'http://localhost:4173']);

// Error reporting (set to 0 in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
