import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shakib",
  email: "shak@mail.com",
  userTask: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
