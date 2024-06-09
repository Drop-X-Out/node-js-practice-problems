const net = require('net')


const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        socket.write(data)
    })
})

server.listen(3000,()=>{
    console.log('TCP server listing on port 3000')
})