import { useLocation } from "react-router-dom";

import { useAppSelector, useModal } from "../../hooks";

import { AddBookModal, Modal, RecommendedItem } from "../../components";
import { selectBooksRecommended } from "../../redux";

export const RecommendedList = () => {
  const books = useAppSelector(selectBooksRecommended);
  const [isAddBookModalOpen, toggleAddBookModal] = useModal();
  const location = useLocation();
  const isHomePage = location.pathname === "/recommended";

  return (
    <ul
      className={`flex ${isHomePage ? "flex-wrap gap-[21px] sm-max:gap-5 md:gap-x-[25px] md:gap-y-[27px] lg:gap-x-5" : "gap-5 sm-max:gap-2"}`}
    >
      {books.map((book) => (
        <RecommendedItem
          key={book._id}
          book={book}
          openAddBookModal={toggleAddBookModal}
        />
      ))}
      {isAddBookModalOpen && (
        <Modal
          isOpen={isAddBookModalOpen}
          toggleModal={toggleAddBookModal}
          className="img-modal px-[46px] pb-[60px] pt-[130px] md:p-[50px] md:pt-[152px]"
        >
          <AddBookModal />
        </Modal>
      )}
    </ul>
  );
};
