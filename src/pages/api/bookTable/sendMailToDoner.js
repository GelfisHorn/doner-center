import nodemailer from 'nodemailer';
// mail template
import template from '@/app/hooks/emailTemplates/bookTable/toDoner';

export default async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ msg: `${req.method} method not allowed` });
    }

    const { name, email, date, hour, persons } = req.body || {};

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.MAILING_EMAIL,
            subject: `Es gibt eine neue Tischreservierung`,
            text: `${name} hat für ${date} um ${hour} Uhr einen Tisch reserviert.`,
            html: template({ name, email, date, hour, persons })
        });

        return res.status(200).json({ msg: "ok" });
    } catch (error) {
        const resError = new Error(error?.response?.data?.msg || error)
        return res.status(400).json({ msg: resError.message });
    }
}