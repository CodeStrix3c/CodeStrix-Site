# Gmail Email Setup Guide

## Quick Setup (5 minutes)

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/security
2. Enable **2-Step Verification** (required for App Passwords)

### Step 2: Generate Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select:
   - **App**: Mail
   - **Device**: Other (Custom name)
   - **Name**: Codestrix Website
3. Click **Generate**
4. **Copy the 16-character password** (you'll see it only once!)

### Step 3: Configure Environment Variables

Create or update `.env.local` file in your project root:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Important:**
- Use your full Gmail address for `GMAIL_USER`
- Use the 16-character App Password (you can include or remove spaces)
- Never commit `.env.local` to git (it's already in .gitignore)

### Step 4: Restart Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 5: Test

1. Go to `http://localhost:8080/contact`
2. Fill out the contact form
3. Submit
4. Check `Info@codestrix.com` inbox - you should receive the email!

## Email Configuration

- **From Email**: Your Gmail address (GMAIL_USER)
- **To Email**: `Info@codestrix.com`
- **Format**: HTML email with formatted content
- **Reply-To**: Set to the form submitter's email

## Troubleshooting

### "EAUTH" Error
- Check that 2-Step Verification is enabled
- Verify the App Password is correct (16 characters)
- Make sure you're using App Password, not your regular Gmail password

### "ECONNECTION" Error
- Check your internet connection
- Verify Gmail SMTP is accessible
- Check firewall settings

### Email Not Received
- Check spam/junk folder
- Verify `Info@codestrix.com` email address is correct
- Check server console for error messages
- Verify Gmail credentials in `.env.local`

## Security Notes

- ✅ App Passwords are safer than regular passwords
- ✅ App Passwords can be revoked anytime
- ✅ Never share your App Password
- ✅ Keep `.env.local` file secure and never commit it

## Example .env.local

```env
GMAIL_USER=codestrixsolution@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

Replace with your actual Gmail and App Password!

