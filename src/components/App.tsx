import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RecommendedPage = lazy(() => import("../pages/RecommendedPage"));
const MyLibraryPage = lazy(() => import("../pages/MyLibraryPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recommended" element={<RecommendedPage />} />
        <Route path="/library" element={<MyLibraryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
