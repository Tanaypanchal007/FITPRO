import { NavLink } from "react-router-dom";
import logo from "../assets/Logo/navbar-logo.svg";
import {
  IoCartOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { IoMdHeartEmpty, IoIosContact } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-red-bg flex flex-col items-center gap-1"
      : "text-white flex flex-col items-center gap-1";

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-black/70 backdrop-blur-xs backdrop-saturate-150 hidden lg:block sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
          <img src={logo} alt="Navbar Logo" className="w-[120px] h-[70px]" />

          <div className="flex items-center gap-6 text-[22px] font-montserrat">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
            <NavLink to="/products" className={linkStyle}>
              Products
            </NavLink>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4 text-white text-xl">
            <NavLink to="/" className="hover:text-red-bg">
              <IoCartOutline size={24} />
            </NavLink>
            <NavLink to="/" className="hover:text-red-bg">
              <IoMdHeartEmpty size={24} />
            </NavLink>
            <NavLink to="/login">
              <button className="border border-red-bg px-5 py-2 hover:bg-red-bg hover:text-white transition">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Single Wrapper) */}
      <div className="lg:hidden sticky top-0">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-xs backdrop-saturate-150 sticky top-0 z-50">
          <img src={logo} alt="Navbar Logo" className="w-[100px] h-[60px]" />

          <NavLink to="/login" className="text-white text-2xl">
            <FiUser />
          </NavLink>
        </div>

        {/* Bottom Navbar */}
        <div className="fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm backdrop-saturate-150 border-t border-white/10 flex justify-around items-center py-5 z-50 font-montserrat">
          <NavLink to="/" className={linkStyle}>
            <IoHomeOutline size={25} />
            <span className="text-[12px]">Home</span>
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            <IoInformationCircleOutline size={25} />
            <span className="text-[12px]">About</span>
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            <AiOutlineProduct size={25} />
            <span className="text-[12px]">Products</span>
          </NavLink>

          <NavLink to="/cart" className={linkStyle}>
            <IoCartOutline size={25} />
            <span className="text-[12px]">Cart</span>
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            <IoIosContact size={25} />
            <span className="text-[12px]">Contact</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
