# Contact Form Email Setup Guide

The contact form is now set up to send data to your email: **ismailbaoud04@gmail.com**

Currently, the form submissions are logged to the console. To actually send emails, you need to integrate an email service.

## 🚀 Quick Setup Options

### Option 1: Using Resend (Recommended - Free & Easy)

1. **Sign up at** [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Install Resend:**
   ```bash
   npm install resend
   ```

4. **Create `.env.local` file** in your project root:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

5. **Update `/app/api/contact/route.ts`:**
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export async function POST(request: Request) {
     const { name, email, message } = await request.json();
     
     try {
       await resend.emails.send({
         from: 'Portfolio Contact <onboarding@resend.dev>',
         to: 'ismailbaoud04@gmail.com',
         replyTo: email,
         subject: `Portfolio Contact from ${name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>From:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
         `
       });
       
       return NextResponse.json({ success: true });
     } catch (error) {
       return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
     }
   }
   ```

---

### Option 2: Using EmailJS (No Backend Required)

1. **Sign up at** [emailjs.com](https://www.emailjs.com/)
2. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

3. **Update ContactSection.tsx:**
   ```typescript
   import emailjs from '@emailjs/browser';
   
   const handleSubmit = async (e: FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           from_name: formData.name,
           from_email: formData.email,
           message: formData.message,
           to_email: 'ismailbaoud04@gmail.com'
         },
         'YOUR_PUBLIC_KEY'
       );
       
       setShowSuccess(true);
       setFormData({ name: '', email: '', message: '' });
     } catch (error) {
       setShowError(true);
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

---

### Option 3: Using Nodemailer with Gmail

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Enable "App Passwords" in your Gmail account:**
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate an app password

3. **Create `.env.local`:**
   ```
   EMAIL_USER=ismailbaoud04@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   ```

4. **Update `/app/api/contact/route.ts`:**
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD
     }
   });
   
   export async function POST(request: Request) {
     const { name, email, message } = await request.json();
     
     await transporter.sendMail({
       from: process.env.EMAIL_USER,
       to: 'ismailbaoud04@gmail.com',
       replyTo: email,
       subject: `Portfolio Contact from ${name}`,
       html: `
         <h2>New Contact Form Submission</h2>
         <p><strong>From:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>
       `
     });
     
     return NextResponse.json({ success: true });
   }
   ```

---

## 🔒 Security Notes

1. **Never commit `.env.local`** - Add it to `.gitignore`
2. **Use environment variables** for all API keys and passwords
3. **Validate input** on the backend (already implemented)
4. **Add rate limiting** to prevent spam (optional)

---

## ✅ Current Status

- ✅ Contact form UI is complete
- ✅ Form validation is working
- ✅ API route is created (`/api/contact`)
- ✅ Success/Error modals are implemented
- ✅ Loading state is added
- ⏳ **Email service integration pending** (choose one option above)

---

## 🧪 Testing

1. Fill out the contact form
2. Check browser console for logged data
3. Once email service is set up, test by sending yourself a message

---

## 📝 Recommended: Use Resend

**Why Resend?**
- ✅ Free tier (100 emails/day)
- ✅ No credit card required
- ✅ Easy setup (5 minutes)
- ✅ Reliable delivery
- ✅ Built for Next.js

Choose the option that works best for you and follow the setup instructions!
