import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMessage = createAsyncThunk('greetings/fetch', async () => {
  const random = Math.floor(Math.random() * 5) + 1;
  const response = await fetch(`http://localhost:3000/messages/${random}`);
  const data = await response.json();
  const { greeting } = data;
  return greeting;
});

const initialState = { loading: false, greeting: '', error: '' };

const greet = createSlice({
  name: 'Greet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessage.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getMessage.fulfilled, (state, action) => {
      const newState = { ...state, greeting: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getMessage.rejected, (state, action) => {
      const newState = { ...state, greeting: '', error: action.error.message };
      return newState;
    });
  },
});

export default greet.reducer;
