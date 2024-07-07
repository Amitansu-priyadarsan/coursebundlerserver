import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport(
    {
       host: "sandbox.smtp.mailtrap.io",
       port: 2525,
       auth: {
        user: "118965614eea1f",
        pass: "********2b24"
        }
      }
 );

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};