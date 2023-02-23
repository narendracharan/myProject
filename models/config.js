const mongoose=require("mongoose")
mongoose.set('strictQuery', true)

mongoose.connect("mongodb://127.0.0.1:27017/ApiData",{useNewUrlParser:true})
const connection=mongoose.connection
connection.once("open",()=>{
    console.log("mongodb connect successfully");
    
})