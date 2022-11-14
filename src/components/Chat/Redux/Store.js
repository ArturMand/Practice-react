import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import chatReducer from './ChatSlice';
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: { auth: persistedReducer, chat: chatReducer },
  middleware: middlewares =>
    middlewares({
      serializableCheck: { ignoreActions: [REHYDRATE, PERSIST] },
    }),
});
export const persistor = persistStore(store);

export default store;
