const express = require('express')
const app = express()


app.get('/hello',(req,res)=>{
    const name = req.query.name || 'World'
    res.send(`Hello ${name}!`)
})

app.listen(3000,()=>{
    console.log("Server running");
})