import { Dashboard, MyLibraryBooks } from "../components";

const MyLibraryPage = () => {
  return (
    <div className="mb-10 md:mb-8 lg:mb-[27px]">
      <div className="container">
        <Dashboard />
        <MyLibraryBooks />
      </div>
    </div>
  );
};

export default MyLibraryPage;
