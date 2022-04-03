
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


userschema.pre("save",function(next){

const hash = bcrypt.hashSync(this.password, 2);

this.password=hash;
    return next();
});


userschema.methods.checkpassword=function(password){
    
return bcrypt.compareSync(password,this.password);
}

const userModel=mongoose.model("user",userschema);

module.exports=userModel;