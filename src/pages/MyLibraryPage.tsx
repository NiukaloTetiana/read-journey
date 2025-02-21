import { Dashboard, MyLibraryBooks } from "../components";

const MyLibraryPage = () => {
  return (
    <div className="mb-10 md:mb-8 lg:mb-[27px]">
      <div className="container flex flex-col gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard />
        <MyLibraryBooks />
      </div>
    </div>
  );
};

export default MyLibraryPage;
