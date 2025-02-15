import { useState } from "react";
import { toast } from "react-toastify";

import { Loader } from "..";

interface ILogoutProps {
  toggleLogoutModal: () => void;
}

export const LogoutModal = ({ toggleLogoutModal }: ILogoutProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    Promise.resolve()
      .then(() => {
        toggleLogoutModal();
        toast.warning("In order to use the application you must log in.");
      })
      .catch(() => {
        toast.error("Oops...Something wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <p className="md:text-5 mb-[40px] text-center text-[18px] leading-[1.29] tracking-[-0.02em] text-[#f9f9f9] sm-max:mb-[25px]">
        Are you sure you want to log out?
      </p>
      <div className="flex justify-center gap-[25px]">
        <button
          onClick={handleLogout}
          type="button"
          className="button hover-logout button-logout border-[#f9f9f933] bg-transparent text-[#f9f9f9]"
        >
          Log out
        </button>
        <button
          className="hover-button button button-logout border-transparent bg-[#f9f9f9] text-[#1f1f1f]"
          onClick={toggleLogoutModal}
        >
          Cancel
        </button>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
