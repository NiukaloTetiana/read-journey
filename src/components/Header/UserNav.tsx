import { NavLink } from "react-router-dom";

import { Logo } from "..";

import { navItems } from "../../constants";

interface INavBarProps {
  logoClass?: string;
  linkListClass?: string;
  toggleMenu?: () => void;
}

export const UserNav = ({ toggleMenu }: INavBarProps) => {
  return (
    <div className="flex w-full justify-between">
      <Logo />
      <nav>
        <ul className="hidden w-full flex-col items-center justify-center gap-6 md:flex md:flex-row md:gap-8 lg:gap-10">
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
    </div>
  );
};
