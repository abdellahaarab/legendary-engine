const express = require('express');
const mongoose  = require('mongoose');


const { readGroupe, createGroupe, deleteGroupe,editeGroupe, findGroupe } = require('./Controllers/groupeController');
const app =  express()
const _port ="3001" ;
const cors  = require('cors');
app.use(cors())
app.use(express.json())

mongoose.connect(
    "mongodb://127.0.0.1:27017/ccn2" 
)

app.get("/api/", readGroupe) 

app.get("/api/:id", findGroupe)

app.post("/api/", createGroupe )

app.delete("/api/:id",deleteGroupe)

app.put("/api/:id", editeGroupe)

app.listen(_port,()=>{
    // console.log("Server Starting in PORT ",_port)
    console.log(`URL http://localhost:${_port}/api`)
})