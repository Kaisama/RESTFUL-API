const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/men100api").then(()=>{
    console.log("conn success with db")
}).catch((e)=>{
    console.log("no connection",e);
})