export const MyBook = () => {
  const book = {
    _id: "654fc4d00a563c69b895ef",
    title: "Lovers of Justice",
    author: "Yuri Andrukhovych",
    imageUrl:
      "https://res.cloudinary.com/drfvfno3o/image/upload/v1699726543/books/1.webp",
    totalPages: 304,
    recommend: true,
  };

  const reading = true;

  return (
    <div className="w-full rounded-[30px] bg-[#1f1f1f] px-5 py-10 md:px-10 md:pb-[25px] lg:pb-[53px]">
      <h2 className="title mb-10 md:mb-8 lg:mb-[44px]">My reading</h2>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-[10px] flex h-[208px] w-[137px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] md:mb-[25px] md:h-[256px] md:w-[169px]">
          <img
            src={book.imageUrl}
            alt={book.title}
            width={137}
            height={208}
            className="h-full w-full object-cover"
          />
        </div>

        <h4 className="description mb-[5px] w-[137px] text-center font-bold text-[#f9f9f9] md:mb-1 md:w-[318px] md:text-[20px] md:leading-[1]">
          {book.title}
        </h4>
        <p className="mb-5 w-[137px] text-center text-[10px] leading-[1.2] tracking-[-0.02em] text-[#686868] md:mb-4 md:text-[14px] md:leading-[1.29] lg:mb-[25px]">
          {book.author}
        </p>

        <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#f9f9f9] bg-transparent md:size-[50px]">
          <div
            className={`bg-[#e90516] ${!reading ? "size-[30px] rounded-full md:size-10" : "size-[15px] rounded-[3px] md:size-5"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};
