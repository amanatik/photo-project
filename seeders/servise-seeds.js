const { connect, connection } = require("mongoose");
const Service = require('../models/modelService');
require('dotenv').config();

async function main(){
  await connect(process.env.DB_ATLAS_PATH,{
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
    {
      title: 'Системный фотоаппарат Sony Alpha7 III',
      description: "Тип камеры: беззеркальная со сменной оптикой",
      price: 2500
    },
    {
      title: "Видеокамера Blackmagic URSA",
      description: "Цифровая кинокамера с эргономикой и функционалом профессиональной веща...",
      price: 2500
    },
    {
      title: "Услуги фотографа",
      description: "Цена за час",
      price: 2500
    },
  ]
  await Service.insertMany(service)
  await connection.close()
}

main()
