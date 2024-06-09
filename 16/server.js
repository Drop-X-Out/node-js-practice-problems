const express = require('express')
const app = express()


app.get('/users',(req,res)=>{
    res.json([
        {name:'Alice'},
        {name:'Zayn'}
    ])
})

app.listen(3000,()=>{
    console.log('Server running')
})