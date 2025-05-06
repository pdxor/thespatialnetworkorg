const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  try {
    const { name, email, organization, message } = JSON.parse(event.body);

    // Set the API key (already configured in Netlify environment variables)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Prepare email message
    const msg = {
      to: 'info@thespatialnetwork.org', // Your inbox
      from: 'info@thespatialnetwork.org', // Must be verified in SendGrid!
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Organization:</strong> ${organization}<br/><strong>Message:</strong> ${message}</p>`,
    };

    // Send email
    await sgMail.send(msg);
    
    return { 
      statusCode: 200, 
      body: JSON.stringify({ success: true }) 
    };
  } catch (err) {
    console.error("SendGrid Error:", err);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: err.message }) 
    };
  }
}; 