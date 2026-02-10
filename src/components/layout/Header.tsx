import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `no-underline px-[24px] py-[10px] rounded-[12px] text-[15px] font-medium transition-all duration-300 ${isActive
      ? "bg-[#139BFD] text-white shadow-lg shadow-[#139BFD]/20"
      : "bg-[#05131C] text-[#94A3B8] hover:text-white hover:bg-[#0F2231] border border-[#0F2231]"
    }`;

  return (
    <header className="flex bg-[#05131C] p-2 rounded-[16px] border border-[#0F2231] inline-flex mb-2">
      <NavLink to="/" end className={linkClass}>
        About
      </NavLink>
      <div className="w-2"></div>
      <NavLink to="/resume" end className={linkClass}>
        Resume
      </NavLink>
      <div className="w-2"></div>
      <NavLink to="/portfolio" end className={linkClass}>
        Portfolio
      </NavLink>
      <div className="w-2"></div>
      <NavLink to="/skills" end className={linkClass}>
        Skills
      </NavLink>
      <div className="w-2"></div>
      <NavLink to="/testimonial" end className={linkClass}>
        Testimonial
      </NavLink>
    </header>
  );
};

export default Header;
