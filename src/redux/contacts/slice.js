import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { logout } from "../auth/operations";
import { addContact, deleteContact, fetchContacts } from "./operations";
const initialState = {
  items: [],
  loading: false,
  error: false,
}
const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder)=>{
    builder
      .addCase(fetchContacts.fulfilled, (state, action)=>{
      state.items = action.payload
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(deleteContact.fulfilled, (state, action)=>{
        state.items = state.items.filter(item => item.id !== action.payload.id)
      })
      .addCase(addContact.fulfilled, (state, action)=>{
        state.items.push(action.payload)
      })
      .addMatcher(isAnyOf(addContact.pending, deleteContact.pending, fetchContacts.pending),
      (state)=>{
        state.error = false
        state.loading = true
      })
      .addMatcher(isAnyOf(addContact.rejected, deleteContact.rejected, fetchContacts.rejected),
      (state)=>{
        state.error = true
        state.loading = false
      })
      .addMatcher(isAnyOf(addContact.fulfilled, deleteContact.fulfilled, fetchContacts.fulfilled),
      (state)=>{
        state.error = false
        state.loading = false
      })
  }
})
export const contactReducer = slice.reducer
