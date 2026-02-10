const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Frontend",
      skills: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Backend",
      skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices"],
    },
    {
      id: 3,
      title: "Database & Messaging",
      skills: ["MongoDB", "Redis", "Kafka", "Zookeeper", "BullMQ"],
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "WebSockets", "CI/CD Pipelines"],
    },
    {
      id: 5,
      title: "Tools & Others",
      skills: ["Git", "Postman", "Multithreading", "Authentication"],
    },
  ];

  return (
    <div className="bg-[#010A10] text-[#FFFFFF] inline-block">
      <div className="text-[#D6D6D6] text-[14px] flex justify-center inline-block bg-[#06131B] px-[8px] py-[3px] border-[1px] border-[#0C1F2E] rounded-[5px]">
        Skillset
      </div>
      <h1 className="text-[24px] font-bold">My Skills</h1>
      <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="mb-[20px] inline-block bg-[#06131B] rounded-[10px] p-[15px]"
          >
            <h2 className="text-[18px] font-semibold mb-[25px]">
              {skill.title}
            </h2>
            <p
              className="h-[1px]
  bg-gradient-to-r
  from-[#139BFD]
  via-white/60
  to-[#139BFD]"
            ></p>
            <div className="flex flex-wrap gap-[10px]">
              {skill.skills.map((tech, index) => (
                <span
                  key={index}
                  className="text-[12px] bg-[#0C1F2E] px-[12px] py-[5px] rounded-[10px] justify-center items-center text-[#D6D6D6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
