const db=require('../db')
const promise=require('promise')

const createEvent=(eventName,date,priority,email)=>{
      
  return new promise((resolve,rejuct)=>{
   let event= db.event.findOne({"eventName":eventName,"date":date,"priority":priority})
   if(event){
     let newEvent=new db.event({
        eventName,
        date,
        priority,
        email
     })
   
      let data={
        statusCode:200,
        status: true,
        message:"new event added",
      }
      newEvent.save()
      resolve(data)
   }

  })

}


const deletehistory=(date,eventNames,priority,email)=>{
        return new promise((resolve,rejuct)=>{
              const data= new db.deleteevent({
                   date,
                   eventNames,
                   priority,
                   email

                })
                data.save()
                let obj={
                  statusCode:200,
                  status: true,
                  message:"history",
                }
                
                resolve(obj)
               
                
        })
}
module.exports={createEvent,deletehistory}