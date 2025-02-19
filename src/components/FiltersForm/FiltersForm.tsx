import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface IFormData {
  title: string;
  author: string;
  pages: number;
}

export const FiltersForm = () => {
  const { register, reset, handleSubmit } = useForm<IFormData>();
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(data);
    reset();
  };
  return (
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
            {...register("pages")}
            id="pages"
          />
          <label htmlFor="pages" className="label">
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
  );
};
