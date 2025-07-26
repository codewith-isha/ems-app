require('dotenv').config()
const express = require('express');
const connectDB = require('./models/connection');
const app = express()
connectDB()

const PORT = process.env.PORT || 4000;



app.listen(PORT ,()=>{
  console.log(`Server is running http://localhost:${PORT}`)
})