const express = require('express')
const mognoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const server = express()



server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(logger('dev'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
server.use(express.urlencoded({extended: true}))





server.listen(3000, ()=> {
  console.log('Server run on port 3000...')
  mognoose.connect('mongodb://localhost:27017/photo-project', {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true},() => {
    console.log('Database run successfully')
  })
})
