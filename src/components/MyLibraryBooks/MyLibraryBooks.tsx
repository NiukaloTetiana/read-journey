import { useState } from "react";

import {
  books_mobile_1x,
  books_mobile_2x,
  books_tablet_1x,
  books_tablet_2x,
} from "../../assets";

import { FilterSelect, UserBooksList } from "../../components";

export const MyLibraryBooks = () => {
  const [sortValue, setSortValue] = useState<string>("");
  const [sortLabel, setSortLabel] = useState<string>("All books");

  const books = true;

  const handleSortChange = (label: string, value: string) => {
    setSortLabel(label);
    setSortValue(value);
  };

  console.log(sortValue);
  return (
    <div className="w-full rounded-[30px] bg-[#1f1f1f] px-5 py-10 md:px-10">
      <div className="flex justify-between">
        <h2 className="title mb-[34px] md:mb-[28px]">My library</h2>

        <FilterSelect onSortChange={handleSortChange} sortLabel={sortLabel} />
      </div>

      {books ? (
        <UserBooksList />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-[10px] pb-[60px] pt-[49px] md:gap-5 md:pb-[120px] md:pt-[72px] lg:pb-[192px] lg:pt-[133px]">
          <div className="flex size-[100px] items-center justify-center rounded-full bg-[#262626] md:size-[130px]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${books_tablet_1x} 1x, ${books_tablet_2x} 2x`}
                width={70}
                height={70}
                type="image/webp"
              />
              <img
                srcSet={`${books_mobile_1x} 1x, ${books_mobile_2x} 2x`}
                src={books_mobile_1x}
                alt="Books picture"
                width={50}
                height={50}
                loading="lazy"
              />
            </picture>
          </div>
          <p className="description w-[197px] text-center text-[#f9f9f9] md:w-[280px]">
            To start training, add{" "}
            <span className="text-[#686868]">some of your books</span> or from
            the recommended ones
          </p>
        </div>
      )}
    </div>
  );
};
