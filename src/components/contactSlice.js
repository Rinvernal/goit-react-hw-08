import { createSlice } from "@reduxjs/toolkit"
import contactsData from "./contactsData.json"
const initialState = {
  items: contactsData,
  filter: '',
}

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) =>{
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
})
export const {deleteContact, addContact, changeFilter} = slice.actions
export const selectContacts = state => state.contacts.items;
export const contactReducer = slice.reducer