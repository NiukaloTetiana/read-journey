import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// import { Layout } from "../components";

// import { PrivateRoute, PublicRoute } from "../routes";
// import { useAppDispatch } from "../hooks";

// const HomePage = lazy(() => import("../pages/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<HomePage />} /> */}
      <Route
        path="/register"
        element={
          // <PublicRoute>
          <RegisterPage />
          // </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          // <PublicRoute>
          <LoginPage />
          // </PublicRoute>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      {/* </Route> */}
    </Routes>
  );
};
