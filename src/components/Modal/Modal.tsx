import ReactDOM from "react-dom";

import { Icon } from "../../components";

import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";

interface IModalProps {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  toggleModal: () => void;
}

const modalRoot = document.querySelector("#modalRoot")!;

export const Modal = ({
  isOpen,
  className,
  children,
  toggleModal,
}: IModalProps) => {
  useEscapeClose(isOpen, toggleModal);

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-[#14141499]"
      onClick={(e) => handleClickOnBackdrop(toggleModal, e)}
    >
      <div
        className={`relative max-h-[95%] max-w-[345px] rounded-[12px] border border-[#68686833] bg-[#1f1f1f] sm-max:max-w-[300px] md:max-w-[700px] lg:max-w-[1180px] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute right-3 top-3 md:right-4 md:top-4"
        >
          <Icon
            id="close"
            className="fill-none stroke-[#f9f9f9] transition duration-500 hover:stroke-[#4F92F7] focus-visible:stroke-[#4F92F7]"
            size={22}
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
