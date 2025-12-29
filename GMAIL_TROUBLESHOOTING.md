# Gmail Authentication Troubleshooting

## Common Issues and Solutions

### Issue: "Gmail authentication failed"

**Most Common Causes:**

1. **Using Regular Password Instead of App Password**
   - ❌ Wrong: Using your Gmail account password
   - ✅ Correct: Using a 16-character Gmail App Password
   
   **Solution:** Generate a new App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Make sure 2-Step Verification is enabled first
   - Generate a new App Password for "Mail"
   - Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

2. **Quotes in .env.local File**
   - ❌ Wrong: `GMAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx"`
   - ✅ Correct: `GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx`
   
   **Solution:** Remove quotes from .env.local file

3. **Spaces in App Password**
   - You can include or remove spaces - both work
   - Example: `xxxx xxxx xxxx xxxx` or `xxxxxxxxxxxxxxxx`

4. **2-Step Verification Not Enabled**
   - App Passwords only work if 2-Step Verification is enabled
   - Enable it at: https://myaccount.google.com/security

## Step-by-Step Fix

### Step 1: Verify 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Ensure "2-Step Verification" is **ON**

### Step 2: Generate New App Password
1. Go to: https://myaccount.google.com/apppasswords
2. If you don't see this page, 2-Step Verification is not enabled
3. Select:
   - **App**: Mail
   - **Device**: Other (Custom name)
   - **Name**: Codestrix Website
4. Click **Generate**
5. **Copy the 16-character password** (shown as: `abcd efgh ijkl mnop`)

### Step 3: Update .env.local
Update your `.env.local` file:

```env
GMAIL_USER=codestrixsolution@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**Important:**
- No quotes around values
- Use the exact 16-character App Password
- Can include or remove spaces (both work)

### Step 4: Restart Server
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Step 5: Test Again
Submit the contact form and check for success message.

## Verify Your Setup

Check your `.env.local` file should look like:
```env
GMAIL_USER=codestrixsolution@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

**NOT like this:**
```env
GMAIL_USER="codestrixsolution@gmail.com"  ❌ (quotes)
GMAIL_APP_PASSWORD="Thinkpad@#1"  ❌ (regular password, not App Password)
```

## Still Having Issues?

1. **Double-check App Password format:**
   - Should be 16 characters
   - Usually shown as: `xxxx xxxx xxxx xxxx`
   - Generated from Google App Passwords page

2. **Verify email address:**
   - Must be exact Gmail address
   - No typos

3. **Check server logs:**
   - Look for detailed error messages in terminal
   - Error codes help identify the issue

4. **Try generating a new App Password:**
   - Sometimes old passwords expire
   - Generate a fresh one

## Quick Test

After updating `.env.local` and restarting:
1. Go to contact page
2. Fill form with test data
3. Submit
4. Check terminal for: `✅ Email sent successfully via Gmail!`
5. Check `Info@codestrix.com` inbox

