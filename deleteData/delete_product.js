const express=require("express");
const deleteData=express.Router();

const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;


 const url='mongodb+srv://admin:admin@cluster0.nhpwzlo.mongodb.net/?retryWrites=true&w=majority';
 deleteData.delete("/",(req,res)=>{
       MongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("school");
            db.collection("stud").deleteOne({
            "eid":req.body.eid
            },(err,result)=>{
                         if(err) throw err;
                         else{
                            res.send({"delete":"success"});
                            }
                           
                        })
                    }
                        
       })
    });    
module.exports=deleteData;


