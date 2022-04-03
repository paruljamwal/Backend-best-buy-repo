const userModel = require("../model/usermodel")
const jwt = require('jsonwebtoken');
require('dotenv').config()
//token fun

const generatetoken=(user)=>{

console.log(process.env.SECRET_KEY)
return jwt.sign({user}, process.env.SECRET_KEY);
}

const register=async(req,res)=>{
try{


let user=await userModel.findOne({email:req.body.email});



if(user){
   return res.status(404).send({message:"Email already exists"})
}


  user=await userModel.create(req.body);
  
  const token=generatetoken(user); 
  return res.status(202).send({user,token});
// }   
}
catch(err){
res.status(404).send({message : err.message})
}
}










const login=async(req,res)=>{
    console.log("comeIn")
    try{
       
        //check email have or not
        const user=await userModel.findOne({email:req.body.email})
       console.log(user)
        if(!user){
            return res.status(404).send({message:"Wrong email or password"})
         }

         
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