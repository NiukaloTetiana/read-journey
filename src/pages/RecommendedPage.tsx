import { Link } from "react-router-dom";

import { createItems } from "../constants";

import { Dashboard, Filters, Icon, RecommendedBooks } from "../components";

const RecommendedPage = () => {
  return (
    <div className="pb-2 md:pb-8 lg:pb-[27px]">
      <div className="container flex flex-col gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard>
          <Filters />

          <div className="w-[295px] rounded-[12px] bg-[#262626] p-5 sm-max:w-[240px] sm-max:px-[15px] md:h-[272px] md:w-[313px]">
            <h3 className="text-dashboard mb-5 text-[#f9f9f9] md:mb-10">
              Start your workout
            </h3>

            <ul className="mb-5 flex flex-col gap-4 md:mb-[26px]">
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

            <Link
              to="/library"
              className="hover-link description group flex items-end justify-between text-[#686868] underline"
            >
              My library
              <Icon
                id="arrow"
                size={24}
                className="fill-none stroke-[#f9f9f9] transition-transform duration-500 group-hover:translate-x-[7px]"
              />
            </Link>
          </div>

          <div className="bg-img hidden lg:flex lg:gap-[14px] lg:rounded-[12px] lg:bg-[#262626] lg:py-[15px] lg:pl-[74px] lg:pr-5">
            <p className="description w-[219px] text-[#686868]">
              "Books are <span className="text-[#f9f9f9]">windows </span>
              to the world, and reading is a journey into the unknown."
            </p>
          </div>
        </Dashboard>
        <RecommendedBooks />
      </div>
    </div>
  );
};

export default RecommendedPage;
