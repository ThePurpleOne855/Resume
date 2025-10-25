# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails directly through Gmail without leaving your website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Gmail Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" from the list
4. Connect your Gmail account (jasas1357@gmail.com)
5. Note down your **Service ID** (starts with "service_")

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}} ({{from_email}})
Reply-To: {{from_email}}

Message:
{{message}}

---
Sent from your resume website contact form.
```

4. Save the template and note down your **Template ID** (starts with "template_")

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (starts with letters/numbers)

## Step 5: Update Your Code

Replace these values in `/src/components/Contact.js`:

```javascript
const serviceId = 'service_your_actual_service_id';
const templateId = 'template_your_actual_template_id';
const publicKey = 'your_actual_public_key';
```

## Step 6: Enable EmailJS

Uncomment and update the EmailJS code in the handleSubmit function:

```javascript
// Replace the simulation code with:
const result = await emailjs.send(
  serviceId,
  templateId,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'jasas1357@gmail.com'
  },
  publicKey
);
```

## Free Tier Limits

- 200 emails per month
- Perfect for personal portfolio websites
- No credit card required

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your Gmail inbox for the message
4. The sender will receive a confirmation

## Troubleshooting

- Make sure all IDs are correct
- Check that Gmail service is connected
- Verify template variables match the code
- Check browser console for errors

## Security Note

The public key is safe to use in frontend code. EmailJS handles the actual email sending securely on their servers.
