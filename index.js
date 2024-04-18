const express=require('express')
const cors=require('cors')
require('./db/config')
const User=require('./db/User')
const Product=require('./db/Product')
const Capstone=require('./db/capstone')
const Queries=require('./db/queries')
const Leave=require('./db/leave')

const jwt=require('jsonwebtoken')
const Task = require('./db/Task')

const jwtkey='e-dash'

const app=express()     
app.use(express.json())
app.use(cors({
    origin: '*'
  }));
  

  
app.post('/register',async(req,res)=>{
    let user=new User(req.body)
    let result= await user.save()
    result=result.toObject()
    delete result.password
    jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
        if(err)
        {
            res.send({result:"Something went wrong,please try after some time"})
        }
        res.send({result,auth:token})
        })
    // res.send(result)
       

})

app.post('/login',async(req,res)=>{
    if(req.body.password && req.body.email)
    {
        let user=await User.findOne(req.body).select("-password");
        if(user){
            jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
            if(err)
            {
                res.send({result:"Something went wrong,please try after some time"})
            }
            res.send({user,auth:token})
        })
            
           
    }
        else{
            res.send({result:'Not found email'})
        }
    } else{
        res.send({result:'Not found email'})
    }
})

    app.post('/personal-details',async(req,res)=>{
        let personaldetails=new Product(req.body)
     let result= await personaldetails.save()
        res.send(result)

        
    })

app.get('/personal-details',async(req,res)=>{
    let personaldetails=await Product.find()
    if(personaldetails.length>0){
        res.send(personaldetails)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})


app.delete('/personal-details/:id',async(req,res)=>{
    let result= await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get('/personal-details/:id',async(req,res)=>{
    let result= await Product.findOne({_id:req.params.id})
    if(result)
    {
        res.send(result)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})

app.put('/personal-details/:id',async(req,res)=>{
    let result= await Product.updateOne({_id:req.params.id},
    {
        $set:req.body
    }
   
    )
    res.send(result)
});

app.get('/search/:key',verifytoken,async(req,res)=>{
   let result=await Product.find({
    "$or":[
        {name:{$regex:req.params.key}}
        
    ]
   });
   res.send(result)
})
//addtask


app.post('/addTask-details',async(req,res)=>{
    let Taskdetails=new Task(req.body)
    let result= await Taskdetails.save()
    res.send(result)

})
app.get('/addTask-details',async(req,res)=>{
    let Taskdetails=await Task.find()
    if(Taskdetails.length>0){
        res.send(Taskdetails)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})


app.delete('/addTask-details/:id',async(req,res)=>{
    let result= await Task.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get('/addTask-details/:id',async(req,res)=>{
    let result= await Task.findOne({_id:req.params.id})
    if(result)
    {
        res.send(result)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})

app.put('/addTask-details/:id',async(req,res)=>{
    let result= await Task.updateOne({_id:req.params.id},
    {
        $set:req.body
    }
   
    )
    res.send(result)
});

app.get('/searchtask/:key',verifytoken,async(req,res)=>{
    let result=await Product.find({
     "$or":[
         {name:{$regex:req.params.key}}
         
     ]
    });
    res.send(result)
 })
//capstone



app.post('/capstone-details',async(req,res)=>{
    let Capstonedetails=new Capstone(req.body)
    let result= await Capstonedetails.save()
    res.send(result)

})
app.get('/capstone-details',async(req,res)=>{
    let Capstonedetails=await Capstone.find()
    if(Capstonedetails.length>0){
        res.send(Capstonedetails)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})


app.delete('/capstone-details/:id',async(req,res)=>{
    let result= await Capstone.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get('/capstone-details/:id',async(req,res)=>{
    let result= await Capstone.findOne({_id:req.params.id})
    if(result)
    {
        res.send(result)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})

app.put('/capstone-details/:id',async(req,res)=>{
    let result= await Capstone.updateOne({_id:req.params.id},
    {
        $set:req.body
    }
   
    )
    res.send(result)
});

app.get('/searchcapstone/:key',async(req,res)=>{
    let result=await Capstone.find({
     "$or":[
         {name:{$regex:req.params.key}}
         
     ]
    });
    res.send(result)
 })

//Queries
app.post('/Queries-details',async(req,res)=>{
    let Queriesdetails=new Queries(req.body)
    let result= await Queriesdetails.save()
    res.send(result)

})
app.get('/Queries-details',async(req,res)=>{
    let Queriesdetails=await Queries.find()
    if(Queriesdetails.length>0){
        res.send(Queriesdetails)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})


app.delete('/Queries-details/:id',async(req,res)=>{
    let result= await Queries.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get('/Queries-details/:id',async(req,res)=>{
    let result= await Queries.findOne({_id:req.params.id})
    if(result)
    {
        res.send(result)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})

app.put('/Queries-details/:id',async(req,res)=>{
    let result= await Queries.updateOne({_id:req.params.id},
    {
        $set:req.body
    }
   
    )
    res.send(result)
});

app.get('/searchqueries/:key',async(req,res)=>{
    let result=await Queries.find({
     "$or":[
         {name:{$regex:req.params.key}}
         
     ]
    });
    res.send(result)
 })
//leave
 app.post('/Leave-Details',async(req,res)=>{
    let LeaveProduct=new Leave(req.body)
    let result= await LeaveProduct.save()
    res.send(result)

})
app.get('/Leave-Details',async(req,res)=>{
    let LeaveProduct=await Leave.find()
    if(LeaveProduct.length>0){
        res.send(LeaveProduct)
    }
    else{
        res.send({result:'Detail Not found'})
    }

})
app.get('/searchleave/:key',async(req,res)=>{
    let result=await Leave.find({
     "$or":[
         {name:{$regex:req.params.key}}
         
     ]
    });
    res.send(result)
 })

 app.delete('/Leave-Details/:id',async(req,res)=>{
    let result= await Leave.deleteOne({_id:req.params.id})
    res.send(result)
})




function verifytoken(req,res,next){
    let token=req.headers['authorization']
    if(token)
    {
        token=token.split(' ')[1];
        jwt.verify(token,jwtkey,(err,valid)=>{
            if(err)
            {
                res.status(401).send({result:"Please provide valid token"})
            }else{
                    next()
            }
        })
       
    }else{
        res.status(403).send({result:"Please add token with header"})

    }

}

let port =3000
app.listen(port)


