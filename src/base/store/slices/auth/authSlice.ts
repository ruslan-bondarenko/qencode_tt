import { IReview } from '@/shared/types';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const FETCH_URL = "https://api.qencode.com/v1";

export type HeaderStateType = {
  currentEmail: string;
  hasForgotten: boolean;
  token: {
    isLoading: boolean;
    value: string;
    error: string | undefined
  }
};

const initialState: HeaderStateType = {
  currentEmail: '',
  hasForgotten: false,
  token: {
    isLoading: false,
    value: '',
    error: ''
  }
};

export const getAccessToken = createAsyncThunk(
  "auth/getAccessToken",
  async function (_, { rejectWithValue }) {
    try {
      return await fetch(`${FETCH_URL}/access_token`).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeEmail: (state, actions:PayloadAction<string>) => {
      state.currentEmail = actions.payload
    },
    showForgottenForm: (state) => {
      state.hasForgotten = true;
    },
    hideForgottenForm: (state) => {
      state.hasForgotten = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.pending, (state) => {
      state.token.isLoading = true;
    });
    builder.addCase(getAccessToken.fulfilled, (state, action) => {
      state.token.isLoading = false;
      state.token.value = action.payload;
      state.token.error = "";
    });
    builder.addCase(getAccessToken.rejected, (state, action) => {
      state.token.isLoading = false;
      state.token.value = '';
      state.token.error = action.error.message;
    });
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
