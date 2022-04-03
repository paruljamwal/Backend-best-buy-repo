require('dotenv').config();
var jwt = require('jsonwebtoken');


const verifytoken=(token)=>{
    // verify a token symmetric - synchronous
    return new Promise((resolve,reject)=>{
   jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                return reject(err)
            }
            else{
                console.log(decoded)
                return resolve(decoded)
            }
        });
    })

}
const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
return res.status(404).send("Authorization token not found or incorrect");

if(!req.headers.authorization.startsWith("Bearer "))
return res.status(404).send("Authorization token not found or incorrect");
//only want token
const token=req.headers.authorization.trim().split(" ")[1]
let decoded;
try{
     decoded=await verifytoken(token);
}
catch(err){
    console.log(err);
    return res.status(404).send("Authorization token not found or incorrect");
}
// console.log("decode below");
// console.log(decoded);
// console.log(decoded.user._id)
req.user=decoded.user
return next()
//get user_id


}

module.exports=authenticate;