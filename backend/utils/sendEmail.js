
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ to, from, subject, text, html }) => {
  const msg = { to, from: from, subject, text, html };
  return await sgMail.send(msg);
};
