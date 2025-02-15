import { io } from "socket.io-client";

(async () => {
  const socket = io("ws://localhost:3000");

  socket.on("connected", (msg) => {
    console.log("Status => ", msg);
  });
  socket.on("phrase", (msg) => {
    console.log("Question => ", msg);
  });
})();
