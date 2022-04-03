//businee work inside it
const mongoose=require("mongoose");

const dealofdaySchema =new mongoose.Schema({
    image:{type:String,require:true},
    name:{type:String,require:true},
    review:{type:String,require:true},
    price:{type:Number,require:true},
    save:{type:String,require:true},
    act_price:{type:Number,require:true},
    deal:{type:String,require:true},
},
{
    timestamps:true,
    versionKey:false
});


const dealofdayModel=mongoose.model("dealofday",dealofdaySchema);

module.exports=dealofdayModel;

