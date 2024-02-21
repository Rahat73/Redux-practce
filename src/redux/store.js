import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasks";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
export default store;
