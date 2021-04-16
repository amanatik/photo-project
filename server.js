const express = require('express')
const mognoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const submitRouter = require('./routes/submit')
const server = express()
const createError = require('http-errors');



const serviceRouter = require('./routes/serviceRoute');
const servicePackageRouter = require('./routes/servicePackageRoute')

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'));
server.use(logger('dev'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
server.use(express.urlencoded({extended: true}))




server.use('/', servicePackageRouter)






// server.use('/service', serviceRouter);
// server.use('/servicePackage' , servicePackageRouter)

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
server.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

server.listen(3000, ()=> {
  console.log('Server run on port 3000...')
  mognoose.connect('mongodb://localhost:27017/photo-project', {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true},() => {
    console.log('Database run successfully')
  })
})
