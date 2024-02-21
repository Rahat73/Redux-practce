import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.task.filter((item) => item.id !== payload);
    },
    updateTask: (state, { payload }) => {
      const target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
  },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
