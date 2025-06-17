const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};

const getAllConnectedClients = (roomID) => {
  return Array.from(io.sockets.adapter.rooms.get(roomID) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
};

io.on("connection", (socket) => {
  socket.on("join", ({ roomID, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomID);
    const clients = getAllConnectedClients(roomID);
    
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit("joined", {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("server in running");
});
