const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const response = await fetch('https://api.netlify.com/api/v1/emails/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NETLIFY_EMAILS_PROVIDER_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'info@thespatialnetwork.org', // Replace with your verified sender
        to: email, // Replace with your destination
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Message:</strong> ${message}</p>`,
      }),
    });

    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } else {
      const error = await response.text();
      return { statusCode: 500, body: JSON.stringify({ error }) };
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}; 