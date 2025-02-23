import { useModal } from "../../hooks";
import { useLocation } from "react-router-dom";

import { IBook } from "../../types";

import { BookModal, Modal } from "../../components";

interface IRecommendedItemProps {
  book: IBook;
  openAddBookModal: () => void;
}

export const RecommendedItem = ({
  book,
  openAddBookModal,
}: IRecommendedItemProps) => {
  const { imageUrl, title, author } = book;

  const [isBookModalOpen, toggleBookModal] = useModal();
  const location = useLocation();
  const isHomePage = location.pathname === "/recommended";

  return (
    <li
      onClick={isHomePage ? toggleBookModal : undefined}
      className={
        isHomePage
          ? "cursor-pointer transition duration-500 hover:scale-105"
          : ""
      }
    >
      <div
        className={`${isHomePage ? "h-[208px] w-[137px] sm-max:h-[180px] sm-max:w-[110px]" : "h-[107px] w-[71px] sm-max:h-[100px] sm-max:w-[65px]"} mb-2 flex shrink-0 items-center justify-center overflow-hidden rounded-[8px]`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <h4
        className={`mb-[2px] truncate font-bold text-[#e3e3e3] ${isHomePage ? "description w-[137px] sm-max:w-[110px]" : "w-[70px] text-[10px] leading-[1.2] tracking-[-0.02em] sm-max:w-[65px]"}`}
      >
        {title}
      </h4>
      <p
        className={`mb-[17px] truncate text-[10px] leading-[1.2] tracking-[-0.02em] text-[#686868] md:mb-5 ${isHomePage ? "w-[137px] sm-max:w-[110px]" : "w-[70px] sm-max:w-[65px]"}`}
      >
        {author}
      </p>

      {isBookModalOpen && (
        <Modal
          isOpen={isBookModalOpen}
          toggleModal={toggleBookModal}
          className="px-[98px] py-10 md:px-[174px] md:py-[50px]"
        >
          <BookModal book={book} openAddBookModal={openAddBookModal} />
        </Modal>
      )}
    </li>
  );
};
