const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello , Middleware')
})


app.listen(3000,()=> {
    console.log("Server Running ...")
})