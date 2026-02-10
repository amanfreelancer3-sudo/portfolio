import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#010A10] text-white font-inter">
      {/* Left Navbar */}
      <Navbar />

      {/* Right content */}
      <div className="flex flex-col flex-1">
        {/* Top Header */}
        <Header />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
