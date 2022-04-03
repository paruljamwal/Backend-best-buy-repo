//businee work inside it
const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const userschema=mongoose.Schema({
    userName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    cpassword:{type:String,require:true},
    mobilephone:{type:String,require:true},
},
{
    timestamps:true,
    versionKey:false
});

// password encrypt
// middle ware before saving it this creating & updating we modifying it what we want;
// use reay mate hook;
//this call back fun run
// its not work with aerro func bcz this is not work with  => func.. geting undefined 

userschema.pre("save",function(next){
// let hashpassword=this.password+"anythingaddtoencrypt";
// this.password=hashpassword;
//use bcrpyt to hash pass ...... require and 
const hash = bcrypt.hashSync(this.password, 2);
// Store hash in your password DB.
this.password=hash;
    return next();
});

//match pass-------------------with------------------------hash pass------->
userschema.methods.checkpassword=function(password){
    // Load hash from your password DB.
    //compare pass with hash pass.
return bcrypt.compareSync(password,this.password); // true
}

const userModel=mongoose.model("user",userschema);

module.exports=userModel;