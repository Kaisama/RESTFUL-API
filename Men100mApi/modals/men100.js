const express=require("express");
const  Mongoose  = require("mongoose");
const app=express();

const menSchema=new Mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
})

//creating a new collection
const MensRanking=new Mongoose.model("MensRanking",menSchema);

module.exports=MensRanking;