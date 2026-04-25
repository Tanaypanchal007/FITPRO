import heroimg from "../../assets/Images/herosection1.png";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-86px)] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroimg}
        alt="Hero"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start px-5 sm:px-6 max-w-7xl mx-auto text-white h-full">
        <p className="font-montserrat flex items-center gap-2 text-xs sm:text-sm">
          <FaCircleNotch className="text-red-bg animate-spin" />
          STEP INTO GREATNESS
        </p>

        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-2">
          RUN TO GROW.
          <br />
          GROW TO <span className="text-red-bg">WIN</span>
        </h1>

        <p className="font-main text-xs sm:text-sm md:text-base leading-relaxed max-w-sm mt-3">
          High performance sneakers designed to push your limits and elevate
          every step.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full sm:w-auto">
          <button className="group bg-red-bg px-5 py-3 rounded flex justify-center items-center gap-2 hover:bg-red-600 transition w-full sm:w-auto">
            SHOP NOW
            <MdArrowOutward className="group-hover:rotate-45 transition duration-300 text-xl" />
          </button>

          <div className="relative p-0.5 rounded overflow-hidden w-full sm:w-auto">
            <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#ef4444_50%,transparent_100%)]" />
            <button className="relative w-full px-5 py-3 bg-black text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer z-10">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
