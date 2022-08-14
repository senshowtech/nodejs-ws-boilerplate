const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9000 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      client.send("" + data);
    });
  });
});
