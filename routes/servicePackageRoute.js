const router = require('express').Router();
const ServicePackage = require('../models/modelServicePackage')

router.get('/',async (req, res) => {
  servicePackage = await ServicePackage.mostRecent();
  return res.render('service/servicePackageVerZero', { servicePackage });
});




module.exports = router;
