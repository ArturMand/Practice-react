import { loadingOff, loadingOn, setChat, setError } from './ChatSlice';
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebaseConfig';

export const getChat = () => async dispatch => {
  try {
    dispatch(loadingOn());
    // async operation

    const starCountRef = ref(database, 'chat');
    onValue(starCountRef, async snapshot => {
      const data = await snapshot.val();
      const transformData = Object.entries(data).map(([id, value]) => ({
        id,
        value,
      }));
      dispatch(setChat(transformData));
    });
    dispatch(loadingOff());
  } catch (error) {
    dispatch(setError(error));
  }
};

export const addMessage = () => async dispatch => {
  try {
    dispatch(loadingOn());
    // async operation
    dispatch(loadingOff());
  } catch (error) {
    dispatch(setError(error));
  }
};
