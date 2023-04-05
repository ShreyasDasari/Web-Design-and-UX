// app/routes.js
const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var Sample = require('./models/sample');
const JWT_SECRET = "hdufhjnscniooure7788920390940950]{}|{089**(";
const cors = require("cors");
const app = express();
//const app = require("../server");
//app.use(express.json);
//app.use(cors());
let users = [];
   module.exports = function(app) {
    // api to show all data
       app.get('/user/getAll', function(req, res) {
           Sample.find(function(err, samples) {
               if (err)
                   res.send(err);
               console.log('samples', samples);
               res.json(samples);
           });
       });
       app.use(cors());
 // Insertion
       app.post('/user/create',[
        check("username", "Please Enter a Valid Username")
          .not()
          .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
          min: 6
        })
      ],
      async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            errors: errors.array()
          });
        }
    
        const { username, email, password } = req.body;
        try {
          let user = await Sample.findOne({
            email
          });
          if (user) {
            return res.status(400).json({
              msg: "User Already Exists"
            });
          }
    
          user = new Sample({
            username,
            email,
            password
          });
    
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
    
          await user.save();
    
          const payload = {
            user: {
              id: user.id
            }
          };
    
          jwt.sign(
            payload,
            "randomString",
            {
              expiresIn: 10000
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token
              });
            }
          );
        } catch (err) {
          console.log(err.message);
          res.status(500).send("Error in Saving");
        }
       });



    app.delete('/user/delete/:email', (req, res) => {
        const mail = req.params.email;

    Sample.findOneAndDelete({"email": mail})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with email ${mail}. Maybe email is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with email=" + mail
            });
        });
      });
      
      // EDIT and UPDATE
    // app.put('/user/edit/:username', (req, res) => {
    //     if(!req.body){
    //         return res
    //             .status(400)
    //             .send({ message : "Data to update can not be empty"})
    //     }
    
    //     const fullname = req.params.username;
    //     var newvalues = { $set: { username, password} };
    //     Sample.findOneAndUpdate(fullname, newvalues)
    //         .then(data => {
    //             if(!data){
    //                 res.status(404).send({ message : `Cannot Update user with ${fullname}. Maybe user not found!`})
    //             }else{

    //                 res.send(data)
    //             }
    //         })
    //         .catch(err =>{
    //             res.status(500).send({ message : "Error Update user information"})
    //         })
    //     res.send("User updated");
    //   });

      app.put('/user/edit/:username', (req, res) => {
    const fullname = req.params.username;
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: "Username and password are required fields" })
    }

    const newvalues = { $set: { username, password } };
    Sample.findOneAndUpdate({ username: fullname }, newvalues)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${fullname}. Maybe user not found!` })
            } else {
                res.send("User Updated")
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
});


      app.put('/user/edit/:password', (req, res) => {
        if(!req.body){
            return res
                .status(400)
                .send({ message : "Data to update can not be empty"})
        }
    
        const fullname = req.params.username;
        const pwd = req.params.password;
        var newvalues = { $set: { username, password} };
            Sample.findOneAndUpdate(fullname, newvalues)
            .then(data => {
                if(!data){
                    res.status(404).send({ message : `Cannot Update user.. Maybe user not found!`})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message : "Error Update user information"})
            })

        res.send("User updated");
      });

      app.post('/user/login' , async(req,res) => {
        const {email, password} = req.body;
        const user = await Sample.findOne({email});
        console.log(user);
        console.log("PWD",user.password);

        if(!user){
            return res.json({error:"User not found"});
        }
        if(password === user.password){
          const token = jwt.sign({},JWT_SECRET);
            if(res.status(200)){
                return res.json({status:"OKAY"});
            }
            else{
                return res.json({error:"error"});
            }
        }
        res.json({status:"Error",error:"INVALID PASSWORD"});
    })
    module.exports = app;
      
   };

