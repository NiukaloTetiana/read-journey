import { LogoutModal, Modal } from "../../components";

import { useModal } from "../../hooks";

interface ILogoutBtnProps {
  logoutClass?: string;
  toggleMenu?: () => void;
}

export const LogoutBtn = ({ logoutClass, toggleMenu }: ILogoutBtnProps) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div className={logoutClass}>
      <button
        onClick={() => {
          toggleMenu && toggleMenu();
          toggleModal();
        }}
        type="button"
        className="button hover-logout h-[38px] w-[91px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:w-[114px] md:p-[12px]"
      >
        Log out
      </button>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="p-[60px] md:p-[50px]"
        >
          <LogoutModal toggleLogoutModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
