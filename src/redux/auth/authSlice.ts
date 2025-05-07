import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from "./authOperations";
import { IUser } from "../../types";

export interface IAuthSlice {
  user: IUser | null;
  token: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
}

const initialState: IAuthSlice = {
  user: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = {
          _id: "",
          name: action.payload.name,
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = {
          _id: "",
          name: action.payload.name,
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          loginUser.pending,
          logoutUser.pending,
          getCurrentUser.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          loginUser.rejected,
          logoutUser.rejected,
          getCurrentUser.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },

  selectors: {
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
    selectIsLoadingAuth: (state) => state.isLoading,
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectUser,
  selectIsLoggedIn,
  selectIsLoadingAuth,
  selectIsRefreshing,
} = authSlice.selectors;
export type AuthState = ReturnType<typeof authReducer>;
