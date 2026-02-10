const Testimonials = () => {
  const feedbacks = [
    {
      id: 1,
      feedback:
        "Aman transformed our prediction platform with lightning-fast performance. His multithreading solution processed 70,000 records in just 40 seconds, plus the Kafka microservices setup handles peak loads effortlessly. He's a real problem-solver who delivers under pressure.",
      stars: 5,
    },
    {
      id: 2,
      feedback:
        "Aman built robust MERN applications that cut our page load times dramatically through smart optimizations. His API integrations and MongoDB tuning boosted our entire workflow. Reliable, skilled, and always thinking ahead.",
      stars: 5,
    },
    {
      id: 3,
      feedback:
        "The contract system Aman created for our music platform is flawless. Dynamic updates and secure e-signatures saved us countless hours. His full-stack expertise made complex features feel simple and intuitive.",
      stars: 5,
    },
    {
      id: 4,
      feedback:
        "Aman's payment gateway and role-based admin panel exceeded our expectations. The JWT auth and analyst workflow streamlined our operations perfectly. He's the go-to developer for Web3 projects that need to scale fast.",
      stars: 5,
    },
  ];

  return (
    <div className="bg-[#010A10] text-[#FFFFFF] inline-block">
      <div className="text-[#D6D6D6] text-[14px] flex justify-center inline-block bg-[#06131B] px-[8px] py-[3px] border-[1px] border-[#0C1F2E] rounded-[5px]">
        Testimonials
      </div>
      <h1 className="text-[24px] font-bold mb-[40px]">
        Here’s What My Clients Say
      </h1>
      <div className="grid grid-cols-2 gap-[15px]">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="mb-[20px] inline-block bg-[#06131B] rounded-[10px] p-[15px]"
          >
            <p className="text-[16px] text-[#D6D6D6]">{feedback.feedback}</p>
            <div className="flex mt-[30px] justify-start gap-[3px]">
              {[...Array(feedback.stars)].map((_, i) => (
                <span key={i} className="text-[#FFD700]">
                  ★
                </span>
              ))}
            </div>
            <p className="text-[14px]">{"Client FeedBack"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
