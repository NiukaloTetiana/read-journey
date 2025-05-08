import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type {
  IBookOwn,
  IBooksRecommendedRequest,
  IBooksRecommendedResponse,
  INewBook,
  IResponseReading,
} from "../../types";
import { instance } from "../../services";

export const getBooksRecommended = createAsyncThunk<
  IBooksRecommendedResponse,
  IBooksRecommendedRequest,
  { rejectValue: string }
>("books/getBooksRecommended", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/books/recommend", { params });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const getBooksOwn = createAsyncThunk<
  IBookOwn[],
  string | undefined,
  { rejectValue: string }
>("books/getBooksOwn", async (status, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/books/own", {
      params: status ? { status } : undefined,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || "Request failed");
    }
  }
});

export const getBookById = createAsyncThunk<
  IBookOwn[],
  string,
  { rejectValue: string }
>("books/getBookById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/book/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const addBook = createAsyncThunk<
  IBookOwn,
  INewBook,
  { rejectValue: string }
>("books/addBook", async (newBook, thunkAPI) => {
  try {
    const { data } = await instance.post("/books/add", newBook);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});

export const addBookFromRecommended = createAsyncThunk<
  IBookOwn,
  string,
  { rejectValue: string }
>("books/addBookFromRecommended", async (id, thunkAPI) => {
  try {
    const { data } = await instance.post(`/books/add/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});

export const deleteBook = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("books/deleteBook", async (id, thunkAPI) => {
  try {
    await instance.delete(`/books/remove/${id}`);

    return id;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || "Failed to delete book"
      );
    }

    return thunkAPI.rejectWithValue("Unexpected error occurred");
  }
});

export const deleteBookReading = createAsyncThunk<
  IResponseReading,
  { bookId: string; readingId: string },
  { rejectValue: string }
>("books/deleteBookReading", async (params, thunkAPI) => {
  try {
    const { data } = await instance.delete<IResponseReading>("/books/reading", {
      params: {
        bookId: params.bookId,
        readingId: params.readingId,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || "Failed to delete book"
      );
    }
    return thunkAPI.rejectWithValue("Unexpected error occurred");
  }
});

export const startBookReading = createAsyncThunk<
  IResponseReading,
  { id: string; page: number },
  { rejectValue: string }
>("books/startBookReading", async (body, thunkAPI) => {
  try {
    const { data } = await instance.post("/books/reading/start", body);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});

export const finishBookReading = createAsyncThunk<
  IResponseReading,
  { id: string; page: number },
  { rejectValue: string }
>("books/finishBookReading", async (body, thunkAPI) => {
  try {
    const { data } = await instance.post("/books/reading/finish", body);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});
