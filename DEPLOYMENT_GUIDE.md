# eLocal Store - Hostinger Deployment Guide

## Prerequisites
- Hostinger shared hosting account
- Gmail account with App Password enabled
- FTP/SFTP client (FileZilla recommended)

## Step 1: Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to Security → 2-Step Verification (enable if not already)
3. Scroll to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password (you'll need this in Step 4)

## Step 2: Build the React Application

```bash
npm run build
```

This creates a `dist` folder with your production files.

## Step 3: Upload Files to Hostinger

### Option A: Using File Manager (Hostinger Control Panel)
1. Log into Hostinger control panel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all contents from `dist` folder to `public_html`
5. Create folder `public_html/api`
6. Upload all files from `public/api` to `public_html/api`

### Option B: Using FTP Client (FileZilla)
1. Get FTP credentials from Hostinger control panel
2. Connect via FTP
3. Navigate to `public_html`
4. Upload contents:
   - All files from `dist/*` → `public_html/`
   - All files from `public/api/*` → `public_html/api/`
   - File `public/.htaccess` → `public_html/.htaccess`

## Step 4: Configure Email Settings

1. Open `public_html/api/config.php` in Hostinger File Manager or FTP
2. Update the following line:
   ```php
   define('SMTP_PASSWORD', 'YOUR_GMAIL_APP_PASSWORD_HERE');
   ```
   Replace `YOUR_GMAIL_APP_PASSWORD_HERE` with the 16-character App Password from Step 1

3. Verify other settings:
   ```php
   define('SMTP_USERNAME', 'elocalstore1@gmail.com');
   define('CONTACT_EMAIL', 'elocalstore1@gmail.com');
   ```

## Step 5: Set File Permissions

Set the following permissions via File Manager or FTP:
- `api/` folder: 755
- `api/config.php`: 644
- `api/contact.php`: 644
- `api/phpmailer/PHPMailer.php`: 644
- `.htaccess`: 644

## Step 6: Test the Contact Form

1. Visit your website: `https://yourdomain.com/contact`
2. Fill out and submit the contact form
3. Check `elocalstore1@gmail.com` inbox for the email
4. If no email arrives, check the next section

## Troubleshooting

### Emails Not Sending

1. **Check Gmail App Password**
   - Ensure you're using App Password, not regular Gmail password
   - Verify it's correctly pasted in config.php (no extra spaces)

2. **Enable Error Logging**
   Edit `api/config.php`:
   ```php
   ini_set('display_errors', 1);
   error_reporting(E_ALL);
   ```
   Then check browser console and server error logs

3. **Check PHP Version**
   - Ensure PHP 7.4+ is enabled in Hostinger control panel
   - Go to: Advanced → PHP Configuration

4. **Verify SMTP Settings**
   - Some shared hosts block external SMTP
   - Contact Hostinger support if needed

5. **Test PHP Mail Function**
   Create `test.php` in `public_html/api/`:
   ```php
   <?php
   require_once 'config.php';
   require_once 'phpmailer/PHPMailer.php';

   $mail = new PHPMailer();
   $mail->setSMTP(SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USERNAME, SMTP_PASSWORD);
   $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
   $mail->addAddress(CONTACT_EMAIL);
   $mail->setSubject('Test Email');
   $mail->setBody('This is a test email.');

   if ($mail->send()) {
       echo 'Email sent successfully!';
   } else {
       echo 'Failed: ' . implode(', ', $mail->getErrors());
   }
   ```
   Visit: `https://yourdomain.com/api/test.php`

### Form Validation Errors

- Ensure all required fields are filled
- Check email format is valid
- Phone should be 10-15 digits

### 404 Errors on API Calls

1. Verify `.htaccess` is uploaded to `public_html/`
2. Check if mod_rewrite is enabled (contact Hostinger support)
3. Verify API files are in correct location: `public_html/api/`

## Security Checklist

- ✅ Gmail App Password configured (not regular password)
- ✅ config.php contains correct credentials
- ✅ File permissions set correctly
- ✅ .htaccess protects config.php from browser access
- ✅ Error display disabled in production (display_errors = 0)

## File Structure on Hostinger

```
public_html/
├── index.html
├── assets/
│   ├── index-xxx.css
│   └── index-xxx.js
├── .htaccess
└── api/
    ├── config.php
    ├── contact.php
    └── phpmailer/
        └── PHPMailer.php
```

## Support

If you encounter issues:
1. Check Hostinger error logs (via control panel)
2. Enable error display temporarily in config.php
3. Contact Hostinger support for SMTP or PHP issues
4. Test with Gmail account settings

## Production Checklist

Before going live:
- [ ] Gmail App Password configured
- [ ] Test contact form submission
- [ ] Verify email received at elocalstore1@gmail.com
- [ ] Test franchise application form
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test on different browsers
- [ ] Disable error display in config.php
- [ ] Remove test.php if created

## Notes

- **Do not commit config.php with real passwords to Git**
- Keep Gmail App Password secure
- Monitor inbox for spam/delivery issues
- Consider adding SPF/DKIM records for better deliverability
