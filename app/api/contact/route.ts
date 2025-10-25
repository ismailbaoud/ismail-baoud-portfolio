import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - AWS SES
    
    // For now, we'll log it and you can integrate an email service
    console.log('Contact Form Submission:');
    console.log('From:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Send to: ismailbaoud04@gmail.com');

    // TODO: Integrate with an email service
    // Example with nodemailer (you'll need to install it):
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: email,
      to: 'ismailbaoud04@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
