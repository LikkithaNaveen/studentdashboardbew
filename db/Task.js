const mongoose=require('mongoose')


const TaskSchema=new mongoose.Schema({
    name:String,
    course:String,
    language:String,
    taskdetails:String,
    assigndate:Date,
    completedate:Date,
    desc:String

});

module.exports =mongoose.model("Tasks",TaskSchema)