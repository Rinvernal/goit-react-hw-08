import { createAsyncThunk } from "@reduxjs/toolkit"
import { Api } from "../auth/operations";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await Api.get('/contacts')
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI)=>{
  try {
    await Api.delete(`/contacts/${id}`)
    return {id}
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('contacts/addContact', async(body, thunkAPI)=>{
  try {
    const response = await Api.post(`/contacts`, body)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})