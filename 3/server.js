const fs = require('fs')

fs.writeFile('output.txt','Hello Node.js',(err) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("File created")
})