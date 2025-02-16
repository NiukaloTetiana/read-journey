import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

interface IFormData {
  title: string;
  author: string;
}

export const Dashboard = () => {
  const { register, reset, handleSubmit } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async () => {
    console.log("hello");
    reset();
  };
  return (
    <div className="flex flex-col gap-5 rounded-[30px] bg-[#1f1f1f] p-5 md:flex-row md:gap-8 md:p-8 lg:flex-col lg:gap-5 lg:p-5 lg:pt-10">
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
        <div className="relative mb-5">
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
        <button
          type="submit"
          className="button hover-logout h-[38px] w-[98px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:w-[122px] md:p-[12px]"
        >
          To apply
        </button>
      </form>

      <div className="w-[295px] rounded-[12px] bg-[#262626] p-5 sm-max:w-[240px] md:w-[313px]">
        <h3 className="text-dashboard mb-5 text-[#f9f9f9] md:mb-10">
          Start your workout
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
    </div>
  );
};
