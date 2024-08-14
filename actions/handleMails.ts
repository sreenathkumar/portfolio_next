'use server'

import nodemailer from "nodemailer";

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
        // Sending the email
        const res = await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO, // The email you want to receive the feedback
            subject: `Message from ${name} through portfolio`,
            text: message,
            html: `<html><h2>Message from <strong>${name}</strong></h2><p>${message}</p></html>`,
        });

        if (res.accepted.length > 0) {
            return {
                status: 'success',
                message: 'Email sent successfully',
            }
        }

    } catch (error) {
        return {
            status: 'error',
            message: 'Failed to send email',
        }
    }
}
