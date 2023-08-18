// const express = require('express')
// const app = express()
const port = 5000

const bodyParser = require('body-parser');
const routes = require("./app/routes/routes");

// const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb')
// mongoose.connect("mongodb://localhost/my_db", {useNewUrlParser: true,useUnifiedTopology:true});


// mongoose.connection.on('connected', err => {
//   console.log("error");
// });

// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// routes(app);

// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
//   next();
// })



// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.connect(
"mongodb+srv://admin:admin@webd.osoavpj.mongodb.net/?retryWrites=true&w=majority",
{
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
(err) =>
	err ? console.log(err) : console.log(
	"Connected to my_db database")
);
const express = require("express");
const app = express();
const cors = require("cors");

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


