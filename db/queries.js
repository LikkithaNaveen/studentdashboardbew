const mongoose=require('mongoose')


const QueriesSchema=new mongoose.Schema({
    name:String,
    topiccategory:String,
    language:String,
    title:String,
    querydesc:String,
    timings:String

});

module.exports =mongoose.model("Queries",QueriesSchema)