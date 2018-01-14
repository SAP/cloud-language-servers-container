let net = require('net');

let clientIn = new net.Socket();
let clientOut = new net.Socket();

clientOut.connect(process.env.STDOUT_PORT, '127.0.0.1', function() {
	console.log('Connected out');
});
clientIn.connect(process.env.STDIN_PORT, '127.0.0.1', function() {
	console.log('Connected in');
});
clientIn.on('data', function(data) {
	console.log('Received: ' + data);
	clientOut.write(data);
});