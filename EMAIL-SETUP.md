# Email Configuration Setup

## ✅ Contact Form → joegarcia@equitysmartloans.com

I've configured the contact form to send emails directly to **joegarcia@equitysmartloans.com** using FormSpree.

---

## 🚀 Quick Setup (2 minutes)

### Step 1: Create Free FormSpree Account

1. Go to **[formspree.io/register](https://formspree.io/register)**
2. Sign up with **joegarcia@equitysmartloans.com**
3. Verify your email (check inbox)

### Step 2: Create Your Form

1. Click **"+ New Form"**
2. Name it: `Joe Garcia Contact Form`
3. **Copy the Form ID** (looks like: `xanyzdep`)

### Step 3: Update the Code

In `js/main.js`, find line **~421** (the fetch URL) and replace with your Form ID:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with the ID from Step 2.

### Step 4: Test It!

1. Open your website
2. Fill out the contact form
3. Submit
4. Check **joegarcia@equitysmartloans.com** inbox
5. You'll receive an email with all form details!

---

## 📧 What Gets Sent

When someone submits the form, you'll receive an email with:

```
From: FormSpree <noreply@formspree.io>
Reply-To: [Visitor's email]
To: joegarcia@equitysmartloans.com

Subject: New submission from Joe Garcia Contact Form

Name: John Doe
Email: john@example.com
Phone: (555) 123-4567
Interest: Buying a Home
Message: I'm interested in learning more about homes in Pico Rivera...
```

---

## ✨ Features Included

### ✅ Bilingual Success Messages
- **English**: "Thank you for your message! I will get back to you soon."
- **Spanish**: "¡Gracias por su mensaje! Me pondré en contacto con usted pronto."

### ✅ Bilingual Error Messages
- **English**: "Sorry, there was an error..."
- **Spanish**: "Lo siento, hubo un error..."

### ✅ Spam Protection
- FormSpree includes built-in spam filtering
- reCAPTCHA v3 (invisible - no user action needed)

### ✅ Email Notifications
- Instant delivery to your inbox
- Reply-To header set to visitor's email
- All form fields included

---

## 🔧 Alternative: Direct Email Configuration

If you prefer **NOT to use FormSpree**, you can set up your own backend:

### Option A: PHP Mail (if you have hosting)

Create `send-email.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "joegarcia@equitysmartloans.com";
    $subject = "New Contact Form Submission";
    
    $data = json_decode(file_get_contents('php://input'), true);
    
    $message = "Name: " . $data['name'] . "\n";
    $message .= "Email: " . $data['email'] . "\n";
    $message .= "Phone: " . $data['phone'] . "\n";
    $message .= "Interest: " . $data['interest'] . "\n";
    $message .= "Message: " . $data['message'] . "\n";
    
    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: " . $data['email'] . "\r\n";
    
    mail($to, $subject, $message, $headers);
    
    echo json_encode(['success' => true]);
}
?>
```

Update `js/main.js`:
```javascript
const response = await fetch('send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option B: EmailJS (Alternative Service)

1. Sign up at **[emailjs.com](https://www.emailjs.com/)**
2. Connect your Gmail/Outlook account
3. Create email template
4. Get Service ID, Template ID, Public Key
5. Add SDK and configure

---

## 📊 FormSpree Free Plan Includes

- ✅ **50 submissions/month** (plenty for most real estate sites)
- ✅ **Unlimited forms**
- ✅ **Email notifications**
- ✅ **Spam filtering**
- ✅ **File uploads** (if you add later)
- ✅ **Dashboard to view submissions**

**Need more?** Upgrade to Paid Plan:
- $10/month: 1,000 submissions
- $40/month: 10,000 submissions

---

## 🧪 Testing Checklist

After setup, test these scenarios:

- [ ] Fill out form in **English** → Check email received
- [ ] Fill out form in **Spanish** → Check email received
- [ ] Test **mobile submission**
- [ ] Verify **Reply-To** works (reply to visitor's email)
- [ ] Check **spam folder** if not in inbox
- [ ] Test with **invalid email** (should show error)
- [ ] Test with **empty fields** (should show validation)

---

## 🔒 Security & Privacy

### Current Implementation:
- ✅ Client-side validation (prevents bad data)
- ✅ HTTPS required (FormSpree enforces)
- ✅ No sensitive data stored on your server
- ✅ Privacy notice displayed on form

### Privacy Notice (Already Included):
> 🔒 Your information is secure and will never be shared

**Bilingual**:
- English: "Your information is secure and will never be shared"
- Spanish: "Su información es segura y nunca será compartida"

---

## 📞 Troubleshooting

### Issue: Not receiving emails

**Solution 1**: Check spam/junk folder  
**Solution 2**: Add `noreply@formspree.io` to contacts  
**Solution 3**: Verify email in FormSpree dashboard  

### Issue: Form shows error message

**Solution 1**: Check browser console for errors  
**Solution 2**: Verify FormSpree Form ID is correct  
**Solution 3**: Check internet connection  

### Issue: Submissions not showing in FormSpree dashboard

**Solution 1**: Refresh the dashboard  
**Solution 2**: Check "Submissions" tab  
**Solution 3**: Verify form is not in test mode  

---

## 🎯 Next Steps After Setup

### 1. Add Auto-Reply Email (Optional)

In FormSpree dashboard:
- Settings → Auto-response
- Enable auto-reply
- Customize message:

**English**:
```
Thank you for contacting Joe Garcia Real Estate!

I've received your message and will get back to you within 24 hours.

Best regards,
Joe Garcia
Real Estate Agent & Loan Officer
NMLS# 1550915 | DRE# 01263425
```

**Spanish**:
```
¡Gracias por contactar a Joe Garcia Real Estate!

He recibido su mensaje y me pondré en contacto con usted dentro de 24 horas.

Saludos cordiales,
Joe Garcia
Agente de Bienes Raíces y Oficial de Préstamos
NMLS# 1550915 | DRE# 01263425
```

### 2. Set Up Email Forwarding (Optional)

Forward submissions to multiple emails:
- joegarcia@equitysmartloans.com
- admin@yourcompany.com
- assistant@yourcompany.com

### 3. Enable File Uploads (Optional)

Allow visitors to upload documents:
- Pre-approval letters
- Property photos
- Documents for loan processing

Configure in FormSpree dashboard → Form Settings → File Uploads

---

## 📧 Current Configuration

**Form sends to**: joegarcia@equitysmartloans.com  
**Service**: FormSpree  
**Endpoint**: `https://formspree.io/f/xanyzdep` (UPDATE THIS)  
**Method**: POST  
**Format**: JSON  

**Form Fields Sent**:
- `name` - Full Name
- `email` - Email Address
- `phone` - Phone Number
- `interest` - Interest Selection
- `message` - Message Content

---

## ✅ You're All Set!

Once you complete the 2-minute FormSpree setup:

1. ✅ Visitors fill out contact form
2. ✅ Form validates input (prevents errors)
3. ✅ Submission sent to FormSpree
4. ✅ Email delivered to joegarcia@equitysmartloans.com
5. ✅ Success message shown (English or Spanish)
6. ✅ You reply directly from your email

**No server setup required. No coding needed. Just works!** 🎉

---

**Questions?** Check `js/main.js` lines 415-450 for the form submission code.

**Email**: joegarcia@equitysmartloans.com  
**Website**: [Your deployed URL after going live]

🏡 ✨