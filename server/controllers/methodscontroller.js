const nodemailer = require('nodemailer')

async function sendMail(info) {
  var output =  `<h2>congratulation</h2>
   
   <div>congratulation  your account is created click to links for validate
   <a>${process.env.CLIENT_URL + 'account/validate/?token=' + info.token}</a>
   </div>
   `;
  
  //   const sendTo = info.email 
  const sendTo = "hamoda.abdo@outlook.fr";
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'Wasit support <noreplay@wasit.com>',
      to: sendTo,
      subject: "verified ✔",
      text: "verified account ",
      html: output,
    });
  } catch (error) {
    console.log(error);
  }
}



// console.log(randomPassword(5));


module.exports = { sendMail }