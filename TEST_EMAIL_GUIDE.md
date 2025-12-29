# 📧 Email Testing Guide

## Quick Test (Without API Key - Console Logging)

### Step 1: Make sure server is running
```bash
npm run dev
```
Server should be running on `http://localhost:8080`

### Step 2: Open Contact Page
Go to: `http://localhost:8080/contact`

### Step 3: Fill out the form with test data

**Test Input 1 (Basic):**
- **Name:** John Doe
- **Email:** john.doe@example.com
- **Company:** (leave empty or enter "Test Company")
- **Message:** This is a test message to verify the contact form is working correctly.

**Test Input 2 (With Company):**
- **Name:** Jane Smith
- **Email:** jane.smith@test.com
- **Company:** Tech Solutions Inc
- **Message:** I'm interested in your web development services. Please contact me to discuss a potential project.

**Test Input 3 (Long Message):**
- **Name:** Michael Johnson
- **Email:** michael.j@example.com
- **Company:** StartupXYZ
- **Message:** 
  ```
  Hello Codestrix Team,
  
  I'm reaching out to inquire about your mobile app development services. 
  We're looking to build a cross-platform application for our business.
  
  Could you please provide:
  1. Timeline estimates
  2. Pricing information
  3. Portfolio examples
  
  Looking forward to hearing from you!
  
  Best regards,
  Michael
  ```

### Step 4: Submit the form
Click the "Send Message" button

### Step 5: Check the results

**What you'll see:**
- ✅ Success toast message: "Message sent! We'll get back to you soon."
- ✅ Form fields will be cleared

**What to check in Terminal/Console:**
Look for output like this:
```
============================================================
⚠️  EMAIL FUNCTIONALITY NOT CONFIGURED
============================================================
📧 Email Details:
   To: Info@codestrix.com
   Subject: Contact Form Submission from John Doe
   From: john.doe@example.com
   Name: John Doe
   Company: Not provided
   Message: This is a test message...
```

---

## Full Test (With API Key - Actual Email Sending)

### Prerequisites
1. Resend API key (get from https://resend.com)
2. `.env.local` file with `RESEND_API_KEY=re_your_key_here`

### Step 1: Set up API Key

1. Create `.env.local` file in project root:
   ```bash
   # In project root directory
   echo RESEND_API_KEY=re_your_actual_key_here > .env.local
   ```

2. Replace `re_your_actual_key_here` with your actual Resend API key

3. Restart the server:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Step 2: Test with real email

Use your own email address so you can verify receipt:

**Test Input:**
- **Name:** Your Name
- **Email:** your.email@example.com (use an email you can check)
- **Company:** Your Company
- **Message:** Test email from Codestrix contact form

### Step 3: Submit and verify

**What happens:**
1. Form submits successfully
2. Success message appears
3. Email is sent to `Info@codestrix.com`
4. Check terminal for: `✅ Email sent successfully via Resend!`

**To verify email was sent:**
- Check the email inbox for `Info@codestrix.com`
- You should receive a formatted HTML email with all the form details

---

## Test Scenarios

### ✅ Valid Inputs (Should Work)
- All fields filled correctly
- Valid email format
- Message with text

### ❌ Invalid Inputs (Should Show Errors)
- Empty name field
- Empty email field
- Invalid email format (e.g., "notanemail")
- Empty message field

---

## Troubleshooting

### Form not submitting?
- Check browser console for errors (F12)
- Verify all required fields are filled
- Check network tab to see if API call is made

### No email received?
- Check if API key is set correctly in `.env.local`
- Verify server was restarted after adding API key
- Check terminal for error messages
- Verify Resend API key is valid and active

### API errors?
- Check terminal output for specific error messages
- Verify Resend account is active
- Check if you've exceeded free tier limits (3,000/month)

---

## Expected Console Output

### Without API Key:
```
⚠️  EMAIL FUNCTIONALITY NOT CONFIGURED
📧 Email Details:
   To: Info@codestrix.com
   Subject: Contact Form Submission from [Name]
   ...
```

### With API Key (Success):
```
✅ Email sent successfully via Resend!
Email ID: [some-id]
To: Info@codestrix.com
```

### With API Key (Error):
```
❌ Resend API Error: [error details]
```

---

## Quick Test Checklist

- [ ] Server is running on port 8080
- [ ] Navigate to `/contact` page
- [ ] Fill out form with test data
- [ ] Submit form
- [ ] See success message
- [ ] Check terminal for email logs
- [ ] (If API key set) Check email inbox

