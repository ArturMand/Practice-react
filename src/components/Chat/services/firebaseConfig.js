// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCFauJVp5e5e9gwQfqIfTys91g-YJocJRo',
  authDomain: 'chat-firebase-80ee4.firebaseapp.com',
  databaseURL:
    'https://chat-firebase-80ee4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-firebase-80ee4',
  storageBucket: 'chat-firebase-80ee4.appspot.com',
  messagingSenderId: '303880659110',
  appId: '1:303880659110:web:25f21e2b5541fab3355467',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
