require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
    secure: false, // Utilise STARTTLS
    auth: null, // Pas d'authentification
    tls: {
      rejectUnauthorized: false, // Ajoutez cette ligne si vous avez des problèmes de certificat
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: 'guillaumehussong@gmail.com', // Remplacez par une adresse email de test
    subject: 'Test Email',
    text: 'This is a test email',
    replyTo: process.env.EMAIL_REPLY_TO,
  });

  console.log('Message sent: %s', info.messageId);
}

sendTestEmail().catch(console.error);