const Testimonials = () => {
  const feedbacks = [
    {
      id: 1,
      feedback:
        "Aman Transformed Our Prediction Platform With Lightning-Fast Performance. His Multithreading Solution Processed 70,000 Records In Just 40 Seconds, Plus The Kafka Microservices Setup Handles Peak Loads Effortlessly. He's A Real Problem-Solver Who Delivers Under Pressure.",
      stars: 5,
    },
    {
      id: 2,
      feedback:
        "Aman Built Robust MERN Applications That Cut Our Page Load Times Dramatically Through Smart Optimizations. His API Integrations And MongoDB Tuning Boosted Our Entire Workflow. Reliable, Skilled, And Always Thinking Ahead.",
      stars: 5,
    },
    {
      id: 3,
      feedback:
        "The Contract System Aman Created For Our Music Platform Is Flawless. Dynamic Updates And Secure E-Signatures Saved Us Countless Hours. His Full-Stack Expertise Made Complex Features Feel Simple And Intuitive.",
      stars: 5,
    },
    {
      id: 4,
      feedback:
        "Aman's Payment Gateway And Role-Based Admin Panel Exceeded Our Expectations. The JWT Auth And Analyst Workflow Streamlined Our Operations Perfectly. He's The Go-To Developer For Web3 Projects That Need To Scale Fast.",
      stars: 5,
    },
  ];

  return (
    <div className="font-poppins">
      {/* Badge */}
      <div className="inline-block mb-4">
        <span className="text-[#94A3B8] text-[13px] font-medium tracking-wide uppercase">
          Testimonials
        </span>
        <div className="h-[2px] w-12 bg-[#139BFD] mt-1"></div>
      </div>

      <h1 className="text-[36px] font-bold text-white mb-8">
        Here's What My Clients Say
      </h1>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-2 gap-6 pb-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-[#05131C] rounded-[20px] p-8 border border-[#0F2231] hover:border-[#139BFD]/30 transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-[#1E293B] text-[40px] font-serif leading-none select-none">
              "
            </div>

            <p className="text-[#94A3B8] text-[15px] leading-7 relative z-10 italic">
              "{feedback.feedback}"
            </p>

            <div className="mt-6 pt-6 border-t border-[#0F2231] flex justify-between items-center">
              <div>
                <p className="text-white text-[14px] font-bold">Client FeedBack</p>
                <div className="flex mt-1 gap-1">
                  {[...Array(feedback.stars)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-[14px]">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
