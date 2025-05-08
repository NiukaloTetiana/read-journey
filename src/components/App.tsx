import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout, Loader } from "../components";

import { useAppDispatch, useAppSelector } from "../hooks";
import { refreshUser, selectIsRefreshing } from "../redux";
import { PrivateRoute, PublicRoute } from "../routes";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RecommendedPage = lazy(() => import("../pages/RecommendedPage"));
const MyLibraryPage = lazy(() => import("../pages/MyLibraryPage"));
const ReadingPage = lazy(() => import("../pages/ReadingPage"));

export const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/recommended" replace />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/recommended"
          element={
            <PrivateRoute>
              <RecommendedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute>
              <MyLibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reading"
          element={
            <PrivateRoute>
              <ReadingPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
};
