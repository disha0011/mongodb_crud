const express=require("express");
const getData=express.Router();

const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;

 const url='mongodb+srv://admin:admin@cluster0.nhpwzlo.mongodb.net/?retryWrites=true&w=majority';
// const url='mongodb://localhost:27017';
//aa link connect() pchi aema2nd option.application valu

getData.get("/",(req,res)=>{
   console.log("inside getdata");

    MongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("school")
            db.collection("stud").find().toArray((err,arr)=>{
                res.send(arr);
                console.log(arr);
            })
        }
    })
    });
    
module.exports=getData;