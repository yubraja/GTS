const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const sendEmailtoUser = async (email) => {
  try {
    const requiredPath = path.join(__dirname, "../utils/emailtouser.ejs");
    const data = await ejs.renderFile(requiredPath, {
      text: "NearBY", // Define the 'text' variable or pass the actual text
    });

    const transporter = nodemailer.createTransport({
      // host: "smtp.mailtrap.io",
      // port: 2525,
      // auth: {
      //   user: "f3d23acddb00b0",
      //   pass: "aeaea698ce060a",
      // },

      host: process.env.HOST,
      tls: false,
      service: process.env.SERVICE,
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },

    });

    await transporter.sendMail({
      from: "GTS@gmail.com",
      to: email,
      subject: "Alert!!! Garbage Truck is near BY",
      html: data,
    });
  } catch (error) {
    console.error(error);
    // Handle the error appropriately or remove this catch block
  }
};

module.exports = sendEmailtoUser;
