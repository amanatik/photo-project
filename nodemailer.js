const nodemailer = require('nodemailer')
require('dotenv').config();

const transporter = nodemailer.createTransport( {
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const mailer = messageForMail => {
  transporter.sendMail(messageForMail, (err, info) => {
    if (err){
      console.log(err)
      return
    }
    console.log('Sent: ' + info.response)
  })
}

module.exports = mailer
