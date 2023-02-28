const express=require("express");
const postData=express.Router();

const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;


 const url='mongodb+srv://admin:admin@cluster0.nhpwzlo.mongodb.net/?retryWrites=true&w=majority';
// const url='mongodb://localhost:27017';
//aa link connect() pchi aema2nd option.application valu
postData.post("/",(req,res)=>{
       MongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("school");
            console.log(req.body);
            db.collection("stud").insertOne(
                {
                    "eid":req.body.eid,
                    "ename":req.body.ename,
                    "city":req.body.city,
                    "salary":req.body.salary
                },(err,result)=>{
                         if(err) throw err;
                         else{
                            res.send({"insert":"success"});
                         }
                          
                    })
               }
        })
    });    
module.exports=postData;


