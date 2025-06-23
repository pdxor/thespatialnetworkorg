# Redirect Homepage to thespatialnetwork.net

## Tasks

### 1. Create Netlify Redirect Configuration
- [ ] Create `netlify.toml` file in root directory
- [ ] Configure redirect from root path to thespatialnetwork.net
- [ ] Set appropriate status code (301 for permanent redirect)

### 2. Alternative HTML Meta Redirect (Fallback)
- [ ] Add meta refresh tag to index.html as backup
- [ ] Ensure it works even if Netlify config fails

### 3. Update Documentation
- [ ] Document the redirect in README.md
- [ ] Note the target domain and redirect method

### 4. Test Redirect
- [ ] Verify redirect works in development
- [ ] Test deployment to ensure redirect functions properly

## Implementation Notes
- Using Netlify's built-in redirect functionality for optimal performance
- 301 redirect for permanent redirect (better for SEO)
- Fallback meta refresh for redundancy

## Task: Set Up Contact Form Email with Netlify Function and SendGrid

### Setup Instructions

1. Create `/netlify/functions/send-contact.js` with dual email method (SendGrid primary, Netlify Email fallback)
   ```js
   // See code in netlify/functions/send-contact.js
   ```

2. Install required dependencies:
   ```bash
   npm install @sendgrid/mail node-fetch@2 --save
   ```

3. Configure Environment Variables in Netlify Dashboard:
   - `SENDGRID_API_KEY` - Your SendGrid API key
   - `DISCORD_WEBHOOK_URL` or `SLACK_WEBHOOK_URL` (optional) - For fallback message storage

4. Verify Email Sender in SendGrid:
   - Make sure `info@thespatialnetwork.org` is verified in SendGrid Sender Authentication
   - If using a different email, update both frontend and backend code

5. Update the Contact.tsx component with proper error handling and UX feedback

6. Deployment Checklist:
   - ✅ Verify all environment variables are set in Netlify
   - ✅ Test form on development environment first
   - ✅ Deploy to production and test full flow
   - ✅ Check Netlify Function logs if issues occu r

### Troubleshooting

If contact form submissions fail:
1. Check Netlify Function logs for detailed error messages
2. Verify SendGrid API key is correct and not expired
3. Ensure sender email is verified in SendGrid
4. Check if webhook URLs (if using) are valid and accessible

### Fallback Chain

The contact form implements a resilient submission process:
1. First tries SendGrid email delivery
2. Falls back to Netlify's built-in email service if SendGrid fails
3. If both email methods fail, stores submission in logs and sends to webhook (if configured)
4. Always provides appropriate user feedback, never losing a submission

### Form Features

- User-friendly loading and success states
- Clear error messages when things go wrong
- Warning messages when emails can't be sent but submission is recorded
- Proper form field validation
- Mobile-responsive design