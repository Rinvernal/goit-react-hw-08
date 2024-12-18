import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterReducer } from "./filters/slice";
import { contactReducer } from "./contacts/slice";
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
