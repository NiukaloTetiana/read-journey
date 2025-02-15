import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../../components";

export const Layout = () => {
  const location = useLocation();
  const isLoggedIn =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!isLoggedIn && <Header />}

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
