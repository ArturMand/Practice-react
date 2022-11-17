import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../operation/tasksOperation';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  extraReducers: builder =>
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
    }),
});

export default tasksSlice.reducer;
