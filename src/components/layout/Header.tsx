import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-[#06131B] h-[65px] mt-[60px] text-[#D6D6D6] items-center gap-[15px] pl-[12px] mb-[30px]  border-[1px] border-[#0C1F2E] rounded-[10px]">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `no-underline border-[1px] px-[13px] py-[5px] rounded-[8px] ${isActive ? "border-[#139BFD] text-[#139BFD]" : "border-[#0C1F2E] text-[#D6D6D6]"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/resume"
        end
        className={({ isActive }) =>
          `no-underline border-[1px] px-[13px] py-[5px] rounded-[8px] ${isActive ? "border-[#139BFD] text-[#139BFD]" : "border-[#0C1F2E] text-[#D6D6D6]"}`
        }
      >
        Resume
      </NavLink>

      <NavLink
        to="/portfolio"
        end
        className={({ isActive }) =>
          `no-underline border-[1px] px-[13px] py-[5px] rounded-[8px] ${isActive ? "border-[#139BFD] text-[#139BFD]" : "border-[#0C1F2E] text-[#D6D6D6]"}`
        }
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/skills"
        end
        className={({ isActive }) =>
          `no-underline border-[1px] px-[13px] py-[5px] rounded-[8px] ${isActive ? "border-[#139BFD] text-[#139BFD]" : "border-[#0C1F2E] text-[#D6D6D6]"}`
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="/testimonial"
        end
        className={({ isActive }) =>
          `no-underline border-[1px] px-[13px] py-[5px] rounded-[8px] ${isActive ? "border-[#139BFD] text-[#139BFD]" : "border-[#0C1F2E] text-[#D6D6D6]"}`
        }
      >
        Testimonials
      </NavLink>
    </header>
  );
};

export default Header;
