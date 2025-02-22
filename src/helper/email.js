const nodemailer=require("nodemailer");

async function sendEmail(to,subject,body){
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD, 
        },
      });
    
      transporter.sendMail({
        from: "jala9952@gmail.com", 
        to, 
        subject,
        html: body
      })
      .catch((err)=>{
          console.log(err.message);
      })
}

module.exports=sendEmail