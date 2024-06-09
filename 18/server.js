const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello Express')
})

app.use((req,res,next)=>{
    res.status(404).send('Sorry that is not valid route')
})

app.listen(3000,()=>{
    console.log("Server running")
})