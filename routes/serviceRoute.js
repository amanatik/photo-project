const router = require('express').Router();
const Service = require('../models/modelService')

router.get('/',async (req, res) => {
  service = await Service.mostRecent();
  return res.render('service/serviceVerZer', { service });
});




module.exports = router;
