import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";
import { contactReducer } from "./contactSlice";


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

