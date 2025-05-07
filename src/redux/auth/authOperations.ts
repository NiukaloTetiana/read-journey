import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { clearToken, instance, setToken } from "../../services";
import {
  IAuthResponse,
  IRegisterRequest,
  ILoginRequest,
  IRefreshResponse,
  ICurrentUserResponse,
} from "../../types";
import { RootState } from "../store";

export const registerUser = createAsyncThunk<
  IAuthResponse,
  IRegisterRequest,
  { rejectValue: string }
>("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/users/signup", credentials);
    setToken(data.token);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const loginUser = createAsyncThunk<
  IAuthResponse,
  ILoginRequest,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/users/signin", credentials);
    setToken(data.token);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const logoutUser = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await instance.post("/users/signout");

    clearToken();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const refreshUser = createAsyncThunk<
  IRefreshResponse,
  undefined,
  { state: RootState; rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
  const {
    auth: { refreshToken },
  } = thunkAPI.getState();

  if (!refreshToken) {
    return thunkAPI.rejectWithValue("There is no refreshToken");
  }

  try {
    setToken(refreshToken);
    const { data } = await instance.get("/users/current/refresh");

    setToken(data.token);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});

export const getCurrentUser = createAsyncThunk<
  ICurrentUserResponse,
  undefined,
  { state: RootState; rejectValue: string }
>("auth/current", async (_, thunkAPI) => {
  // const {
  //   auth: { refreshToken },
  // } = thunkAPI.getState();

  // if (!refreshToken) {
  //   return thunkAPI.rejectWithValue("There is no refreshToken");
  // }

  try {
    const { data } = await instance.get("/users/current");

    setToken(data.token);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});
