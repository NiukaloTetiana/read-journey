import * as yup from "yup";

import { emailRegExp } from "../constants";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 chars")
    .max(32, "Max length must be less than 32 chars"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Min length must be more than 8 chars")
    .max(64, "Max length must be less than 64 chars"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 characters"),
  password: yup.string().required("Password is required"),
});

export const addBookSchema = yup.object({
  title: yup
    .string()
    .required("Book title is required")
    .min(2, "Min length must be more than 2 characters"),
  author: yup
    .string()
    .required("The author is required")
    .max(50, "Max length must be less than 50 characters"),
  totalPages: yup
    .number()
    .typeError("Number of pages must be a number")
    .required("Number of pages is required")
    .min(1, "Pages number must be greater than 0"),
});

export const filtersSchema = yup.object({
  title: yup.string(),
  author: yup.string(),
});

export const AddReadingSchema = yup.object({});
