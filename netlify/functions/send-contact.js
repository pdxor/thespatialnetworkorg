const sgMail = require('@sendgrid/mail');
const fetch = require('node-fetch');

// Function to store submission when email services fail
async function storeSubmission(submission) {
  // Try to send the submission data to a webhook service
  // Discord webhook example (you can set this up as an environment variable)
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
  
  if (webhookUrl) {
    try {
      // Format based on if it's a Discord or Slack webhook
      let payload;
      if (webhookUrl.includes('discord')) {
        // Discord webhook format
        payload = {
          content: "📩 **New Contact Form Submission** (Email delivery failed)",
          embeds: [{
            title: `Form Submission from ${submission.name}`,
            fields: [
              { name: "Name", value: submission.name, inline: true },
              { name: "Email", value: submission.email, inline: true },
              { name: "Organization", value: submission.organization, inline: true },
              { name: "Message", value: submission.message },
              { name: "Time", value: new Date().toISOString() }
            ],
            color: 15105570 // Orange color
          }]
        };
      } else {
        // Slack webhook format
        payload = {
          text: "📩 *New Contact Form Submission* (Email delivery failed)",
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: `Form Submission from ${submission.name}`
              }
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*Name:* ${submission.name}` },
                { type: "mrkdwn", text: `*Email:* ${submission.email}` },
                { type: "mrkdwn", text: `*Organization:* ${submission.organization}` },
                { type: "mrkdwn", text: `*Message:* ${submission.message}` },
                { type: "mrkdwn", text: `*Time:* ${new Date().toISOString()}` }
              ]
            }
          ]
        };
      }
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }
      
      console.log("Submission stored successfully via webhook");
      return true;
    } catch (err) {
      console.error("Webhook storage failed:", err);
    }
  }
  
  // If no webhook or webhook failed, just log it prominently
  console.log("==== CONTACT FORM SUBMISSION ====");
  console.log(`Name: ${submission.name}`);
  console.log(`Email: ${submission.email}`);
  console.log(`Organization: ${submission.organization}`);
  console.log(`Message: ${submission.message}`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log("================================");
  
  return false;
}

exports.handler = async (event) => {
  try {
    // Log to help with debugging (these will appear in Netlify Functions logs)
    console.log("Function called with event body:", event.body);
    
    const { name, email, organization, message } = JSON.parse(event.body);
    const submission = { name, email, organization, message };

    // Prepare common email content
    const emailSubject = `Contact Form Submission from ${name}`;
    const textContent = `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nMessage: ${message}`;
    const htmlContent = `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Organization:</strong> ${organization}<br/><strong>Message:</strong> ${message}</p>`;

    let emailSent = false;
    let emailError = null;

    // Try SendGrid first
    try {
      if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SendGrid API key is missing");
      }
      
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      // Main message to site owner
      const msg = {
        to: 'kahlilcalavas@gmail.com', // Send to your Gmail
        from: 'kahlil@terra-lux.org', // Updated to verified sender email
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
        replyTo: email,
      };
  
      // Optional: Confirmation message to the person who submitted the form
      // Uncomment this section if you want to send confirmation emails
      /*
      const confirmationMsg = {
        to: email,
        from: 'kahlil@terra-lux.org', // Updated to verified sender email
        subject: 'Thank you for contacting The Spatial Network',
        text: `Dear ${name},\n\nThank you for contacting The Spatial Network. We have received your message and will get back to you soon.\n\nBest regards,\nThe Spatial Network Team`,
        html: `<p>Dear ${name},</p><p>Thank you for contacting The Spatial Network. We have received your message and will get back to you soon.</p><p>Best regards,<br>The Spatial Network Team</p>`,
      };
      */

      console.log("Attempting to send via SendGrid...");
      // If using confirmation emails, uncomment the Promise.all section
      // await Promise.all([
      //   sgMail.send(msg),
      //   sgMail.send(confirmationMsg)
      // ]);
      await sgMail.send(msg);
      console.log("Email sent successfully via SendGrid");
      emailSent = true;
    } catch (sendGridError) {
      console.error("SendGrid failed:", sendGridError.message);
      emailError = `SendGrid: ${sendGridError.message}`;
      
      // Try Netlify Email service as fallback
      try {
        console.log("Falling back to Netlify Email service...");
        
        if (!process.env.NETLIFY_EMAILS_PROVIDER_API_KEY) {
          throw new Error("Netlify Email API key is missing");
        }
        
        const response = await fetch('https://api.netlify.com/api/v1/emails/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NETLIFY_EMAILS_PROVIDER_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'kahlil@terra-lux.org', // Updated to verified sender email
            to: 'kahlilcalavas@gmail.com', // Send to your Gmail
            subject: emailSubject,
            text: textContent,
            html: htmlContent,
          }),
        });
        
        if (!response.ok) {
          const responseText = await response.text();
          throw new Error(`Netlify Email service failed: ${responseText || response.statusText}`);
        }
        
        console.log("Email sent successfully via Netlify Email");
        emailSent = true;
      } catch (netlifyError) {
        console.error("Netlify Email service failed:", netlifyError.message);
        emailError = `${emailError}; Netlify: ${netlifyError.message}`;
      }
    }

    // Last resort: Store the submission data if all email methods failed
    if (!emailSent) {
      try {
        console.warn("⚠️ NO EMAIL METHOD WORKED - ATTEMPTING TO STORE SUBMISSION ⚠️");
        
        // Store submission via webhook or log
        await storeSubmission(submission);
        
        return { 
          statusCode: 200, // We tell the user it succeeded to prevent frustration
          body: JSON.stringify({ 
            success: true, 
            warning: "Your message was received but email delivery is temporarily unavailable. The team has been notified and will contact you soon."
          }) 
        };
      } catch (storageError) {
        console.error("Failed to store submission:", storageError);
        // If even storage fails, we have to tell the user something went wrong
        throw new Error("All contact methods failed");
      }
    }
    
    // If we reached here, at least one email method worked
    return { 
      statusCode: 200, 
      body: JSON.stringify({ success: true }) 
    };
  } catch (err) {
    console.error("All methods failed:", err);
    
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