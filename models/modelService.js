const {Schema , model} = require('mongoose')


const seviceSchema = new Schema({
  title: String,
  description: String,
  price: Number,
})

seviceSchema.statics.mostRecent = async function () {
  return this.find().exec()
}

const serviceModel = model('service' , seviceSchema)
module.exports = serviceModel
