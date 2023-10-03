const nodemailer = require('nodemailer');
const ejs = require("ejs");
const path = require("path");

const sendEmailtoUser= async (email, subject, text) => {
  try {
  const requiredPath = path.join(__dirname, "../utils/emailverifyTemplate.ejs");
  const data = await ejs.renderFile(requiredPath, {
    text:text
  });

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          // user: "f3d23acddb00b0",
          // pass: "aeaea698ce060a"
          user: "f3d23acddb00b0",
          pass: "aeaea698ce060a"
        }
    });


    await transporter.sendMail({
      from: 'noreply@gmail.com',
      to: email,
      subject: subject,
      html:data
    });
  } catch (error) {
   res.json({error:err})
  }
};

module.exports = sendEmailtoUser;
