const { connect, connection } = require("mongoose");
const ServicePackage = require('../models/modelServicePackage');


async function main(){
  await connect('mongodb://localhost:27017/photo-project',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });


  const servicePackage = [
    {
      title: 'Фотосъёмка',
      description: ['Камера: 1 шт', 'Фотография: 2шт', 'Штатив: 1шт'],
      price: 15000
    },
    {
      title: 'Видеосъёмка',
      description: ['Камера: 1 шт', 'Фотография: 2шт', 'Штатив: 1шт'],
      price: 20000
    },
    {
      title: 'Звук',
      description: ['Камера: 1 шт', 'Фотография: 2шт', 'Штатив: 1шт'],
      price: 10000
    },
    
  ]
  await ServicePackage.insertMany(servicePackage)
  await connection.close()
}

main()
