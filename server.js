const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const countries = require("./routes/countries")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/countries', countries)


mongoose.connect('mongodb://localhost:27017/visasite', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
  })
});