require('dotenv').config()
const express = require('express');
const connectDB = require('./models/connection');
const app = express()
const engine = require("express-handlebars").engine;
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
connectDB()

app.engine('handlebars', engine({
  // defaultLayout:'mainlayout',
  extname :'handlebars',
  handlebars:allowInsecurePrototypeAccess(Handlebars),
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('home');
// });
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/emp',require('./controllers/routes'))


const PORT = process.env.PORT || 4000



app.listen(PORT ,()=>{
  console.log(`Server is running http://localhost:${PORT}`)
})