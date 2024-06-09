const express = require('express')
const app = express()


app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index',{title:'Express',message:'Hello Pug!'})
})

app.listen(3000,()=>{
    console.log('Server running')
})