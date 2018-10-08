const express = require('express');
const app     = express();
const socket  = require('socket.io');


const port = 3000;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));

const io = socket(server);

io.on('connection',function(socket){
    console.log('We have a user connected !');
    let date = new Date().toTimeString();
    socket.on('Latest Time', () => {io.to(socket.id).emit('New Time', date)});
});