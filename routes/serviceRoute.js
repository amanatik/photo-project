const router = require('express').Router();
const Service = require('../models/modelService')

router.get('/',async (req, res) => {
  let service = await Service.mostRecent();
  // console.log(service)
  return res.render('service/serviceVerZer', { service });
});




module.exports = router;
