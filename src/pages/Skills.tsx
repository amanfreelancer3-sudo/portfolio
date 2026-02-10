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
    <div className="font-poppins">
      {/* Badge */}
      <div className="inline-block mb-4">
        <span className="text-[#94A3B8] text-[13px] font-medium tracking-wide uppercase">
          Skillset
        </span>
        <div className="h-[2px] w-12 bg-[#139BFD] mt-1"></div>
      </div>

      <h1 className="text-[36px] font-bold text-white mb-8">My Skills</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-6 pb-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-[#05131C] rounded-[20px] p-8 border border-[#0F2231] hover:border-[#139BFD]/30 transition-all duration-300"
          >
            <h2 className="text-white text-[20px] font-bold mb-6">
              {skill.title}
            </h2>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {skill.skills.map((tech, index) => (
                <span
                  key={index}
                  className="text-[13px] bg-[#0F2231] text-[#94A3B8] border border-[#1E293B] px-4 py-2 rounded-lg hover:text-white hover:border-[#139BFD] transition-colors duration-300 cursor-default"
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
