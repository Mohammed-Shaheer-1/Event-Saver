const express=require('express')
const mongoose=require('./db')
const router=require('./routes')
const cors=require('cors')

const app=express()
app.use(express.json())


app.use(cors({
    origin:'http://localhost:4200'
  }))


app.use('/event',router)
app.listen(3000,()=>{
    console.log("port running 3000");
})

