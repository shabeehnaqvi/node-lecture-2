

//const usersModels = require('../models/usersModels') 
const { USER_FAKE_DATA } = require("../models/usersModels");


exports.login = (req, res) => {
    let check = true
    USER_FAKE_DATA.map((user)=>{
        if (req.body.name == user.name && req.body.password == user.password){
            res.send(user.name);
        }else check = false
    })
    if (check == false){
    res.send("error");}
    
    
}

exports.signup = (req, res) => {

}



exports.getposts = (req, res) => {

}

exports.userposts = (req, res) => {

}