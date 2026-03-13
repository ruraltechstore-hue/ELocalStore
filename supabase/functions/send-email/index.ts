import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface EmailRequest {
  type: 'contact' | 'franchise';
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  franchiseType?: string;
  address?: string;
  pincode?: string;
  experience?: string;
  locationPreference?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: EmailRequest = await req.json();

    let emailSubject = "";
    let emailBody = "";
    const toEmail = "helpdesk@elocalstore.com";

    if (data.type === 'contact') {
      emailSubject = `Contact Form: ${data.subject || 'General Inquiry'}`;
      emailBody = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject || 'N/A'}

Message:
${data.message}

---
Submitted from: elocalstore.com
Timestamp: ${new Date().toISOString()}
      `.trim();
    } else if (data.type === 'franchise') {
      emailSubject = `New Franchise Application - ${data.franchiseType || 'Unknown'}`;
      emailBody = `
New Franchise Application Received

PERSONAL DETAILS:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address || 'N/A'}
Pincode: ${data.pincode || 'N/A'}

FRANCHISE DETAILS:
Type: ${data.franchiseType || 'N/A'}
Experience: ${data.experience || 'N/A'}
Preferred Location: ${data.locationPreference || 'N/A'}

---
Application ID: ELS${Date.now().toString().slice(-6)}
Submitted from: elocalstore.com
Timestamp: ${new Date().toISOString()}
      `.trim();
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'eLocal Store <noreply@elocalstore.com>',
          to: [toEmail],
          reply_to: data.email,
          subject: emailSubject,
          text: emailBody,
        }),
      });

      if (!resendResponse.ok) {
        throw new Error('Failed to send email via Resend');
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to send email',
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});