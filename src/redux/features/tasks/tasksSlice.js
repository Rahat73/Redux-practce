import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
  userSpecificTask: [],
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
      state.task = state.task.filter((item) => item.id !== payload.id);
    },
    updateTask: (state, { payload }) => {
      const target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    setUserTask: (state, { payload }) => {
      state.userSpecificTask = state.task.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateTask, setUserTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
