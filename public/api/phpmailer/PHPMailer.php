<?php
class PHPMailer {
    private $to = [];
    private $from = '';
    private $fromName = '';
    private $replyTo = '';
    private $replyToName = '';
    private $subject = '';
    private $body = '';
    private $isHTML = false;
    private $smtpHost = '';
    private $smtpPort = 587;
    private $smtpSecure = 'tls';
    private $smtpUsername = '';
    private $smtpPassword = '';
    private $errors = [];

    public function setFrom($email, $name = '') {
        $this->from = $email;
        $this->fromName = $name;
    }

    public function addAddress($email, $name = '') {
        $this->to[] = ['email' => $email, 'name' => $name];
    }

    public function addReplyTo($email, $name = '') {
        $this->replyTo = $email;
        $this->replyToName = $name;
    }

    public function isHTML($isHTML = true) {
        $this->isHTML = $isHTML;
    }

    public function setSubject($subject) {
        $this->subject = $subject;
    }

    public function setBody($body) {
        $this->body = $body;
    }

    public function setSMTP($host, $port, $secure, $username, $password) {
        $this->smtpHost = $host;
        $this->smtpPort = $port;
        $this->smtpSecure = $secure;
        $this->smtpUsername = $username;
        $this->smtpPassword = $password;
    }

    public function send() {
        try {
            if (empty($this->to)) {
                throw new Exception('No recipient specified');
            }

            $socket = $this->smtpConnect();
            if (!$socket) {
                return false;
            }

            $this->smtpCommand($socket, "EHLO " . $this->smtpHost);

            if ($this->smtpSecure === 'tls') {
                $this->smtpCommand($socket, "STARTTLS");
                stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
                $this->smtpCommand($socket, "EHLO " . $this->smtpHost);
            }

            $this->smtpCommand($socket, "AUTH LOGIN");
            $this->smtpCommand($socket, base64_encode($this->smtpUsername));
            $this->smtpCommand($socket, base64_encode($this->smtpPassword));

            $this->smtpCommand($socket, "MAIL FROM: <{$this->from}>");

            foreach ($this->to as $recipient) {
                $this->smtpCommand($socket, "RCPT TO: <{$recipient['email']}>");
            }

            $this->smtpCommand($socket, "DATA");

            $headers = $this->buildHeaders();
            $message = $headers . "\r\n" . $this->body . "\r\n.";

            fwrite($socket, $message . "\r\n");
            $this->getResponse($socket);

            $this->smtpCommand($socket, "QUIT");
            fclose($socket);

            return true;

        } catch (Exception $e) {
            $this->errors[] = $e->getMessage();
            error_log("PHPMailer Error: " . $e->getMessage());
            return false;
        }
    }

    private function smtpConnect() {
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ]);

        $socket = stream_socket_client(
            $this->smtpHost . ':' . $this->smtpPort,
            $errno,
            $errstr,
            30,
            STREAM_CLIENT_CONNECT,
            $context
        );

        if (!$socket) {
            $this->errors[] = "Failed to connect to SMTP server: $errstr ($errno)";
            return false;
        }

        $this->getResponse($socket);
        return $socket;
    }

    private function smtpCommand($socket, $command) {
        fwrite($socket, $command . "\r\n");
        return $this->getResponse($socket);
    }

    private function getResponse($socket) {
        $response = '';
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') {
                break;
            }
        }
        return $response;
    }

    private function buildHeaders() {
        $headers = [];

        $fromHeader = $this->fromName ?
            "From: {$this->fromName} <{$this->from}>" :
            "From: {$this->from}";
        $headers[] = $fromHeader;

        if ($this->replyTo) {
            $replyToHeader = $this->replyToName ?
                "Reply-To: {$this->replyToName} <{$this->replyTo}>" :
                "Reply-To: {$this->replyTo}";
            $headers[] = $replyToHeader;
        }

        foreach ($this->to as $recipient) {
            $toHeader = $recipient['name'] ?
                "To: {$recipient['name']} <{$recipient['email']}>" :
                "To: {$recipient['email']}";
            $headers[] = $toHeader;
        }

        $headers[] = "Subject: {$this->subject}";
        $headers[] = "MIME-Version: 1.0";

        if ($this->isHTML) {
            $headers[] = "Content-Type: text/html; charset=UTF-8";
        } else {
            $headers[] = "Content-Type: text/plain; charset=UTF-8";
        }

        $headers[] = "X-Mailer: PHP/" . phpversion();
        $headers[] = "Date: " . date('r');

        return implode("\r\n", $headers);
    }

    public function getErrors() {
        return $this->errors;
    }
}
