import { toast } from "react-toastify";

import { Loader } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logoutUser, selectIsLoadingAuth } from "../../redux";

interface ILogoutProps {
  toggleLogoutModal: () => void;
}

export const LogoutModal = ({ toggleLogoutModal }: ILogoutProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoadingAuth);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();

      toggleLogoutModal();
      toast.warning("In order to use the application you must log in.");
    } catch (error) {
      toast.error("Oops...Something wrong.");
    }
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
