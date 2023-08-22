import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
const mailTransport = async(sender,data)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
    
    await transporter.sendMail({
        from: sender, // sender address
        to: process.env.EMAIL, // list of receivers
        text: data, // plain text body // html body
      });
}


export {mailTransport};