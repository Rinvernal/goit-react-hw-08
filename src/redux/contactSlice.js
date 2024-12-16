import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import contactsData from "../components/contactsData.json"
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
const initialState = {
  items: contactsData,
  isLoading: false,
  iserror: false,
}
export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filter.filter],
  (items, filter) => items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
);
const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder)=>{
    builder
      .addCase(fetchContacts.fulfilled, (state, action)=>{
      state.items = action.payload
      })
      .addCase(deleteContact.fulfilled, (state, action)=>{
        state.items = state.items.filter(item => item.id !== action.payload.id)
      })
      .addCase(addContact.fulfilled, (state, action)=>{
        state.items.push(action.payload)
      })
      .addMatcher(isAnyOf(addContact.pending, deleteContact.pending, fetchContacts.pending),
      (state)=>{
        state.isError = false
        state.isLoading = true
      })
      .addMatcher(isAnyOf(addContact.rejected, deleteContact.rejected, fetchContacts.rejected),
      (state)=>{
        state.isError = true
        state.isLoading = false
      })
      .addMatcher(isAnyOf(addContact.fulfilled, deleteContact.fulfilled, fetchContacts.fulfilled),
      (state)=>{
        state.isError = false
        state.isLoading = false
      })
  }
})

export const selectContacts = state => state.contacts.items;
export const contactReducer = slice.reducer
///
export const seletctIsError = state => state.contacts.isError
export const selectIsLoading = state => state.contacts.isLoading