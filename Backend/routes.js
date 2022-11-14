const express=require('express')
const router=express.Router()
const authservice=require('./service/authservice')
const jwt = require('jsonwebtoken')
const events=require('./service/events')
const db=require('./db')





router.delete('/logout/:email',(req,res)=>{
    db.user.deleteOne({"email":req.params.email},(err,data)=>{
        if(!err){
            res.send(data)
        }
    })
})



router.delete('/delete/:id',(req,res)=>{
      db.event.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err){
        console.log("err",err);
          
        }else{
            console.log("data",data);
            res.send(data) 
            
        }
      }) 
}) 
  
router.get('/delethistory/:email',(req,res)=>{
    db.deleteevent.find({"email":req.params.email},(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log("err",err);
        }
    })
}) 

router.post('/delethistory',(req,res)=>{
   events.deletehistory(req.body.date,req.body.eventNames,req.body.priority,req.body.email).then((result)=>{
    res.status(result.statusCode).res.json(result) 
   })
   
})


router.post('/addEvent',(req,res)=>{
    events.createEvent(req.body.eventName,req.body.date,req.body.priority,req.body.email).then((result)=>{
        res.status(result.statusCode),res.json(result)
    })
})
router.get('/addEvent/:email',(req,res)=>{ 
    db.event.find({"email":req.params.email},(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log("err",err);
        }
    })
      
 
})

//root middleware
const jwtwebtoken=((req,res,next)=>{
    const token=req.header('token')
    const data =jwt.verify(token,'supersecretkey@123')
    console.log(data)
    if(req.body.email==data.currentemail){
      next()
    }
  })

router.post('/login',(req,res)=>{
   const auth= authservice.login(req.body.email,req.body.password)
    .then((auth)=>{
        res.status(auth.statusCode),res.json(auth)
    })
})


router.post('/register',(req,res)=>{
    authservice.register(req.body.name,req.body.email,req.body.password,req.body.dateOfbirth)
    .then((result)=>{
        res.status(result.statusCode),res.json(result)
    })

})


module.exports=router