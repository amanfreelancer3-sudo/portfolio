import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#000810] text-white font-inter overflow-hidden">
      {/* Fixed Left Sidebar */}
      <div className="shrink-0 h-full p-8 hidden lg:block">
        <Navbar />
      </div>

      {/* Main Content Area - takes remaining space */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        {/* Top Navigation */}
        <div className="px-8 pt-8 shrink-0">
          <Header />
        </div>

        {/* Page Content - scrollable */}
        <main className="flex-1 overflow-y-auto px-8 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
