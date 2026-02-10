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
      link: "https://www.talkstack.ai/",
      skills: [
        "Node.js",
        "React",
        "Express",
        "MongoDB",
        "WebSockets",
        "REST APIs",
        "Third-Party AI/LLM APIs",
        "Voice Integration APIs",
      ],
      descriptions: [
        "AI Automates Customer Conversations Across Voice, Chat, SMS, And WhatsApp",
        "No-Code AI Agents Can Be Created And Customized In Minutes",
        "Handles Scheduling, Follow-Ups, Lead Qualification, And Routine Support Tasks",
        "Provides Conversation History, Insights, And Performance Analytics",
      ],
    },
    {
      id: 2,
      title: "Street Smart",
      image: streetSmartImage,
      link: "https://streetsmartcareers.com/",
      skills: ["Node.js", "React", "Express", "MongoDB"],
      descriptions: [
        "Full-Stack Web Application For Managing Music Projects And Generating Legally Binding Contracts",
        "Dynamic Project Creation With Support For EPs And Albums",
        "Digital Contract Generation And Signing Using React-Signature-Canvas",
        "Automatic Contract Updates And Versioning Based On Project Changes",
      ],
    },
    {
      id: 3,
      title: "Moonrig",
      image: moonrigImage,
      link: "https://moonrig.io/",
      skills: ["Node.js", "React", "Express", "MongoDB"],
      descriptions: [
        "Full-Stack Platform For Web3 Project Reviews And Analyst Evaluation",
        "Dynamic Project Submission Form With Secure Payment Gateway Integration",
        "Role-Based Access Control For Owners, Analysts, And Admins",
        "Comprehensive Admin Panel For User And Payment Management",
        "Detailed Project Analytics And Review Tracking For Better Evaluation Decisions",
      ],
    },
    {
      id: 4,
      title: "Askyogi",
      image: askyogiImage,
      link: "https://www.askyogi.live/",
      skills: ["NestJS", "Kafka", "Redis", "MongoDB"],
      descriptions: [
        "Scalable Prediction Platform Using NestJS And Fastify",
        "Microservices Architecture With Event-Driven Communication",
        "High-Performance Processing: 70,000+ Records In Under 40 Seconds",
        "Real-Time Updates Via WebSockets And Redis-Based Job Queues",
        "Optimized Database Queries And Caching For Fast And Reliable Data Handling",
        "Designed For High Scalability To Handle Heavy Traffic And Growing Data Loads Efficiently",
      ],
    },
  ];

  return (
    <div className="font-poppins">
      {/* Badge */}
      <div className="inline-block mb-4">
        <span className="text-[#94A3B8] text-[13px] font-medium tracking-wide uppercase">
          Portfolio
        </span>
        <div className="h-[2px] w-12 bg-[#139BFD] mt-1"></div>
      </div>

      <h1 className="text-[36px] font-bold text-white mb-8">My Portfolio</h1>

      {/* Portfolio Items */}
      <div className="flex flex-col gap-8 pb-8">
        {portfolio.map((project) => (
          <div
            key={project.id}
            className="flex bg-[#05131C] rounded-[24px] overflow-hidden border border-[#0F2231] hover:border-[#139BFD]/50 transition-all duration-300 group relative"
          >
            {/* Image - Fixed Width */}
            <div className="w-[360px] shrink-0 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay link for image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Visit ${project.title}`}
              ></a>
            </div>

            {/* Content */}
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-white text-[22px] font-bold">
                  {project.title}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#139BFD] text-[14px] font-medium hover:underline flex items-center gap-1"
                >
                  Visit Site ↗
                </a>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[12px] bg-[#0F2231] text-[#94A3B8] px-3 py-1.5 rounded-lg border border-[#1E293B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Descriptions */}
              <ul className="text-[14px] text-[#94A3B8] space-y-2 list-disc pl-5 marker:text-[#139BFD]">
                {project.descriptions.map((desc, index) => (
                  <li key={index} className="leading-relaxed">
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
