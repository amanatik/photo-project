const router = require('express').Router();
const ServicePackage = require('../models/modelServicePackage')

router.get('/',async (req, res) => {
  servicePackage = await ServicePackage.mostRecent();
  let a = servicePackage[0]
  let b = servicePackage[1]
  let c = servicePackage[2]
  const [a,b,c] = servicePackage
  return res.render('service/servicePackageVerZero', { servicePackage , a,b,c});
});




module.exports = router;
