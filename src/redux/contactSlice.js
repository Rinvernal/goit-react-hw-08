import { createSlice } from "@reduxjs/toolkit"
import contactsData from "../components/contactsData.json"
const initialState = {
  items: contactsData,
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
  }
})
export const {deleteContact, addContact} = slice.actions
export const selectContacts = state => state.contacts.items;
export const contactReducer = slice.reducer