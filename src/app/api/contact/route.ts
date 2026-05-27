import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "rahulmamoria@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${escapeHtml(name)}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f0f0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f0f0f; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color: #1a1a2e; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a4a;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: -0.3px;">New Message Received</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.75); font-size: 13px;">Someone reached out via your portfolio</p>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding: 32px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #16213e; border-radius: 12px; border: 1px solid #2a2a4a;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #667eea; font-weight: 600;">From</p>
                          <p style="margin: 0; font-size: 16px; color: #e2e8f0; font-weight: 500;">${escapeHtml(
                            name
                          )}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #667eea; font-weight: 600;">Email</p>
                          <a href="mailto:${escapeHtml(
                            email
                          )}" style="color: #93c5fd; font-size: 14px; text-decoration: none;">${escapeHtml(
        email
      )}</a>
                        </td>
                      </tr>
                      ${
                        phone
                          ? `<tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #667eea; font-weight: 600;">Phone</p>
                          <p style="margin: 0; font-size: 14px; color: #e2e8f0;">${escapeHtml(
                            phone
                          )}</p>
                        </td>
                      </tr>`
                          : ""
                      }
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 24px 40px 32px;">
              <p style="margin: 0 0 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #667eea; font-weight: 600;">Message</p>
              <div style="background-color: #16213e; border-radius: 12px; border: 1px solid #2a2a4a; padding: 20px 24px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #cbd5e1;">
                  ${escapeHtml(message).replace(/\n/g, "<br />")}
                </p>
              </div>
            </td>
          </tr>

          <!-- Reply Button -->
          <tr>
            <td style="padding: 0 40px 32px; text-align: center;">
              <a href="mailto:${escapeHtml(
                email
              )}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-size: 14px; font-weight: 500;">Reply to ${escapeHtml(
        name
      )}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; border-top: 1px solid #2a2a4a; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b;">Sent from your portfolio contact form &bull; rahulmamoria.vercel.app</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
