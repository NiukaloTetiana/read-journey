import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Icon } from "../../components";

export const Logo = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || "/register";

  return (
    <Link
      to="/"
      className="flex items-center gap-[4px] text-[18px] font-bold uppercase leading-[1] tracking-[0.02em] text-[#f9f9f9]"
    >
      <Icon id="logo" className="h-[17px] w-[42px] fill-[#F9F9F9]" />
      <p className={`hidden ${isAuthPage ? "md:block" : "lg:block"}`}>
        Read Journey
      </p>
    </Link>
  );
};
