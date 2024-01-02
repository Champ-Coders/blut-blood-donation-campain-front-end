import { io } from "socket.io-client";

const user = {
  _id: "1",
  email: "sarwarasik@gmail.com",
  name: "Sarwar Hossain",
};

const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"],
  query: { user: JSON.stringify(user) }, // Serialize user data here
})



export default socket;
