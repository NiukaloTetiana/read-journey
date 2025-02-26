import { useLocation } from "react-router-dom";

interface IDashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: IDashboardProps) => {
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";

  return (
    <div
      className={`flex flex-col gap-5 rounded-[30px] bg-[#1f1f1f] p-5 md:flex-row md:gap-8 md:p-8 lg:flex-col lg:p-5 ${isLibraryPage ? "lg:gap-[78px]" : "lg:gap-5"}`}
    >
      {children}
    </div>
  );
};
