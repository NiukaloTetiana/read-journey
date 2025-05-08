import { useLocation } from "react-router-dom";

interface IDashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: IDashboardProps) => {
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";
  const isReadingPage = location.pathname === "/reading";

  const gapClasses = isReadingPage
    ? "gap-10"
    : isLibraryPage
      ? "gap-5 md:gap-8 lg:gap-[78px]"
      : "gap-5 md:gap-8 lg:gap-5";

  return (
    <div
      className={`flex flex-col rounded-[30px] bg-[#1f1f1f] p-5 md:flex-row md:p-8 lg:flex-col lg:p-5 ${gapClasses}`}
    >
      {children}
    </div>
  );
};
