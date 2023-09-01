import nodemailer from 'nodemailer';
// mail template
import template from '@/app/hooks/emailTemplates/bookTable/toClient';

export default async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ msg: `${req.method} method not allowed` });
    }

    const { email } = req.body || {};

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
            from: `"Döner Center Mieste" ${process.env.MAILING_EMAIL}>`,
            to: email,
            subject: `Wir haben Ihre Reservierung erhalten`,
            text: `Vielen Dank für Ihre Tischreservierung im Döner Center, wir freuen uns, Sie begrüßen zu dürfen.`,
            html: template()
        });

        return res.status(200).json({ msg: "ok" });
    } catch (error) {
        const resError = new Error(error?.response?.data?.msg || error)
        return res.status(400).json({ msg: resError.message });
    }
}