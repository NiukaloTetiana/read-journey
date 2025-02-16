import { Dashboard } from "../components";

const RecommendedPage = () => {
  return (
    <div className="pb-2 pt-[10px] md:pb-8 md:pt-4 lg:pb-[27px]">
      <div className="flex=-col container flex gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard />
      </div>
    </div>
  );
};

export default RecommendedPage;
