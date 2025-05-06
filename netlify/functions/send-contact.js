const sgMail = require('@sendgrid/mail');
const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    // Log to help with debugging (these will appear in Netlify Functions logs)
    console.log("Function called with event body:", event.body);
    
    const { name, email, organization, message } = JSON.parse(event.body);

    // Prepare common email content
    const emailSubject = `Contact Form Submission from ${name}`;
    const textContent = `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nMessage: ${message}`;
    const htmlContent = `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Organization:</strong> ${organization}<br/><strong>Message:</strong> ${message}</p>`;

    try {
      // PRIMARY METHOD: Try SendGrid first
      if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SendGrid API key is missing");
      }
      
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: 'info@thespatialnetwork.org',
        from: 'info@thespatialnetwork.org', // Must be verified in SendGrid
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
        replyTo: email,
      };

      console.log("Attempting to send via SendGrid...");
      await sgMail.send(msg);
      console.log("Email sent successfully via SendGrid");
      
    } catch (sendGridError) {
      // FALLBACK METHOD: If SendGrid fails, try Netlify's email service
      console.error("SendGrid failed:", sendGridError.message);
      console.log("Falling back to Netlify Email service...");
      
      if (!process.env.NETLIFY_EMAILS_PROVIDER_API_KEY) {
        throw new Error("Both SendGrid and Netlify Email failed. Netlify Email API key is missing.");
      }
      
      const response = await fetch('https://api.netlify.com/api/v1/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NETLIFY_EMAILS_PROVIDER_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'info@thespatialnetwork.org',
          to: 'info@thespatialnetwork.org',
          subject: emailSubject,
          text: textContent,
          html: htmlContent,
        }),
      });
      
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Netlify Email service failed: ${error}`);
      }
      
      console.log("Email sent successfully via Netlify Email");
    }
    
    return { 
      statusCode: 200, 
      body: JSON.stringify({ success: true }) 
    };
  } catch (err) {
    console.error("All email methods failed:", err);
    
    // Provide detailed error information
    const errorDetails = err.response ? {
      statusCode: err.response?.statusCode,
      body: err.response?.body,
      headers: err.response?.headers
    } : { message: err.message };
    
    console.error("Error details:", JSON.stringify(errorDetails, null, 2));
    
    return { 
      statusCode: 500, 
      body: JSON.stringify({ 
        error: err.message,
        details: errorDetails
      }) 
    };
  }
}; 