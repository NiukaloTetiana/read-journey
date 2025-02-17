import { Dashboard, RecommendedBooks } from "../components";

const RecommendedPage = () => {
  return (
    <div className="pb-2 md:pb-8 lg:pb-[27px]">
      <div className="container flex flex-col gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard />
        <RecommendedBooks />
      </div>
    </div>
  );
};

export default RecommendedPage;
