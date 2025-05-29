import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Це ключ, під яким ми будемо зберігати дані в локальному сховищі
  storage, // Використовуємо локальне сховище
  whitelist: ["items"], // Зберігаємо тільки поле "items" слайса контактів
};

const persistedReducer = persistReducer(persistConfig, contactReducer);
export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ігноруємо дію persist/PERSIST
      },
    }),
});

export const persistor = persistStore(store);
