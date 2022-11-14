const mongoose = require('mongoose')

const mongoDb="mongodb://localhost:27017/EventSaver"

mongoose.connect(mongoDb,{useNewUrlParser:true},(err,data)=>{
    if(err){
        console.log("db connection faild");
    }else{
        console.log("db connection success");
    }    
})
const user=mongoose.model('Event',{
    userId:String,
    email:String,
    password:String,
    dateOfbirth:String
})

const event=mongoose.model('Newevent',{
    eventName:String,
    date:String,
    priority:String,
    email:String
})
const deleteevent=mongoose.model('Deletehistorys',{
    date:String,
    eventNames:String,
    priority:String,
    email:String

})

module.exports={user,mongoose,event,deleteevent}