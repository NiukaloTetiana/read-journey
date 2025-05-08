import { useEffect } from "react";

import { Icon } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getBooksRecommended,
  selectPage,
  selectTotalPages,
  setPage,
} from "../../redux";

export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);

  const getLimit = () => {
    const width = window.innerWidth;
    if (width < 767.98) return 2;
    if (width < 1439.98) return 8;
    return 10;
  };

  useEffect(() => {
    const limit = getLimit();
    dispatch(getBooksRecommended({ page, limit }));
  }, [dispatch, page]);

  const handlePrev = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    if (page < totalPages) dispatch(setPage(page + 1));
  };

  if (!totalPages || totalPages <= 1) return null;

  const iconDisabled = "opacity-20";

  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={handlePrev} className="pagination group">
        <Icon
          id="chevron-left"
          size={16}
          className={`pagination-icon rotate-180 ${
            page === 1
              ? iconDisabled
              : "group-hover:stroke-[#4F92F7] group-focus-visible:stroke-[#4F92F7]"
          }`}
        />
      </button>

      <button onClick={handleNext} className="pagination group">
        <Icon
          id="chevron-left"
          size={16}
          className={`pagination-icon ${
            page === totalPages
              ? iconDisabled
              : "group-hover:stroke-[#4F92F7] group-focus-visible:stroke-[#4F92F7]"
          }`}
        />
      </button>
    </div>
  );
};
