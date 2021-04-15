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
      title: 'Фотогарфия с медведем',
      description: 'Наувлекательнейшее предложение!Только сегодня фотография с белым медведем и гризли',
      price: 500
    },
    {
      title: 'Фотогарфия на свежем воздухе с лучшим фоторафом',
      description: 'Погрузитесь в удивительный мир вместе с вашим лучшим другом!',
      price: 1200
    },
    {
      title: 'Звукозапись перфоратора для ваших соседей',
      description: 'ЗАПИШЕМ , ВКЛЮЧИМ',
      price: 2000
    },
  ]
  await Service.insertMany(service)
  await connection.close()
}

main()
