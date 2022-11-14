import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isLogIn: false, loading: false, error: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogIn = true;
    },
    loadingOn: state => {
      state.isLogIn = true;
      state.error = null;
    },
    loadingOff: state => {
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logOut: state => {
      state.user = null;
      state.isLogIn = false;
    },
  },
});

export default authSlice.reducer;
export const { setError, setUser, loadingOff, loadingOn, logOut } =
  authSlice.actions;
