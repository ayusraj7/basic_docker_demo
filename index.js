const express = require('express')
const app = express() 

const dotenv = require('dotenv')
dotenv.config()

app.get('/home',(req,res)=> {
    res.json({message:'OK'})
})


app.listen(4000,()=>{
    console.log('started the server');
})
