import { useModal } from "../../hooks";
import { IBook } from "../../types";

import { BookModal, Icon, Modal } from "../../components";

interface IUserBooksItemProps {
  book: IBook;
}

export const UserBooksItem = ({ book }: IUserBooksItemProps) => {
  const { imageUrl, title, author } = book;

  const [isModalOpen, toggleModal] = useModal();

  return (
    <li onClick={toggleModal} className="cursor-pointer">
      <div className="mb-2 flex h-[208px] w-[137px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] sm-max:h-[180px] sm-max:w-[110px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between gap-[14px]">
        <div>
          <h4 className="description mb-[2px] w-[90px] truncate text-[#f9f9f9]">
            {title}
          </h4>
          <p className="w-[90px] truncate text-[10px] leading-[1.2] tracking-[-0.02em] text-[#686868]">
            {author}
          </p>
        </div>

        <button
          type="button"
          className="group flex size-[28px] items-center justify-center rounded-full border border-[#e8505033] bg-[#e850501a] transition duration-500 hover:shadow-md focus-visible:shadow-sm"
        >
          <Icon
            id="trash"
            size={14}
            className="fill-none stroke-[#e85050] transition duration-500 group-hover:scale-125 group-focus-visible:scale-125"
          />
        </button>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          className="px-[98px] py-10 md:px-[174px] md:py-[50px]"
        >
          <BookModal book={book} />
        </Modal>
      )}
    </li>
  );
};
