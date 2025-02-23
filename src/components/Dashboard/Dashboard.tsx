import { Link, useLocation } from "react-router-dom";

import { BookForm, Icon, RecommendedList } from "../../components";
import { createItems } from "../../constants";

export const Dashboard = () => {
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";

  return (
    <div
      className={`lg:pt- flex flex-col gap-5 rounded-[30px] bg-[#1f1f1f] p-5 md:flex-row md:gap-8 md:p-8 lg:flex-col lg:p-5 ${isLibraryPage ? "lg:gap-[78px]" : "lg:gap-5"}`}
    >
      <BookForm />

      <div className="w-[295px] rounded-[12px] bg-[#262626] p-5 sm-max:w-[240px] sm-max:px-[15px] md:w-[313px]">
        <h3
          className={`text-dashboard text-[#f9f9f9] ${
            !isLibraryPage ? "mb-5 md:mb-10" : "mb-[14px] md:mb-5"
          }`}
        >
          {isLibraryPage ? "Recommended books" : "Start your workout"}
        </h3>

        {!isLibraryPage ? (
          <ul className="mb-5 flex flex-col gap-5 md:mb-[26px]">
            {createItems.map((item, index) => (
              <li key={index} className="flex gap-[14px] md:gap-[10px]">
                <div className="number">{item.number}</div>
                <p className={`description text-[#f9f9f9] ${item.className}`}>
                  {item.description}{" "}
                  <span className="text-[#686868]">{item.details}</span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <RecommendedList />
        )}

        <Link
          to={!isLibraryPage ? "/library" : "/recommended"}
          className="hover-link description group flex items-end justify-between text-[#686868] underline"
        >
          {!isLibraryPage ? "My library" : "Home"}
          <Icon
            id="arrow"
            size={24}
            className="fill-none stroke-[#f9f9f9] transition-transform duration-500 group-hover:translate-x-[7px]"
          />
        </Link>
      </div>

      {!isLibraryPage && (
        <div className="bg-img hidden lg:flex lg:gap-[14px] lg:rounded-[12px] lg:bg-[#262626] lg:py-[15px] lg:pl-[74px] lg:pr-5">
          <p className="description w-[219px] text-[#686868]">
            "Books are <span className="text-[#f9f9f9]">windows </span>
            to the world, and reading is a journey into the unknown."
          </p>
        </div>
      )}
    </div>
  );
};
