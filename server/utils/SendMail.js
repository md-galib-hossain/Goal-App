import {createTransport} from "nodemailer";

export const SendMail = async (email,subject,text)=>{
    const transport = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            password:process.env.SMTP_PASSWORD
        }
    })

    await transport.SendMail({
        from:process.env.SMTP_USER,
        to:"mdgalibhosssain31@gmail.com",
        subject,
        text
    })
}