import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import authService from './authService'

export const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}