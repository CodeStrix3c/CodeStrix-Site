# Email Setup Instructions

## Quick Setup (5 minutes)

The contact form is ready to send emails! You just need to configure the email service.

### Step 1: Get Resend API Key (Free)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Go to API Keys section in dashboard
4. Create a new API key
5. Copy the API key (starts with `re_`)

### Step 2: Configure Environment Variable

1. Create a file named `.env.local` in the project root (same folder as `package.json`)
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Replace `re_your_actual_api_key_here` with your actual API key from Resend

### Step 3: Restart Server

Stop the current server (Ctrl+C) and restart:
```bash
npm run dev
```

### Step 4: Test

1. Go to `http://localhost:8080/contact`
2. Fill out the contact form
3. Submit the form
4. Check your email at `Info@codestrix.com` - you should receive the email!

## Email Configuration

- **Recipient Email**: `Info@codestrix.com`
- **Service**: Resend (free tier available)
- **Format**: HTML email with formatted content

## Troubleshooting

### Email not sending?

1. **Check API Key**: Make sure `.env.local` file exists and has the correct API key
2. **Check Server Logs**: Look for error messages in the terminal
3. **Verify API Key**: Make sure the key starts with `re_` and is valid
4. **Restart Server**: Environment variables are loaded when server starts

### Testing without API Key

Without the API key, the form will:
- ✅ Accept submissions
- ✅ Show success message
- ✅ Log email details to console
- ❌ Not send actual emails

Check your server terminal to see logged email details.

## Production Setup

For production, you'll need to:
1. Verify your domain with Resend
2. Update the `from` email address in `app/api/contact/route.ts`
3. Set the `RESEND_API_KEY` in your hosting environment variables

## Alternative Email Services

If you prefer a different service, you can modify `app/api/contact/route.ts` to use:
- SendGrid
- AWS SES
- Nodemailer with SMTP
- Mailgun

The current implementation uses Resend for simplicity and reliability.

