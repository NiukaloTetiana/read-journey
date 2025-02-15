import { useRef } from "react";

import { Icon, LogoutBtn, UserNav } from "../../components";

import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";

interface IBurgerMenuProps {
  classBackdrop: string;
  classMenu: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({
  toggleMenu,
  classBackdrop,
  classMenu,
  isOpen,
}: IBurgerMenuProps) => {
  const backdropRef = useRef(null);

  useEscapeClose(isOpen, toggleMenu);

  return (
    <div
      onClick={(event) => handleClickOnBackdrop(toggleMenu, event)}
      ref={backdropRef}
      className={`${classBackdrop} z-[90]] fixed left-0 top-0 h-full w-full bg-[#14141499] lg:hidden`}
    >
      <div
        className={`${classMenu} relative ml-auto flex h-full w-[200px] flex-col items-center justify-between bg-[#262626] px-[20px] pb-10 pt-[280px] transition duration-500`}
      >
        <button
          type="button"
          className="absolute right-10 top-[34px] flex items-center justify-center outline-none"
          onClick={toggleMenu}
        >
          <Icon
            id="close"
            className="fill-none stroke-[#F9F9F9] transition duration-500 focus-visible:stroke-[#262626] md:size-[36px]"
            size={28}
          />
        </button>
        <UserNav navClass="flex md:hidden" />
        <LogoutBtn />
        {/* <UserBar toggleMenu={toggleMenu} /> */}
      </div>
    </div>
  );
};
