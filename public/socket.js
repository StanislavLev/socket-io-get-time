const socket = io.connect('http://localhost:3000');

//Emit events

function emitLatestTime() {
  socket.emit('Latest Time');
}

//Listen for events

socket.on('New Time', function(data) {
  console.log(data);
  document.getElementById('timestamp').innerHTML = data;
});