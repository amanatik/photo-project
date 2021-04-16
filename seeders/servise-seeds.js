const { connect, connection } = require("mongoose");
const Service = require('../models/modelService');


async function main(){
  await connect('mongodb://localhost:27017/photo-project',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });


  const service = [
    {
      title: 'Услуги видеографа',
      description: 'Цена за час',
      price: 5000
    },
    {
      title: 'Услуги звуковика',
      description: 'Цена за час',
      price: 3500
    },
    {
      title: 'Ноутбук для презентации',
      description: 'Укажите колличество',
      price: 1000
    },
    {
      title: 'Световое оборудование',
      description: 'Световой пульт DMX Estrada Pro PRO',
      price: 2500
    },
  ]
  await Service.insertMany(service)
  await connection.close()
}

main()
