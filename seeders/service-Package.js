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
      title: 'Пакет фотобандуры',
      price: 1500
    },
    {
      title: 'Пакет видеобандуры',
      price: 1200
    },
    {
      title: 'Пакет звукозаписи',
      price: 3000
    },
    {
      title: 'Пакет трасляции',
      price: 4000
    },
    {
      title: 'Пакет дронов',
      price: 5000
    },
  ]
  await ServicePackage.insertMany(servicePackage)
  await connection.close()
}

main()
