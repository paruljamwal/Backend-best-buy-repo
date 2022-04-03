//businee work inside it
const mongoose=require("mongoose");

const productschema =new mongoose.Schema({
    imgUrl:{type:String,require:true},
    name:{type:String,require:true},
    price:{type:Number,require:true},
    pickup:{type:String,require:true},
    shipping:{type:String,require:true},
},
{
    timestamps:true,
    versionKey:false
});


const productModel=mongoose.model("product",productschema);

module.exports=productModel;

