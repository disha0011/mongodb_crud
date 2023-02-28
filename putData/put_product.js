const express=require("express");
const putData=express.Router();

const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;


 const url='mongodb+srv://admin:admin@cluster0.nhpwzlo.mongodb.net/?retryWrites=true&w=majority';
  putData.put("/",(req,res)=>{
       MongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("school");
            db.collection("stud").updateOne({ename:req.body.ename}, {$set:{salary:req.body.salary}},(err,result)=>{
                         if(err) throw err;
                         else{
                            res.send({"update":"success"});
                            }
                           
                        })
                    }
               })
    });    
module.exports=putData;


