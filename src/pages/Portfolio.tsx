import talkStackImage from "../assets/images/talkstack.png";
import streetSmartImage from "../assets/images/streetsmart.png";
import moonrigImage from "../assets/images/moonrig.png";
import askyogiImage from "../assets/images/askyogi.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "TalkStack AI",
      image: talkStackImage,
      skills: [
        "Node.js",
        "React",
        "Express",
        "MongoDB",
        "WebSockets",
        "REST APIs",
        "Third-party AI/LLM APIs",
        " Voice Integration APIs",
      ],
      descriptions: [
        "AI automates customer conversations across voice, chat, SMS, and WhatsApp",
        "No-code AI agents can be created and customized in minutes",
        "Handles scheduling, follow-ups, lead qualification, and routine support tasks",
        "Provides conversation history, insights, and performance analytics",
      ],
    },
    {
      id: 2,
      title: "Street Smart",
      image: streetSmartImage,
      skills: ["Node.js", "React", "Express", "MongoDB"],
      descriptions: [
        "Full-stack web application for managing music projects and generating legally binding contracts",
        "Dynamic project creation with support for EPs and albums",
        "Digital contract generation and signing using react-signature-canvas",
        "Automatic contract updates and versioning based on project changes",
      ],
    },
    {
      id: 3,
      title: "Moonrig",
      image: moonrigImage,
      skills: [
        "Node.js",
        "React",
        "Express",
        "MongoDB",
        "WebSockets",
        "REST APIs",
        "Third-party AI/LLM APIs",
        " Voice Integration APIs",
      ],
      descriptions: [
        "Full-stack platform for Web3 project reviews and analyst evaluation",
        "Dynamic project submission form with secure payment gateway integration",
        "Role-based access control for owners, analysts, and admins",
        "Comprehensive admin panel for user and payment management",
        "Detailed project analytics and review tracking for better evaluation decisions",
      ],
    },
    {
      id: 4,
      title: "Askyogi",
      image: askyogiImage,
      skills: ["NestJS", "Kafka", "Redis", "MongoDB"],
      descriptions: [
        "Scalable prediction platform using NestJS and Fastify",
        "Microservices architecture with event-driven communication",
        "High-performance processing: 70,000+ records in under 40 seconds",
        "Real-time updates via WebSockets and Redis-based job queues",
        "Optimized database queries and caching for fast and reliable data handling",
        "Designed for high scalability to handle heavy traffic and growing data loads efficiently",
      ],
    },
  ];
  
  return (
    <div className="bg-[#010A10] text-[#FFFFFF] inline-block">
      <div className="text-[#D6D6D6] text-[14px] flex justify-center inline-block bg-[#06131B] px-[10px] py-[5px] border-[1px] border-[#0C1F2E] rounded-[5px] ">
        Experience
      </div>
      <h1 className="text-[24px] font-bold">My Portfolio</h1>
      <div className="grid grid-cols-1 gap-[15px] mb-[20px]">
        {portfolio.map((project) => (
          <div
            key={project.id}
            className="flex bg-[#06131B] rounded-[10px] p-[15px]"
          >
            <div className="">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover mb-[10px] h-[250px] rounded-[10px]"
              />
            </div>
            <div className="">
              <h2 className="text-[18px] font-semibold mb-[5px] ml-[25px] mb-[15px]">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-[10px] mb-[10px] ml-[20px] ">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[12px] bg-[#0C1F2E] px-[12px] py-[5px] rounded-[10px] justify-center items-center text-[#D6D6D6]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <ul className=" text-[14px] text-[#D6D6D6]">
                {project.descriptions.map((desc, index) => (
                  <li className="text-[#D6D6D6] mb-[5px]" key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
