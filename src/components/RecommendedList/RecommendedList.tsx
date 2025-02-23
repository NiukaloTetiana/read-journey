import { useLocation } from "react-router-dom";

import { useModal } from "../../hooks";

import { AddBookModal, Modal, RecommendedItem } from "../../components";

const books = [
  {
    _id: "654fc4d00a563c69b895ef",
    title: "Lovers of Justice",
    author: "Yuri Andrukhovych",
    imageUrl:
      "https://res.cloudinary.com/drfvfno3o/image/upload/v1699726543/books/1.webp",
    totalPages: 304,
    recommend: true,
  },
  {
    _id: "654fc5064f56fe7a8d0e19eb",
    title: "It doesn't hurt",
    author: "Kateryna Babkina",
    imageUrl:
      "https://res.cloudinary.com/drfvfno3o/image/upload/v1699726598/books/2.png",
    totalPages: 72,
    recommend: true,
  },
  {
    _id: "654fe854548f3b992ad6963c",
    title: "There is land beyond Perekop",
    author: "Anastasiia Levkova",
    imageUrl:
      "https://res.cloudinary.com/drfvfno3o/image/upload/v1699735635/books/654f5eedca10dbb094e5c197_There_is_land_beyond_Perekop.webp",
    totalPages: 392,
    recommend: true,
  },
];

export const RecommendedList = () => {
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
