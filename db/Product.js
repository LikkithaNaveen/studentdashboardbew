const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phonenumber:Number,
    gender:String,
    spec:String,
    address:String,
    category:String,
    city:String,
    state:String,
    pincode:Number,
    desc:String

});

module.exports =mongoose.model("Personaldetails",productSchema)