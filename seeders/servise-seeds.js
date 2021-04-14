const { connect, connection } = require("mongoose");
const Service = require('../models/modelService');


async function main(){
  await connect('mongoose://localhost:27017/photo-project',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });


  const service = [
    {
      service: 'Фотогарфия с медведем',
      description: 'Наувлекательнейшее предложение!Только сегодня фотография с белым медведем и гризли костратом',
      price: 500
    },
    {
      service: 'Фотогарфия на свежем воздухе с лучшим фоторафом Геем',
      description: 'Погрузитесь в удивительный мир вместе с вашим лучшим другом геем!',
      price: 1200
    },
    {
      service: 'Звукозапись',
      description: 'Наувлекательнейшее предложение!Только сегодня фотография с белым медведем и гризли костратом',
      price: 500
    },
    {
      service: 'Фотогарфия с медведем',
      description: 'Наувлекательнейшее предложение!Только сегодня фотография с белым медведем и гризли костратом',
      price: 500
    },
    {
      service: 'Фотогарфия с медведем',
      description: 'Наувлекательнейшее предложение!Только сегодня фотография с белым медведем и гризли костратом',
      price: 500
    },
  ]
}

