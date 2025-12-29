import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email configuration
    const recipientEmail = 'Info@codestrix.com'
    const subject = `Contact Form Submission from ${name}${company ? ` - ${company}` : ''}`
    
    // Email body (HTML format)
    const emailBodyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f9fafb; padding: 25px; border-radius: 0 0 10px 10px;">
            <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #6366f1; margin-top: 0; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Contact Information</h2>
              <p style="margin: 10px 0;"><strong style="color: #6366f1;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #6366f1;">Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #6366f1;">Company:</strong> ${company || 'Not provided'}</p>
            </div>
            <div style="background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #6366f1; margin-top: 0; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Message</h2>
              <div style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px; margin-top: 10px; line-height: 1.8;">
${message}
              </div>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This email was sent from the Codestrix website contact form.<br>
                <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">Reply to ${email}</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version
    const emailBodyText = `
NEW CONTACT FORM SUBMISSION
===========================

Contact Information:
--------------------
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
--------
${message}

---
This email was sent from the Codestrix website contact form.
Reply to: ${email}
    `.trim()

    // Check if Gmail credentials are configured
    // Remove quotes if present and trim whitespace
    const gmailUser = process.env.GMAIL_USER?.replace(/^["']|["']$/g, '').trim()
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/^["']|["']$/g, '').trim()

    if (!gmailUser || !gmailAppPassword) {
      console.log('')
      console.log('='.repeat(60))
      console.log('⚠️  GMAIL CREDENTIALS NOT CONFIGURED')
      console.log('='.repeat(60))
      console.log('📧 Email Details (would be sent):')
      console.log('   To:', recipientEmail)
      console.log('   Subject:', subject)
      console.log('   From:', email)
      console.log('   Name:', name)
      console.log('   Company:', company || 'Not provided')
      console.log('   Message:', message.substring(0, 100) + (message.length > 100 ? '...' : ''))
      console.log('')
      console.log('🔧 To enable Gmail email sending:')
      console.log('   1. Enable 2-Step Verification on your Gmail account')
      console.log('   2. Generate an App Password:')
      console.log('      - Go to: https://myaccount.google.com/apppasswords')
      console.log('      - Select "Mail" and "Other (Custom name)"')
      console.log('      - Name it "Codestrix Website"')
      console.log('      - Copy the 16-character password')
      console.log('   3. Add to .env.local file:')
      console.log('      GMAIL_USER=your-email@gmail.com')
      console.log('      GMAIL_APP_PASSWORD=your-16-char-app-password')
      console.log('   4. Restart the development server')
      console.log('='.repeat(60))
      console.log('')

      return NextResponse.json(
        { 
          success: false,
          error: 'Email service not configured. Please set up Gmail credentials in .env.local file.',
          message: 'Your message was received but email service is not configured. Please contact us directly at Info@codestrix.com',
        },
        { status: 503 }
      )
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    // Send email using Gmail
    try {
      const mailOptions = {
        from: `"Codestrix Website" <${gmailUser}>`,
        to: recipientEmail,
        subject: subject,
        html: emailBodyHtml,
        text: emailBodyText,
        replyTo: email,
      }

      const info = await transporter.sendMail(mailOptions)

      console.log('✅ Email sent successfully via Gmail!')
      console.log('Message ID:', info.messageId)
      console.log('To:', recipientEmail)
      console.log('From:', gmailUser)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully! We will get back to you soon.',
          messageId: info.messageId
        },
        { status: 200 }
      )
    } catch (gmailError: any) {
      console.error('❌ Error sending email via Gmail:', gmailError)
      
      // Provide helpful error messages
      let errorMessage = 'Failed to send email. Please try again later.'
      if (gmailError.code === 'EAUTH') {
        errorMessage = 'Gmail authentication failed. Please check your Gmail credentials in .env.local'
      } else if (gmailError.code === 'ECONNECTION') {
        errorMessage = 'Could not connect to Gmail. Please check your internet connection.'
      }

      return NextResponse.json(
        { 
          error: errorMessage,
          details: process.env.NODE_ENV === 'development' ? gmailError.message : undefined
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('❌ Unexpected error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later or contact us directly at Info@codestrix.com',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

