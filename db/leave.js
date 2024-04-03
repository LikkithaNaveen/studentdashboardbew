const mongoose=require('mongoose')


const LeaveSchema=new mongoose.Schema({
    name:String,
    days:String,
    fromdate:Date,
    todate:Date,
    reason:String

});

module.exports =mongoose.model("Leaves",LeaveSchema)