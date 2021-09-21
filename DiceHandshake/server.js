// server.js
const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket =>{
    console.log("Nice to meet you. (shake hand)")
    // console.log(socket.id)
    
    socket.on("Welcome",data=>{
        //emits an event to all clients other than this particular one, 
        //referenced by the socket variable
        
        socket.broadcast.emit("Welcome",data);
        //io.emit emits an event to all connected clients
        //socket.emit emits an event directly to this specific client
    });

    socket.on("event_from_client",data=>{
        //emits an event to all clients other than this particular one, 
        //referenced by the socket variable
        
        socket.broadcast.emit("send_data_to_all_other_clients",data);
        //io.emit emits an event to all connected clients
        //socket.emit emits an event directly to this specific client
    });
});

