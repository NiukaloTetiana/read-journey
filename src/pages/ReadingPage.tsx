import { AddReading, Dashboard } from "../components";

const ReadingPage = () => {
  return (
    <div className="mb-10 md:mb-8 lg:mb-[27px]">
      <div className="container flex flex-col gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard />
        <AddReading />
      </div>
    </div>
  );
};

export default ReadingPage;
