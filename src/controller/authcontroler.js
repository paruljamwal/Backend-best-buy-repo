const userModel = require("../model/usermodel")
const jwt = require('jsonwebtoken');
require('dotenv').config()
//token fun

const generatetoken=(user)=>{
//return user._id + "parul"
//2nd rember this , kind of salt by this we decrypt this pass
//use .env framwork by this we can acees anyhtg
console.log(process.env.SECRET_KEY)
return jwt.sign({user}, process.env.SECRET_KEY);
}

const register=async(req,res)=>{
try{
//check if email is already exsit or not

//for that we have to take user

let user=await userModel.findOne({email:req.body.email});

// check if user email exist

if(user){
   return res.status(404).send({message:"Email already exists"})
}

 //user does'nt exist so create it
// else{
  user=await userModel.create(req.body);
  //create function for token
  const token=generatetoken(user); // using extrnal libraary for this token
  return res.status(202).send({user,token});
// }   
}
catch(err){
res.status(404).send({message : err.message})
}
}




// 1st email exist

const login=async(req,res)=>{
    console.log("comeIn")
    try{
       
        //check email have or not
        const user=await userModel.findOne({email:req.body.email})
       console.log(user)
        if(!user){
            return res.status(404).send({message:"Wrong email or password"})
         }

         //if have then check password
        //   console.log(password);
          const match=user.checkpassword(req.body.password);
          console.log(match);
          //if does nt match
          if(!match){
              return res.status(404).send("Wrong email or password")
          }

          else{
              const token=generatetoken(user);
              return res.status(202).send({user,token});
          }
 
      }
      catch(err){
      res.status(404).send({message : err.message})
      }
}
module.exports={register,login,generatetoken}