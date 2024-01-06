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
    setUsers: (state, actions) => {
      state.users = actions.payload;
    },
  },
});

export const { setUsers } = chatUserSlice.actions;

export default chatUserSlice.reducer;
