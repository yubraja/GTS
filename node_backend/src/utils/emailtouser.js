const nodemailer = require('nodemailer');
const ejs = require("ejs");
const path = require("path");

const sendEmailtoUser = async (email, subject, text) => {
  try {
    const requiredPath = path.join(__dirname, "../utils/emailverifyTemplate.ejs");
    const data = await ejs.renderFile(requiredPath, {
      text: text
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

    const subject = 'Vehicle Alert';
    const body_english = 'There is a garbage vehicle around your location . Please, separate the degradable and Non-degradable waste  before throwing it. '
    const body_nepali = 'तपाईंको स्थान वरपर फोहोर फाल्ने गाडी छ। कृपया, यसलाई फाल्न अघि कुहिने र नकुहिने फोहोर अलग गर्नुहोस्।';


    await transporter.sendMail({
      from: 'noreply@gmail.com',
      to: email,
      subject: subject,
      html: data
    });
  } catch (error) {
    res.json({ error: err })
  }
};

module.exports = sendEmailtoUser;
