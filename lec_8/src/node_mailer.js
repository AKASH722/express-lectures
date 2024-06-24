// nodemailer.createTestAccount((err, account) => {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false,
//     auth: {
//       user: account.user,
//       pass: account.pass,
//     },
//   });
// });

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "sender@gmail.com",
    pass: "passkey",
  },
});
const mailOptions = {
  from: "sender@gmail.com",
  to: "reciver@gmail.com",
  subject: "Hello from node",
  text: "Test Mail",
  html: `<h1> Test </h1>`,
};

transport.sendMail(mailOptions, (err, info) => {
  if (err) console.error(err);
  else console.log(info);
});
