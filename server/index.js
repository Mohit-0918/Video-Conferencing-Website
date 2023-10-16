const{Server} =require("socket.io");
const io=new Server(3000);
io.on("connection",(socket)=>{
    //send a message to the client
    socket.emit("hello","world");
    
    //receive a message from the client
    socket.on('howdy',(arg)=>{
        console.log(`client says: ${arg}`);
    })
})