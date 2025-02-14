import { Link } from "react-router-dom";

import { LogoutBtn } from "../../components";

export const UserBar = () => {
  return (
    <div className="flex items-center justify-center lg:gap-[8px]">
      <LogoutBtn className="hidden lg:block" />

      <div className="flex items-center justify-center gap-[8px]">
        <Link to="/" className=""></Link>
      </div>
    </div>
  );
};
