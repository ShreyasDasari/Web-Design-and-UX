const Sample = require('../models/sample')
const bcrypt = require('bcrypt');

let createNewPassword = async (password) => {
    let newPassword = await bcrypt.hash(password,10);
    return newPassword; 
}

module.exports = (app) => {

    app.get('/user/getAll', async function(req, res) {
        Sample.find(function(err, samples) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            console.log('samples', samples);
            res.status(200).send(samples);
        });
    });

    app.post('/user/create', async function(req, res) {
        let {userEmail,userPassword} = req.body
        let hashPassword = await createNewPassword(userPassword);
        let rec = new Sample({userEmail: userEmail, userPassword: hashPassword});
        let regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
        //let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$");
        let strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.*[0-9])(?=.{8,})/;
        if((!(rec.userEmail.trim().match(regexEmail))) || (!(userPassword.trim().match(strongRegex)))){
            res.send({
                message : "Email and Password are not valid"
            })
        }else{
           rec.save()
           .then(item => {
           res.status(200).send({message : "User saved to database"});
           })
           .catch(err => {
           res.status(400).send({message : "unable to save to database"});
           });
        }
    });

    app.put('/user/edit', async function(req,res){
        const {userEmail, userPassword, newEmail, newPassword} = req.body;
        let regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
        let strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.*[0-9])(?=.{8,})/;
        if((!(newEmail.match(regexEmail))) || (!(newPassword.match(strongRegex)))){
                res.send({
                    message : "new Email or New Password are not valid"
                })
            }else{
                let hashPassword = await createNewPassword(newPassword);
                     Sample.findOne({
                        userEmail : userEmail,
                    },async function(err,n){
                        if(err){
                            res.status(400).send({message : "User not found"})
                        }else{
                            const isMatch = await bcrypt.compare(userPassword,n.userPassword);
                            if (isMatch){
                                console.log("hitesssss")
                                Sample.findOneAndUpdate({
                                    userEmail : userEmail,
                                },{
                                    userEmail : newEmail,
                                    userPassword : hashPassword
                                })
                                .then(item => {
                                    res.status(200).send({message : "User Updated"});
                                    })
                                    .catch(err => {
                                    res.status(400).send({message : "User updation failed"});
                                    });
                            }
                        }
                    })  
             }
    })

    app.delete('/user/delete', async function(req,res){
        const {userEmail,userPassword} = req.body;
        let regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
        let strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.*[0-9])(?=.{8,})/;
        if((!(userEmail.trim().match(regexEmail))) || (!(userPassword.trim().match(strongRegex)))){
            res.send({
                message : "Email and password are not valid"
            })
        }else{
            Sample.findOne({
                userEmail : userEmail,
            },async function(err,n){
                if(err){
                    //console.log(n);
                    console.log("User not found!")
                    res.status(400).send({message : "User not found"})
                }else{
                    console.log("User found")
                    const isMatch = await bcrypt.compare(userPassword,n.userPassword);
                    if (isMatch){
                        Sample.findOneAndDelete({
                            userEmail : userEmail,
                        },function(err){
                            if(err){
                                console.log("Deletion failed")
                            }else{
                                res.status(200)
                                res.send({
                                    message : "User has been deleted"
                                })
                            }
                        }) 
                    }
                }
            })
        }
    })

    
}



