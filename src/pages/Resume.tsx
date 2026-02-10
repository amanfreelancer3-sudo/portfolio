const Resume = () => {
  const experience = [
    {
      id: 1,
      title: "Jr. Web Developer",
      company: "Google",
      startDate: "2022",
      endDate: "2023",
      description:
        "Built responsive websites, integrated databases, and supported backend features. Learned clean code, debugging, and performance optimization while collaborating with senior developers.",
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "Facebook",
      startDate: "2023",
      endDate: "2026",
      description:
        "Led end-to-end development of scalable web apps, designed APIs and microservices, and optimized performance for high-traffic platforms. Worked closely with product and design teams on user-focused solutions.",
    },
  ];

  const industries = [
    {
      id: 1,
      title: "",
      description: "SaaS & Tech Startups",
    },
    {
      id: 2,
      title: "",
      description: "Data, Analytics & AI Platforms",
    },
    {
      id: 3,
      title: "",
      description: "Web3 & Blockchain",
    },
    {
      id: 4,
      title: "",
      description: "Media & Entertainment Tech",
    },
  ];

  const expertise = [
    {
      id: 1,
      title: "",
      description: "Business Automation & Enterprise Tools",
    },
    {
      id: 2,
      title: "",
      description: "FinTech & Payment Platforms",
    },
    {
      id: 3,
      title: "",
      description: "Real-Time & Communication Systems",
    },
    {
      id: 4,
      title: "",
      description: "High-Performance Backend Platforms",
    },
  ];

  return (
    <div className="text-[#FFFFFF]">
      <div className="text-[#D6D6D6] text-[14px] flex justify-center inline-block bg-[#06131B] px-[10px] py-[5px] border-[1px] border-[#0C1F2E] rounded-[5px] ">
        Experience
      </div>
      <h1 className="">My Experience</h1>
      <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="text-[#FFFFFF] border-[1px] border-[#0C1F2E] rounded-[10px] p-[15px] bg-[#06131B] "
          >
            <h3>{exp.title}</h3>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p className="text-[#D6D6D6]">{exp.description}</p>
          </div>
        ))}
      </div>
      <div>Experience</div>
      <h1>Industries I served</h1>

      <div className="grid grid-cols-2 gap-[20px] mb-[20px] text-[#D6D6D6] border-[1px] border-[#0C1F2E] rounded-[10px] p-[15px] bg-[#06131B] mb-[15px]">
        <div>
          {industries.map((industry) => (
            <ul className="list-disc pl-[15px]">
              <li className="">{industry.description}</li>
            </ul>
          ))}
        </div>
        <div>
          {expertise.map((industry) => (
            <ul className="list-disc pl-[15px] ">
              <li className="">{industry.description}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
