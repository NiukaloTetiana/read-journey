import { Link } from "react-router-dom";

import {
  AddBook,
  Dashboard,
  Icon,
  MyLibraryBooks,
  RecommendedList,
} from "../components";

const MyLibraryPage = () => {
  return (
    <div className="mb-10 md:mb-8 lg:mb-[27px]">
      <div className="container flex flex-col gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard>
          <AddBook />
          <div className="w-[295px] rounded-[12px] bg-[#262626] p-5 sm-max:w-[240px] sm-max:px-[15px] md:h-[272px] md:w-[313px]">
            <h3 className="text-dashboard mb-[14px] text-[#f9f9f9] md:mb-5">
              Recommended books
            </h3>

            <RecommendedList />

            <Link
              to="/recommended"
              className="hover-link description group flex items-end justify-between text-[#686868] underline"
            >
              Home
              <Icon
                id="arrow"
                size={24}
                className="fill-none stroke-[#f9f9f9] transition-transform duration-500 group-hover:translate-x-[7px]"
              />
            </Link>
          </div>
        </Dashboard>

        <MyLibraryBooks />
      </div>
    </div>
  );
};

export default MyLibraryPage;
