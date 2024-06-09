const fs = require('fs');

fs.readFile('data.json','utf8',(err,data)=> {
    if(err){
        console.error("Error reading File:",err)
        return;
    }

    let jsonData;
    try{
        jsonData = JSON.parse(data)
        console.log(jsonData)
    }catch(parseError){
        console.error('Error parsing JSON:',parseError)
        return;
    }

    jsonData.newKey = 'newValue';

    const jsonString = JSON.stringify(jsonData,null,2)

    fs.writeFile('data.json',jsonString,(err)=>{
        if(err){
            console.error('Error writing file:',err)
            return;
        }
        console.log('JSON file updated ');
    });
});