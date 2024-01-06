import { createSlice } from "@reduxjs/toolkit";

interface IMessage {
  messages: {}[];
}

const initialState: IMessage = {
  messages: [],
};

const chatMessageSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    allUsers: (state) => {
      state.messages = state.messages;
    },
  },
});

export const { allUsers } = chatMessageSlice.actions;

export default chatMessageSlice.reducer;
