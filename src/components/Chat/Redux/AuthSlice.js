import { createSlice } from '@reduxjs/toolkit';
import { googleAuth, loginOut } from './AuthOperations';

const handelAuth = (state, { payload }) => {
  console.log(state);
  if (payload) {
    state.user = payload;
    state.isLogIn = true;
    return;
  }
  if (!payload) {
    state.user = null;
    state.isLogIn = false;
    return;
  }
};

const switchOnLoader = state => {
  state.isLogIn = true;
  state.error = null;
};

const hendleError = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isLogIn: false, loading: false, error: null },
  // reducers: {
  //   setUser: (state, action) => {
  //     state.user = action.payload;
  //     state.isLogIn = true;
  //   },
  //   loadingOn: state => {
  //     state.isLogIn = true;
  //     state.error = null;
  //   },
  //   loadingOff: state => {
  //     state.loading = false;
  //   },
  //   setError: (state, action) => {
  //     state.error = action.payload;
  //     state.loading = false;
  //   },
  //   logOut: state => {
  //     state.user = null;
  //     state.isLogIn = false;
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(googleAuth.fulfilled, handelAuth)
      .addCase(loginOut.fulfilled, handelAuth)
      .addCase(googleAuth.pending, switchOnLoader)
      .addCase(loginOut.pending, switchOnLoader)
      .addCase(googleAuth.rejected, hendleError)
      .addCase(loginOut.rejected, hendleError),
  //  {
  //   [googleAuth.fulfilled]: handelAuth,
  //   [loginOut.fulfilled]: handelAuth,
  //   [googleAuth.pending]: switchOnLoader,
  //   [loginOut.pending]: switchOnLoader,
  //   [googleAuth.rejected]: hendleError,
  //   [loginOut.rejected]: hendleError,
  // },
});

export default authSlice.reducer;
export const { setError, setUser, loadingOff, loadingOn, logOut } =
  authSlice.actions;
