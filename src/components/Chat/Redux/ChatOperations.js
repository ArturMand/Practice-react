import { setChat } from './ChatSlice';
import { ref, onValue, set } from 'firebase/database';
import { database } from '../services/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { emailSelector, nameSelector } from './Selectors';

export const getChat = createAsyncThunk('chat/getChat', (_, thunkAPI) => {
  try {
    const starCountRef = ref(database, 'chat');
    onValue(starCountRef, async snapshot => {
      const data = await snapshot.val();
      if (data) {
        const transformData = Object.entries(data).map(([id, value]) => ({
          ...value,
          id,
        }));
        thunkAPI.dispatch(setChat(transformData));
      }
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addMessage = createAsyncThunk(
  'chat/AddMessage',
  async (message, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const id = Number(Math.random().toFixed(4)) * 10000;
      const createdAt = Date.now();
      const name = nameSelector(state);
      const email = emailSelector(state);

      await set(ref(database, `chat/${id}`), {
        name,
        email,
        createdAt,
        message,
        id,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const getChat = () => async dispatch => {
//   try {
//     dispatch(loadingOn());
//     // async operation

// const starCountRef = ref(database, 'chat');
// onValue(starCountRef, async snapshot => {
//   const data = await snapshot.val();
//   const transformData = Object.entries(data).map(([id, value]) => ({
//     id,
//     value,
//   }));
//   dispatch(setChat(transformData));
//     });
//     dispatch(loadingOff());
//   } catch (error) {
//     dispatch(setError(error));
//   }
// };

// export const addMessage = () => async dispatch => {
//   try {
//     dispatch(loadingOn());
//     // async operation
//     dispatch(loadingOff());
//   } catch (error) {
//     dispatch(setError(error));
//   }
// };
