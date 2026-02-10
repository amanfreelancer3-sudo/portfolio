import ProfilePhoto from "../../assets/images/profile_picture.png";

const Navbar = () => {
  return (
    <aside className="w-[300px] bg-[#05131C] flex flex-col items-center py-10 px-6 rounded-[24px] h-full border border-[#0F2231] shadow-xl relative overflow-hidden">
      {/* Profile Photo */}
      <div className="relative mb-6">
        <div className="w-[160px] h-[160px] rounded-[20px] overflow-hidden border-4 border-[#0F2231]">
          <img
            src={ProfilePhoto}
            alt="Aman Singh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="font-bold text-white text-[24px] mt-2 mb-1 tracking-wide">
        Aman Singh
      </h2>

      {/* Title */}
      <h3 className="font-medium text-[#139BFD] text-[15px] mb-4 bg-[#139BFD]/10 px-4 py-1.5 rounded-full">
        Full Stack Developer
      </h3>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {["MERN", "NestJs", "Microservices"].map((tech) => (
          <span key={tech} className="text-[#94A3B8] text-[12px] bg-[#0F2231] px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#0F2231] mb-auto"></div>

      {/* Download CV Button */}
      {/* <a
        href="#"
        className="w-full mt-8 flex justify-center items-center gap-3 bg-transparent border border-[#334155] text-white py-3.5 rounded-[12px] text-[14px] font-medium hover:bg-[#139BFD] hover:border-[#139BFD] transition-all duration-300 group"
      >
        Download CV
        <span className="text-[16px] group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a> */}
    </aside>
  );
};

export default Navbar;
