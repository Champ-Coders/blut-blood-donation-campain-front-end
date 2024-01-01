export type ILiveChat = {
  id: number;
  message: string;
  time: any;
  avatar: string;
  status: string;
  type: "comment" | "reply";
};

export const LiveChatData: ILiveChat[] = [
  {
    id: 1,
    message: "Hi, how can I help you?",
    time: "2023-12-28T11:02:21.766Z",
    avatar: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    status: "online",
    type: "comment",
  },
  {
    id: 2,
    message:
      "I am looking for the best admin template. Could you please help me to find it out?",
    time: "2023-12-28T11:12:45.123Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "online",
    type: "reply",
  },
  {
    id: 3,
    message: "Stack admin is the responsive bootstrap 4 admin template.",
    time: "2023-12-28T11:25:30.987Z",
    avatar: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    status: "online",
    type: "comment",
  },
  {
    id: 4,
    message: "Ohh! very nice",
    time: "2023-12-28T11:38:15.555Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "online",
    type: "reply",
  },
  {
    id: 5,
    message: "Thank you.",
    time: "2023-12-28T11:45:59.888Z",
    avatar: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    status: "online",
    type: "comment",
  },
  {
    id: 6,
    message: "Can you suggest a good color scheme for the admin template?",
    time: "2023-12-28T12:02:30.444Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "online",
    type: "reply",
  },
  {
    id: 7,
    message: "Sure! I recommend a combination of blue and gray.",
    time: "2023-12-28T12:15:10.222Z",
    avatar: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    status: "online",
    type: "comment",
  },
  {
    id: 8,
    message: "That sounds good. Thanks!",
    time: "2023-12-28T12:28:05.789Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "online",
    type: "reply",
  },
  {
    id: 9,
    message: "You're welcome!",
    time: "2023-12-28T12:35:40.333Z",
    avatar: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    status: "online",
    type: "comment",
  },
  {
    id: 10,
    message: "If you have any more questions, feel free to ask.",
    time: "2023-12-28T12:45:55.666Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "online",
    type: "reply",
  },
];
