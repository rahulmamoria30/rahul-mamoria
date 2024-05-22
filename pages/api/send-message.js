// send-message.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, phone, location, message } = req.body;
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
               
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });


        let mailOptions = {
            from: email,
            to: 'rahulmamoria@gmail.com',
            subject: 'Message form your portfolio website',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nMessage: ${message}`
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }
};
