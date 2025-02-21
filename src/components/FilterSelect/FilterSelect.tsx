import { useState, useEffect, useRef, RefObject } from "react";

import { Icon } from "../../components";
import { filterOptions } from "../../constants";

interface IFilterSelectProps {
  onSortChange: (label: string, value: string) => void;
  sortLabel: string;
}

export const FilterSelect = ({
  onSortChange,
  sortLabel,
}: IFilterSelectProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const sortRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleSortClick = (label: string, value: string) => {
    onSortChange(label, value);
    setIsListVisible(false);
  };

  return (
    <div className="relative">
      <div
        ref={sortRef}
        onClick={handleListClick}
        className="description group flex h-[46px] w-[153px] cursor-pointer justify-between rounded-[12px] border border-[#3e3e3e] bg-transparent p-[14px] text-[#f9f9f9] transition duration-500 sm-max:w-[125px]"
      >
        {sortLabel}
        <Icon
          id="chevron-down"
          size={16}
          className={`fill-none stroke-[#f9f9f9] transition duration-500 group-hover:stroke-[#4f92f7] ${
            !isListVisible ? "rotate-180" : ""
          }`}
        />
      </div>
      {isListVisible && (
        <ul className="description absolute left-0 top-[54px] z-[100] w-[153px] space-y-[7px] rounded-[12px] bg-[#262626] px-[18px] py-[16px] text-[#686868] sm-max:w-[125px]">
          {filterOptions.map(({ label, value }) => (
            <li
              key={value}
              onClick={() => handleSortClick(label, value)}
              className={`cursor-pointer transition duration-500 hover:text-[#4f92f7] ${
                label === sortLabel ? "text-[#f9f9f9]" : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
