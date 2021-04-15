const {Router} = require('express')
const router = Router()
const servicePackageModel = require('../models/modelServicePackage')

router.get('/submit', (req, res) => {
  res.render('modal-window')
})

router.post('/test-submit', async (req, res) => {
  const idForPocket = req.body.id
  const findPocket = await servicePackageModel.findOne({_id: idForPocket})
  console.log(findPocket)
  res.json(findPocket).status(200)
})

router.post('/send-mailer', async (req, res) => {
  const {company, phone, name, message} = req.body
  console.log(req.body)
})

module.exports = router
