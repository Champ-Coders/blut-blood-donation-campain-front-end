import { createSlice } from "@reduxjs/toolkit";

interface IMessage {
  message: {}[];
}

const initialState: IMessage = {
  message: [],
};

const chatMessageSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    allUsers: (state) => {
      state.message = state.message;
    },
  },
});

export const { allUsers } = chatMessageSlice.actions;

export default chatMessageSlice.reducer;
