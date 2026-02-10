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
        "End-To-End Development Of Modern Web Applications Using The MERN Stack And NestJS. From Intuitive Frontends To High-Performance Backends, Aman Builds Scalable Platforms That Are Fast, Secure, And Built For Real Users.",
    },
    {
      icon: microservicesIcon,
      title: "Microservices & System Architecture",
      description:
        "Design And Development Of Event-Driven, Distributed Systems Using NestJS And Kafka. Ideal For Platforms That Need To Scale, Handle Heavy Traffic, And Stay Reliable Under Peak Loads.",
    },
    {
      icon: realtimeIcon,
      title: "Real-Time Application Features",
      description:
        "Implementation Of Real-Time Updates, Notifications, And Live Data Streams Using WebSockets And Redis. Perfect For Dashboards, Tracking Systems, Messaging, And Live Analytics.",
    },
    {
      icon: apiIcon,
      title: "API Development & Integrations",
      description:
        "Building Robust REST APIs And Integrating Third-Party Services Like Payment Gateways, External Platforms, And Automation Tools. Clean Architecture Ensures Secure And Maintainable Integrations.",
    },
    {
      icon: cloudIcon,
      title: "Cloud & DevOps Support",
      description:
        "Deployment And Infrastructure Setup Using Cloud Services And Docker. Building Systems That Are Easy To Scale, Monitor, And Maintain In Production Environments.",
    },
    {
      icon: adminIcon,
      title: "Admin Panels & Business Tools",
      description:
        "Custom Admin Dashboards, Role-Based Panels, Analytics Systems, And Internal Tools That Help Businesses Manage Users, Payments, Data, And Operations Efficiently.",
    },
  ];

  return (
    <div className="font-poppins">
      {/* Badge */}
      <div className="inline-block mb-4">
        <span className="text-[#94A3B8] text-[13px] font-medium tracking-wide uppercase">
          About Me
        </span>
        <div className="h-[2px] w-12 bg-[#139BFD] mt-1"></div>
      </div>

      {/* Heading */}
      <h1 className="text-[36px] font-bold text-white mb-4">
        Full-Stack Developer
      </h1>

      {/* Description */}
      <p className="text-[#94A3B8] text-[15px] leading-7 mb-10 max-w-4xl">
        Hi, I'm Aman A Full Stack Developer With Over 3 Years Of Experience
        Creating Scalable Web Applications And Microservices Using The MERN
        Stack, NestJS, TypeScript, And Cloud Technologies. I Build Event-Driven
        Systems Using Kafka And Add Real-Time Features Through WebSockets. I
        Love Integrating APIs, Writing Clean Code, And Solving Tough Business
        Challenges.
      </p>

      {/* What I Do Section */}
      <h2 className="text-[24px] font-bold text-white mb-6">What I Do ?</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 pb-6">
        {data.map((item, index) => (
          <div
            className="bg-[#05131C] rounded-[20px] p-8 border border-[#0F2231] hover:border-[#139BFD] hover:-translate-y-1 transition-all duration-300 group"
            key={index}
          >
            <div className="mb-6 bg-[#0F2231] w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-[#139BFD]/10 transition-colors duration-300">
              <img
                className="w-8 h-8 object-contain"
                src={item.icon}
                alt={item.title}
              />
            </div>
            <h3 className="text-white font-bold text-[18px] mb-3 group-hover:text-[#139BFD] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-[#94A3B8] text-[14px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
