const router = require('express').Router();
const ServicePackage = require('../models/modelServicePackage')
const Service = require('../models/modelService')

router.get('/',async (req, res) => {
  servicePackage = await ServicePackage.mostRecent();
  let service = await Service.mostRecent();
  let a = servicePackage[0]
  let b = servicePackage[1]
  let c = servicePackage[2]
  // const [a,b,c] = servicePackage
  return res.render('service/servicePackageVerZero', { service, servicePackage , a,b,c});
});




module.exports = router;
