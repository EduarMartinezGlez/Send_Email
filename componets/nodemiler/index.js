'use strict'
const res = require('express/lib/response')
const nodemailer = require('nodemailer')
const {config}= require('../../config')
const AdminEmail = config.AdminEmail
const emailpass = config.EmailPass

async function sendMail(user) {
    const output= 
`<p>You have a new contact</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${user.name}</li>
    <li>Company: ${user.company}</li>
    <li>Email: ${user.email}</li>
    <li>Phone: ${user.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${user.massage}</p>

`
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: AdminEmail, // generated ethereal user
        pass: emailpass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    const mailOptions = await transporter.sendMail({
      from: `"Hola" <${AdminEmail}>`, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });
  transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
          return console(error)
      }
      console.log("Message sent: %s", info.messageId);
      //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.render('contact',{msg:'Email has been sent'})
  })
}


  module.exports = {sendMail}
  