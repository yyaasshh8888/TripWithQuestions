import { Server } from "socket.io";

(async () => {
  const questions = [
    "How much time to reach?",
    "Are we there yet?",
    "I have to go pee...",
    "I'm tired",
    "One two buckle my shoe...",
  ];
  const io = new Server(3000);
  io.on("connection", (socket) => {
    socket.emit("connected", "Successfully connected!!!");
  });

  let randomInt = Math.floor(Math.random() * 10000);
  const askQuestion = (interval: number) => {
    setTimeout(() => {
      // timeout
      const randomQuestionIndex = Math.floor(
        Math.random() * questions.length - 1
      );
      io.emit("phrase", questions[randomQuestionIndex]);
      randomInt = Math.floor(Math.random() * 10000);
      askQuestion(randomInt);
    }, interval);
    // askQuestion()
  };
  askQuestion(randomInt);
})();
