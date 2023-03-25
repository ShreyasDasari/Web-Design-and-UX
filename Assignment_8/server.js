const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const routes = require("./app/routes/routes");

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb')
mongoose.connect("mongodb+srv://db:db@webd.osoavpj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology:true});


mongoose.connection.on('connected', err => {
  console.log("error");  
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
  next();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})