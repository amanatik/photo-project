const {Router} = require('express')
const router = Router()
// const servicePackageModel = require('../models/modelServicePackage')
const mailer = require('../nodemailer')
const ServicePackage = require('../models/modelServicePackage')
const Service = require('../models/modelService')

router.get('/',async (req, res) => {
  servicePackage = await ServicePackage.mostRecent();
  let service = await Service.mostRecent();
  let a = servicePackage[0]
  let b = servicePackage[1]
  let c = servicePackage[2]
  
  return res.render('service/servicePackageVerZero', { service, servicePackage , a,b,c});
});

router.post('/test-submit', async (req, res) => {
  const idForPocket = req.body.id
  const findPocket = await ServicePackage.findOne({_id: idForPocket})
  console.log(findPocket)
  res.json(findPocket).status(200)
})

// create-PDF router
router.post('/send-mailer', async (req, res) => {
  const {company, phone, name, message, title, price, description, email} = req.body
  console.log(req.body)

  const fonts = {
    Roboto: {
      normal: 'fonts/Roboto/Roboto-Regular.ttf',
      bold: 'fonts/Roboto/Roboto-Medium.ttf',
      italics: 'fonts/Roboto/Roboto-Italic.ttf',
      bolditalics: 'fonts/Roboto/Roboto-MediumItalic.ttf'
    }
  };
  
  const PdfPrinter = require('pdfmake');
  const fs = require('fs');
  const printer = new PdfPrinter(fonts);

  let docDefinition = {
    content: [ {
			text: 'Договор на оформление услуг по организации мероприятия\n\n',
			style: 'header'
		},
    {
      text: 
      `Название компании: ${company},
      Ваше полное имя: ${name},
      Ваш email адресс: ${email},
      Ваш номер телефона: ${phone},
      Название пакета: ${title},
      Цена пакета: ${price},
      Комментарии: ${message}`,
      style: 'quote'
    }
      
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true
      },
      small: {
        fontSize: 10
      },
      quote: {
        italics: true
      }
    }
  }

  console.log('YA V PDF MAILERE')
  // res.redirect('/submit')
  
  let pdfDoc = printer.createPdfKitDocument(docDefinition);
  let file = await pdfDoc.pipe(fs.createWriteStream(`pdf-files/document-${name}.pdf`));
  pdfDoc.end();

  // console.log(pdfDoc)
  
  // pdfDoc.getBase64((data) => {
  //   res.writeHead(200,
  //     {
  //       'Content-Type': 'application/pdf',
  //       'Content-Disposition': 'attachment;filename="filePdf.pdf"'
  //     })
  //     const download = Buffer.from(data.toString('utf-8'), 'base64')
  //     res.end(download)
  // })

  // NODE MAILER

  const messageGo = {
    from: "amanatik10@gmail.com", //otkuda mail idet
    to: "shaybekov2013@mail.ru",
    subject: "sending email with node.js",
    html: `<p>Hello guys!</p>
    <p>This is nodemailer</p>
    <p>Let's some chat</p>
    <p>END</p>`,
    attachments: [
      {
          filename: `document-${name}.pdf`, 
          content: fs.createReadStream(`pdf-files/document-${name}.pdf`),                                        
          contentType: 'application/pdf'
      }]
  }

  mailer(messageGo)

})

module.exports = router
