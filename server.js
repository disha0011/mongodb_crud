const express=require("express");
const cors=require("cors");
const app=express();
const port=1010;

app.use(cors());
app.use(express.json());

const getData=require("./getData/getData");
app.use("/getData",getData);

const deleteData =require("./deleteData/delete_product");
app.use("/deleteData",deleteData);

const postData =require("./postData/post_product");
app.use("/postData",postData);

const putData =require("./putData/put_product");
app.use("/putData",putData);

app.listen(port,()=>{
    console.log(`server listen successfully: ${port}`);
});


//npm install mongodb cors  download kri levanu