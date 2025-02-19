import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../Icon/Icon";

interface IFormData {
  title: string;
  author: string;
}

export const Dashboard = () => {
  const { register, reset, handleSubmit } = useForm<IFormData>();
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";

  const onSubmit: SubmitHandler<IFormData> = async () => {
    console.log("hello");
    reset();
  };
  return (
    <div
      className={`lg:pt- flex flex-col gap-5 rounded-[30px] bg-[#1f1f1f] p-5 md:flex-row md:gap-8 md:p-8 lg:flex-col lg:p-5 ${isLibraryPage ? "lg:gap-[78px]" : "lg:gap-5"}`}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-2 pl-[14px] text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:text-[14px] md:leading-[1.29]">
          Filters:
        </p>
        <div className="relative mb-2">
          <input
            type="text"
            className="input p-[12px] pl-[77px] md:p-4 md:pl-[86px]"
            {...register("title")}
            id="title"
          />

          <label htmlFor="title" className="label">
            Book title:
          </label>
        </div>
        <div className={`relative ${isLibraryPage ? "mb-2" : "mb-5"}`}>
          <input
            type="text"
            className="input p-[12px] pl-[85px] md:p-4 md:pl-[95px]"
            {...register("author")}
            id="author"
          />
          <label htmlFor="author" className="label">
            The author:
          </label>
        </div>

        {isLibraryPage && (
          <div className="relative mb-5 md:mb-[38px] lg:mb-5">
            <input
              type="text"
              className="input p-[12px] pl-[119px] md:p-4 md:pl-[135px]"
              {...register("author")}
              id="author"
            />
            <label htmlFor="author" className="label">
              Number of pages:
            </label>
          </div>
        )}
        <button
          type="submit"
          className={`button hover-logout h-[38px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:p-[12px] ${isLibraryPage ? "w-[105px] md:w-[131px]" : "w-[98px] md:w-[122px]"}`}
        >
          {isLibraryPage ? "Add book" : "To apply"}
        </button>
      </form>

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
