const express = require('express')
const app = express()

app.get('/hello/:username',(req,res)=>{
    const username = req.params.username
    res.send(`Hello ${username}`);
})

app.listen(3000,()=>{
    console.log("Server running")
})