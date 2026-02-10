const Resume = () => {
  const experience = [
    {
      id: 1,
      title: "Jr. Web Developer",
      dates: "2022–2023",
      description:
        "Built Responsive Websites, Integrated Databases, And Supported Backend Features. Learned Clean Code, Debugging, And Performance Optimization While Collaborating With Senior Developers.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      dates: "2023–2026",
      description:
        "Led End-To-End Development Of Scalable Web Apps, Designed APIs And Microservices, And Optimized Performance For High-Traffic Platforms. Worked Closely With Product And Design Teams On User-Focused Solutions.",
    },
  ];

  const industries = [
    "SaaS & Tech Startups",
    "Data, Analytics & AI Platforms",
    "Web3 & Blockchain",
    "Media & Entertainment Tech",
  ];

  const expertise = [
    "Business Automation & Enterprise Tools",
    "FinTech & Payment Platforms",
    "Real-Time & Communication Systems",
    "High-Performance Backend Platforms",
  ];

  return (
    <div className="font-poppins">
      {/* Badge */}
      <div className="inline-block mb-4">
        <span className="text-[#94A3B8] text-[13px] font-medium tracking-wide uppercase">
          Resume
        </span>
        <div className="h-[2px] w-12 bg-[#139BFD] mt-1"></div>
      </div>

      <h1 className="text-[36px] font-bold text-white mb-8">My Experience</h1>

      {/* Experience Cards */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#05131C] border border-[#0F2231] rounded-[20px] p-8 hover:border-[#139BFD]/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white text-[20px] font-bold">{exp.title}</h3>
              <span className="text-[#139BFD] bg-[#139BFD]/10 px-3 py-1 rounded-full text-[13px] font-medium">
                {exp.dates}
              </span>
            </div>
            <p className="text-[#94A3B8] text-[14px] leading-7">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* Industries Badge */}
      <div className="inline-block mb-4">
        <span className="text-[#94A3B8] text-[13px] font-medium tracking-wide uppercase">
          Industries
        </span>
        <div className="h-[2px] w-12 bg-[#139BFD] mt-1"></div>
      </div>

      <h1 className="text-[30px] font-bold text-white mb-8">Industries I Served</h1>

      {/* Industries Grid */}
      <div className="grid grid-cols-2 gap-8 bg-[#05131C] border border-[#0F2231] rounded-[24px] p-8 mb-8">
        <div>
          <h4 className="text-white font-semibold mb-4 text-[18px]">Domains</h4>
          <ul className="space-y-3">
            {industries.map((industry, index) => (
              <li key={index} className="text-[#94A3B8] text-[15px] flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#139BFD] rounded-full"></span>
                {industry}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-[18px]">Expertise</h4>
          <ul className="space-y-3">
            {expertise.map((item, index) => (
              <li key={index} className="text-[#94A3B8] text-[15px] flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#139BFD] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
