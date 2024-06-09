const express = require('express')
const bodyparser = require('body-parser')
const app = express()


app.use(bodyparser.urlencoded({extended:false}))

app.post('/submit',(req,res)=>{
    const formData = req.body
    res.send(`Form data received : ${JSON.stringify(formData)}`)
});

app.listen(3000,()=>{
    console.log('Server running')
})