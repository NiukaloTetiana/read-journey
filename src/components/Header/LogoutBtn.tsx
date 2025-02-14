// import { Modal } from "../../components";

// import { useModal } from "../../hooks";

interface ILogoutBtnProps {
  className?: string;
  toggleMenu?: () => void;
}

export const LogoutBtn = ({ toggleMenu }: ILogoutBtnProps) => {
  // const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <button
        onClick={() => {
          toggleMenu && toggleMenu();
          // toggleModal();
        }}
        type="button"
        className=""
      >
        Log out
      </button>

      {/* {isOpenModal && (
        <Modal
          isOpen={toggleModal}
          toggleModal={toggleModal}
          className="bg-[#fff4df] px-[28px] py-10 md:p-[80px]"
        ></Modal>
      )} */}
    </>
  );
};
