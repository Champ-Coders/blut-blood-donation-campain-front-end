import config from "@/config/config";
import { io } from "socket.io-client";

// const user = {
//   _id: "1",
//   email: "sarwarasik@gmail.com",
//   name: "Sarwar Hossain",
// };

const socket = io(config.socketServerURL, {
  transports: ["websocket", "polling"],
  // query: { user: JSON.stringify(user) }, // Serialize user data here
  
});

export default socket;
