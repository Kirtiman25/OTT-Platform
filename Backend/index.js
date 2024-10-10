const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const client = require('./client')
const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/Audiance")
app.post('/Profile',(req,res)=>{
  client.create(req.body)
  .then(client=>res.json(client))
  .catch(err=>res.json(err))

})
app.listen(8000,()=>{console.log("Server is runing ");
})