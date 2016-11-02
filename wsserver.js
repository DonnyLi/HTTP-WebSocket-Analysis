var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({
	port:8080
});

// Simple echo websocket server
server.on("connection", function onConnection(ws) {
	console.log("Connection Established.");
	ws.on("message", function onMessage(message) {
		ws.send(message);
	});
});