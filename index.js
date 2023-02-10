const { SerialPort } = require('serialport');
// const serialPort = new SerialPort({
//     path: 'COM4',
//     baudRate: 19200
// });

// serialPort.on("open", function() {
//   console.log("-- Connection opened --");
//   serialPort.on("data", function(data) {
//     console.log("Data received: " + data);
//   });
// });


// Importing express
const express = require('express');
  
// Creating instance of express
const app = express();
  
// Handling GET / Request
app.use(express.static('public'))
  
// Listening to server at port 3000
app.listen(3000, function () {
    console.log("server started at port 3000");
})