import ProfilePhoto from "../../assets/images/profile_picture.png";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center bg-[#06131B] text-[#FFFFFF] h-[650px] w-[300px] my-[60px] mx-[40px] rounded-[25px] font-poppins">
      <img
        src={ProfilePhoto}
        alt="profile"
        className="w-3/4 h-24 rounded-[5px]"
      />
      <h2 className="font-semibold mt-[40px]">Aman Singh</h2>
      <h3 className="font-medium text-[#139BFD] mb-[1px]">
        Full Stack Developer
      </h3>
      <p className="font-normal pb-[10px]">MERN | Nestjs | Microservices</p>
    </div>
  );
};

export default Navbar;
