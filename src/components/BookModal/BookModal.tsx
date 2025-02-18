interface IBookModalProps {
  book: IBook;
  openAddBookModal: () => void;
}
import { IBook } from "../../types";

export const BookModal = ({ book, openAddBookModal }: IBookModalProps) => {
  const { imageUrl, title, author, totalPages } = book;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex h-[213px] w-[140px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] md:h-[233px] md:w-[153px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h4 className="modal-title mb-[2px]">{title}</h4>
      </div>
      <p className="mb-1 text-[12px] leading-[1.17] tracking-[-0.02em] text-[#686868] md:text-[14px] md:leading-[1.26]">
        {author}
      </p>
      <p className="mb-5 text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:mb-8">
        {totalPages} pages
      </p>

      <button
        onClick={openAddBookModal}
        type="button"
        className="button hover-logout h-[42px] w-[141px] border-[#f9f9f933] bg-transparent p-[12px] text-[#f9f9f9] md:h-[46px] md:w-[162px] md:p-[14px]"
      >
        Add to library
      </button>
    </div>
  );
};
