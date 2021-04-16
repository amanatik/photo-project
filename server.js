const express = require('express')
const mognoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const server = express()
const createError = require('http-errors');
const mongodb = require('mongodb')
const sessions = require('express-session')
const MongoStore = require('connect-mongo');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();
const port = process.env.PORT;
const dbPath = process.env.DB_HOST + process.env.DB_PORT + process.env.DB_NAME;
const secretKey = process.env.SECRET_KEY;
const uri = process.env.DB_ATLAS_PATH
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const submitRouter = require('./routes/submit')


server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'));
server.use(logger('dev'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
server.use(express.urlencoded({extended: true}))










server.use('/', submitRouter)


// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
server.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

server.listen(port, ()=> {
  console.log('Server run on port 3000...')
  mognoose.connect(dbPath, {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true},() => {
    console.log('Database run successfully')
  })
  // client.connect(err => {
  //   console.log('Что-то начудил')
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });
})
