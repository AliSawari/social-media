import { io } from "socket.io-client";
export const useSocketConnection = (address) => {
  const socket = io(address, {
    transports: ["websocket"],
    upgrade: false,
  });

  return socket;
};
