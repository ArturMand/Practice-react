// import { loadingOff, loadingOn, logOut, setError, setUser } from './AuthSlice';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

const provider = new GoogleAuthProvider();

// createAsyncThunk("type",()=>{})

export const googleAuth = createAsyncThunk(
  'auth/googleAuth',
  async (_, thunkAPI) => {
    try {
      // async operation
      const {
        user: { email, displayName },
      } = await signInWithPopup(auth, provider);
      return { email, displayName };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginOut = createAsyncThunk(
  'auth/loginOut',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const googleAuth = () => async dispatch => {
//   try {
// dispatch(loadingOn());
// // async operation
// const {
//   user: { email, displayName },
// } = await signInWithPopup(auth, provider);
// dispatch(setUser({ email, displayName }));
// dispatch(loadingOff());
//   } catch (error) {
// dispatch(setError(error));
//   }
// };

// export const loginOut = () => async dispatch => {
// try {
//   dispatch(loadingOn());
//   // async operation
//   dispatch(logOut());
//   dispatch(loadingOff());
// } catch (error) {
//   dispatch(setError(error));
// }
// };
