import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/slice';
import tasksReducer from './slice/sliceTasks';
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
const persistedTasksReducer = persistReducer(persistConfig, tasksReducer);

const store = configureStore({
  reducer: { auth: authReducer, tasks: persistedTasksReducer },
  middleware: middlewares =>
    middlewares({
      serializableCheck: { ignoreActions: [REHYDRATE, PERSIST] },
    }),
});

export const persistor = persistStore(store);

export default store;
