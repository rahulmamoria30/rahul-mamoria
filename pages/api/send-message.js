import nodemailer from 'nodemailer';

export default async (req, res) => {
    console.log(process.env.EMAIL_USER)
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body; 
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        console.log( process.env.EMAIL_USER);
        
        let mailOptions = {
            from: email,
            to: 'rahulmamoria@gmail.com',
            subject: 'Message from your portfolio website',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
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
