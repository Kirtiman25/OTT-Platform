const mongoose= require('mongoose')
const client=new mongoose.Schema({
  name:'string',
  email:'string',
  password :'string'
}

)
const clientmodel = mongoose.model("Audiance",client)
module.exports=client