

const express=require("express");
const router=express.Router();
const Dealofday=require("../model/dealofday.model");
const authenticate=require("../middleware/authencate");



router.post("",authenticate,async(req,res)=>{
   //console.log(req);
   req.body.user_id=req.userID
try{
 const product=await Dealofday.create(req.body);
 return res.status(202).send(product);
}
catch(err){
    return res.send("err")
}
});

router.get("", async (req, res) => {
    try{
        const product = await Dealofday.find().lean().exec();
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});

router.patch("/:id",authenticate,async(req,res)=>{
   try{
       const update= await Dealofday.findByIdAndUpdate(req.params.id,req.body,{new:true});
      return res.status(202).send({Update:update})
   }
   catch(err){
      return res.status(404).send(err);
   }
})



router.delete("/:id",authenticate,async(req,res)=>{
    try{
        const update= await Dealofday.findByIdAndDelete(req.params.id);
       return res.status(202).send({Update:update})
    }
    catch(err){
       return res.status(404).send(err);
    }
 })
 

module.exports=router;
