import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://connections-api.goit.global/'
})

const setAuthHeader = (token) => {
  Api.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  Api.defaults.headers.common.Authorization = ``
}

export const register = createAsyncThunk('auth/register', async(credentials, thunkAPI)=>{
  try {
    const response = await Api.post('/users/signup', credentials)
    setAuthHeader(response.data.token)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const login = createAsyncThunk('auth/login', async(credentials, thunkAPI)=>{
  try {
    const response = await Api.post('/users/login', credentials)
    setAuthHeader(response.data.token)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk('auth/logout', async(_, thunkAPI)=>{
  try {
    await Api.post('/users/logout')
    clearAuthHeader()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk('auth/refresh', async(_, thunkAPI)=>{
  const savedToken = thunkAPI.getState().auth.token
  if (!savedToken) {
    return thunkAPI.rejectWithValue('Token is not found!')
  }
  try {
    setAuthHeader(savedToken)
    const { data } = await Api.get('/users/current')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})