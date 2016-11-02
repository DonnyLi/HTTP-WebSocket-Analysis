function websocketTest() {
	var WebSocket = require("ws");
	var ws = WebSocket("ws://localhost:8080");

	ws.on("open", function onOpen() {
		ws.send("Initial Message");
	});

	ws.on("message", function onMessage(message) {
		console.log("Received echo message: \"" + message + "\".");
	});	
}

function httpTest() {
	var request = require("request");
	request({
		url: "http://localhost:8080",
		method: "POST",
		body: "Hello"
	});
}

httpTest();