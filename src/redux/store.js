import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/users/userSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    users: userSlice,
  },
});
export default store;
