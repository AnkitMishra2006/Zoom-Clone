import { Server } from "socket.io";

const connectToServer = (httpServer) => {
  const io = new Server(httpServer);
  return io;
};

export { connectToServer };
