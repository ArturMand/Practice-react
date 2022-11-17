const { createSlice } = require('@reduxjs/toolkit');
const { registration, logOut } = require('../operation/operation');

const initialState = { token: '', user: { name: '', email: '' }, error: '' };

const registerFulfilled = (_, { payload }) => payload;
const rejected = (state, { payload }) => {
  state.error = payload;
};
const logOutFulfilld = () => initialState;

const authSliceTasks = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registration.fulfilled, registerFulfilled)
      .addCase(registration.rejected, rejected)
      .addCase(logOut.fulfilled, logOutFulfilld)
      .addCase(logOut.rejected, rejected),
});

export default authSliceTasks.reducer;
