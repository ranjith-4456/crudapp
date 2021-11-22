const express= require('express');
const mongoose= require('mongoose');

const app=express();
const port=3000;
const url= "mongodb://localhost:27017/mydb";

mongoose.connect(url,{useNewUrlParser: true})
.then((res)=>{console.log("Connected db", res);})
.catch((error)=>{console.log("error connecting db", error);})

const con= mongoose.connection;
app.use(express.json());
try{con.on('open',() => {console.log('connected');})}
catch(error){console.log("Error: "+error);}

const studentrouter= require("./routes/students");
app.use('/students',studentrouter); 



app.listen(port, () =>{
    console.log('Server started');
})