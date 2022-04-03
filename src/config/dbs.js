const mongoose=require("mongoose");

require("dotenv").config();
const connect=()=>{
    console.log("Happy Happy");
    return mongoose.connect(process.env.MONGODB_URL)

}
module.exports=connect;