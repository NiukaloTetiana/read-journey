import { useModal } from "../../hooks";
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

  return (
    <li
      onClick={toggleBookModal}
      className="cursor-pointer transition duration-500 hover:scale-105"
    >
      <div className="mb-2 flex h-[208px] w-[137px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] sm-max:h-[180px] sm-max:w-[110px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h4 className="description mb-[2px] text-[#f9f9f9]">{title}</h4>
      </div>
      <p className="text-[10px] leading-[1.2] tracking-[-0.02em] text-[#686868]">
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
