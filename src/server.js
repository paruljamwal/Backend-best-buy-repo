const connect=require("../src/config/db");
const app=require("./index");
const port=process.env.PORT;
app.listen(port,async()=>{
 try{
  console.log(`Listining the ${port}`);
  return await connect();
  

 }
 catch(err){
     console.log(err);
 }


});