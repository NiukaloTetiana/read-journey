import {
  BurgerMenu,
  Icon,
  Logo,
  LogoutBtn,
  UserBar,
  UserNav,
} from "../../components";
import { useModal } from "../../hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useModal();

  return (
    <header className="pb-[10px] pt-5 md:pb-4 md:pt-8">
      <div className="container">
        <div className="flex w-full items-center justify-between rounded-[15px] bg-[#1f1f1f] px-5 py-[11px] md:p-4">
          <Logo />
          <UserNav navClass="hidden md:flex" />

          <div className="flex items-center gap-[10px] md:gap-4">
            <UserBar />
            <LogoutBtn logoutClass="hidden md:block" />

            <button
              type="button"
              onClick={() => {
                toggleMenu();
              }}
              className="md:hidden"
            >
              <Icon
                id="menu"
                className="fill-none stroke-[#F9F9F9]"
                size={28}
              />
            </button>
          </div>

          <BurgerMenu
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            classBackdrop={`${isMenuOpen ? "scale-1" : "scale-0"}`}
            classMenu={`${isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"}`}
          />
        </div>
      </div>
    </header>
  );
};
