const {Schema , model} = require('mongoose')


const sevicePackageSchema = new Schema({
  title: String,
  description: Array,
  price: Number,
})

sevicePackageSchema.statics.mostRecent = async function () {
  return this.find().exec()
}

const ServicePackage = model('servicePackage' , sevicePackageSchema)
module.exports = ServicePackage
