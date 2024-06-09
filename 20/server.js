const express = require('express')
const app = express()

app.use(express.json())


let items = []


app.get('/items',(req,res)=>{
    res.json(items)
})

app.post('/items',(req,res)=>{
    const item = req.body
    items.push(item)
    res.status(201).json(item)
})

app.put('/items/:id',(req,res)=>{
    const id = parseInt(req.params.id,10);
    const newItem = req.body
    items[id] = newItem
    res.json(newItem)
})

app.listen(3000,()=>{
    console.log("Server running")
})