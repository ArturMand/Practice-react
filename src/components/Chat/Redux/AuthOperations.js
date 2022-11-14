import { loadingOff, loadingOn, logOut, setError, setUser } from './AuthSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const provider = new GoogleAuthProvider();

export const googleAuth = () => async dispatch => {
  try {
    dispatch(loadingOn());
    // async operation
    const {
      user: { email, displayName },
    } = await signInWithPopup(auth, provider);
    dispatch(setUser({ email, displayName }));
    dispatch(loadingOff());
  } catch (error) {
    dispatch(setError(error));
  }
};

export const loginOut = () => async dispatch => {
  try {
    dispatch(loadingOn());
    // async operation
    dispatch(logOut());
    dispatch(loadingOff());
  } catch (error) {
    dispatch(setError(error));
  }
};
