const fs = require('fs')

const filepath = 'example.txt'

fs.readFile(filepath,'utf8',(err,data)=> {
    if(err){
        console.log('Error reading File:',err)
        return
    }
    console.log('File content:',data)
})