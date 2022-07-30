const express = require('express')
const App = express()
const connect = require("./Config/connectDB")
const bookRoute = require('./Routes/bookRoutes')
require("dotenv").config;
//middleware global
App.use(express.json())

const Port = process.env.PORT||2000;
App.listen(Port , (e)=> {
  if(e){
    console.log('Error on server')
  } 
  else {
    console.log(`Server is running on port ${Port}`)
  }
})
connect()
App.use('/book', bookRoute)