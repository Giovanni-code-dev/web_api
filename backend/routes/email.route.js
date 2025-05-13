import express from 'express';
import { sendEmail } from '../utils/sendEmail.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    await sendEmail({
        to: process.env.SENDGRID_API_TO,      
        from: process.env.SENDGRID_API_FROM,
        subject: 'Test SendGrid da backend',
        text: 'Questo è un test!',
        html: '<strong>ciao!</strong>',
      });

    res.status(200).json({ message: 'Email inviata!' });
  } catch (error) {
    res.status(500).json({ message: 'Errore invio email', error });
  }
});

export default router;
