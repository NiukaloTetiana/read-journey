import { RecommendedList } from "../RecommendedList/RecommendedList";

export const RecommendedBooks = () => {
  return (
    <div className="w-full rounded-[30px] bg-[#1f1f1f] px-5 py-10 md:px-10 lg:pb-[28px]">
      <h2 className="title mb-[34px] md:mb-[28px]">Recommended</h2>
      <RecommendedList />
    </div>
  );
};
