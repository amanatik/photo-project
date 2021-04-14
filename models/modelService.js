const {Shema , model} = require('mongoose')


const seviceSchema = new Shema({
  service: String,
  description: String,
  price: Number
})

const serviceModel = model('service' , seviceSchema)
module.exports = serviceModel
