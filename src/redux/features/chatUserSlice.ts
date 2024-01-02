import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  users: {
    email: string;
    message: string;
    role: string;
    _id: string;
  }[];
}

const initialState: IUser = {
  users: [],
};

const chatUserSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    allUsers: (state) => {
      state.users = state.users;
    },
  },
});

export const { allUsers } = chatUserSlice.actions;

export default chatUserSlice.reducer;
