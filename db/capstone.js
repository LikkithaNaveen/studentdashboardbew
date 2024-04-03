const mongoose=require('mongoose')


const CapstoneSchema=new mongoose.Schema({
    name:String,
    capstonetitle:String,
    language:String,
    status:String,
    desc:String

});

module.exports =mongoose.model("Capstonedetails",CapstoneSchema)