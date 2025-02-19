import { Link, useLocation } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { FiltersForm } from "../FiltersForm/FiltersForm";

export const Dashboard = () => {
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";

  return (
    <div
      className={`lg:pt- flex flex-col gap-5 rounded-[30px] bg-[#1f1f1f] p-5 md:flex-row md:gap-8 md:p-8 lg:flex-col lg:p-5 ${isLibraryPage ? "lg:gap-[78px]" : "lg:gap-5"}`}
    >
      <FiltersForm />

      <div className="w-[295px] rounded-[12px] bg-[#262626] p-5 sm-max:w-[240px] md:w-[313px]">
        <h3 className="text-dashboard mb-5 text-[#f9f9f9] md:mb-10">
          {isLibraryPage ? "Recommended books" : "Start your workout"}
        </h3>

        <div className="mb-5 flex gap-3">
          <div className="number">1</div>
          <p className="description w-[197px] text-[#f9f9f9] sm-max:w-[158px]">
            Create a personal library:{" "}
            <span className="text-[#686868]">
              add the books you intend to read to it.
            </span>
          </p>
        </div>

        <div className="mb-5 flex gap-3">
          <div className="number">2</div>
          <p className="description w-[210px] text-[#f9f9f9] sm-max:w-[157px]">
            Create your first workout:{" "}
            <span className="text-[#686868]">
              define a goal, choose a period, start training.
            </span>
          </p>
        </div>

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
