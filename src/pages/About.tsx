import fullStackIcon from "../assets/images/fullstack_icon.png";
import microservicesIcon from "../assets/images/microservice_icon.png";
import realtimeIcon from "../assets/images/realtime_icon.png";
import apiIcon from "../assets/images/api_icon.png";
import cloudIcon from "../assets/images/cloud_icon.png";
import adminIcon from "../assets/images/admin_icon.png";

const About = () => {
  const data = [
    {
      icon: fullStackIcon,
      title: "Full-Stack Web App Development",
      description:
        "End-to-end development of modern web applications using the MERN stack and NestJS. From intuitive frontends to high-performance backends, Aman builds scalable platforms that are fast, secure, and built for real users.",
    },
    {
      icon: microservicesIcon,
      title: "Microservices & System Architecture",
      description:
        "Design and development of event-driven, distributed systems using NestJS and Kafka. Ideal for platforms that need to scale, handle heavy traffic, and stay reliable under peak loads.",
    },
    {
      icon: realtimeIcon,
      title: "Real-Time Application Features",
      description:
        "Implementation of real-time updates, notifications, and live data streams using WebSockets and Redis. Perfect for dashboards, tracking systems, messaging, and live analytics.",
    },
    {
      icon: apiIcon,
      title: "API Development & Integrations",
      description:
        "Building robust REST APIs and integrating third-party services like payment gateways, external platforms, and automation tools. Clean architecture ensures secure and maintainable integrations.",
    },
    {
      icon: cloudIcon,
      title: "Cloud & DevOps Support",
      description:
        "Deployment and infrastructure setup using cloud services and Docker. Building systems that are easy to scale, monitor, and maintain in production environments.",
    },
    {
      icon: adminIcon,
      title: "Admin Panels & Business Tools",
      description:
        "Custom admin dashboards, role-based panels, analytics systems, and internal tools that help businesses manage users, payments, data, and operations efficiently.",
    },
  ];

  return (
    <div className="bg-[#010A10] text-[#FFFFFF] overflow-hidden font-poppins">
      <div className="text-[#D6D6D6] text-[14px] flex justify-center inline-block bg-[#06131B] px-[10px] py-[5px] border-[1px] border-[#0C1F2E] rounded-[5px] ">
        About Me
      </div>

      <h1 className="text-[36px] font-semibold">Full-stack developer</h1>
      <p className="text-[#D6D6D6] text-[16px] font-small">
        Hi, I'm Aman a Full Stack Developer with over 3 years of experience
        creating scalable web applications and microservices using the MERN
        stack, NestJS, TypeScript, and cloud technologies. I build event-driven
        systems using Kafka and add real-time features through WebSockets. I
        love integrating APIs, writing clean code, and solving tough business
        challenges.
      </p>
      <h2 className="text-[24px] font-semibold">What I do ?</h2>
      <div className="grid grid-cols-2 gap-6 mb-[20px]">
        {data.map((item, index) => (
          <div
            className="w-[65%] bg-[#06131B] rounded-[15px] p-[25px] mb-[20px]"
            key={index}
          >
            <img
              className="w-[45px] h-[45px] object-contain"
              src={item.icon}
              alt={item.title}
            />
            <h3 className="text-[#FFFFFF] font-semibold">{item.title}</h3>
            <p className="text-[#D6D6D6]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
