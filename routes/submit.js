const {Router} = require('express')
const router = Router()


router.get('/submit', (req, res) => {
  res.render('modal-window')
})


module.exports = router
