import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { IBook, IBookOwn } from "../../types";
import {
  addBook,
  addBookFromRecommended,
  deleteBook,
  deleteBookReading,
  finishBookReading,
  getBooksRecommended,
  startBookReading,
} from "./booksOperations";

export interface IBooksSlice {
  booksRecommended: IBook[];
  booksOwn: IBookOwn[];
  oneBook: IBookOwn | null;
  page: number;
  totalPages: number;
  isLoading: boolean;
}

const initialState: IBooksSlice = {
  booksRecommended: [],
  booksOwn: [],
  oneBook: null,
  page: 1,
  totalPages: 0,
  isLoading: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksRecommended.fulfilled, (state, action) => {
        state.booksRecommended = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.booksOwn.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addBookFromRecommended.fulfilled, (state, action) => {
        state.booksOwn.push(action.payload);
        state.isLoading = false;
      })
      .addCase(startBookReading.fulfilled, (state, action) => {
        state.booksOwn = state.booksOwn.map((book) =>
          book._id === action.payload._id ? action.payload : book
        );
        state.isLoading = false;
      })
      .addCase(finishBookReading.fulfilled, (state, action) => {
        state.booksOwn = state.booksOwn.map((book) =>
          book._id === action.payload._id ? action.payload : book
        );
        state.isLoading = false;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBookReading.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getBooksRecommended.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getBooksRecommended.rejected), (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectBooksRecommended: (state) => state.booksRecommended,
    selectBooksOwn: (state) => state.booksOwn,
    selectOneBook: (state) => state.oneBook,
    selectPage: (state) => state.page,
    selectTotalPages: (state) => state.totalPages,
    selectIsLoadingBooks: (state) => state.isLoading,
  },
});

export const booksReducer = booksSlice.reducer;
export const {
  selectBooksRecommended,
  selectBooksOwn,
  selectOneBook,
  selectPage,
  selectTotalPages,
  selectIsLoadingBooks,
} = booksSlice.selectors;
export const { setPage } = booksSlice.actions;
