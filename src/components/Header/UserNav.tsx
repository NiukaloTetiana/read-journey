import { NavLink } from "react-router-dom";

import { navItems } from "../../constants";

interface IUserNavProps {
  toggleMenu?: () => void;
  navClass?: string;
}

export const UserNav = ({ navClass, toggleMenu }: IUserNavProps) => {
  return (
    <nav>
      <ul
        className={`flex-col justify-center gap-5 text-left md:flex-row md:gap-8 lg:gap-10 ${navClass}`}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={toggleMenu}
              className="link text-[14px] leading-[1.29] tracking-[-0.02em] text-[#686868] transition duration-500 md:text-[16px] md:leading-[1.13]"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
