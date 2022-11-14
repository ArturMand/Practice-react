import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { loading: false, error: null, messages: [] },
  reducers: {
    setChat: (state, { payload }) => {
      state.messages = payload;
    },
    loadingOn: state => {
      state.loading = true;
      state.error = null;
    },
    loadingOff: state => {
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setChat, loadingOff, loadingOn, setError } = chatSlice.actions;
export default chatSlice.reducer;
