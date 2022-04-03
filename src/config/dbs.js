const mongoose=require("mongoose");

require("dotenv").config();
const connect=()=>{
    console.log("Listening port 5000");
    return mongoose.connect(process.env.MONGODB_URL)

}
module.exports=connect;