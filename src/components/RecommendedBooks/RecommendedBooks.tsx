import { RecommendedList, Pagination } from "../../components";

export const RecommendedBooks = () => {
  return (
    <div className="w-full rounded-[30px] bg-[#1f1f1f] px-5 py-10 md:px-10 lg:pb-[28px]">
      <div className="mb-[22px] flex justify-between md:mb-5">
        <h2 className="title">Recommended</h2>
        <Pagination />
      </div>

      <RecommendedList />
    </div>
  );
};
