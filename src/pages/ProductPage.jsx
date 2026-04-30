import shoes1 from "../assets/Images/Shoes7.png";
import shoes2 from "../assets/Images/Shoes8.png";
import shoes3 from "../assets/Images/Shoes5.png";
import shoes4 from "../assets/Images/Shoes6.png";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      brand: "NIKE",
      name: "Air Jordan 1 Retro High OG",
      price: 129,
      img: shoes1,
      tag: "New",
    },
    {
      id: 2,
      brand: "NIKE",
      name: "Air Jordan 1 Retro High OG",
      price: 179,
      img: shoes2,
      tag: "New",
    },
    {
      id: 3,
      brand: "NIKE",
      name: "Air Jordan 1 Retro High OG",
      price: 229,
      img: shoes3,
      tag: "New",
    },
    {
      id: 4,
      brand: "NIKE",
      name: "Air Jordan 1 Retro High OG",
      price: 199,
      img: shoes4,
      tag: "-15%",
    },
  ];

  return (
    <section className="bg-primary-bg min-h-screen px-4 py-4 md:px-8 md:py-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-lg md:text-2xl font-orbitron font-medium">
          ALL <span className="text-red-bg">PRODUCTS</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <select className="w-full sm:w-auto border border-gray-300 px-4 py-2 rounded outline-none font-montserrat focus:border-red-bg">
            <option disabled>All Category</option>
            <option>Men's</option>
            <option>Women's</option>
            <option>Kids</option>
          </select>

          <select className="w-full sm:w-auto border border-gray-300 px-4 py-2 rounded outline-none font-montserrat focus:border-red-bg">
            <option disabled>Sort By</option>
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-primary-bg rounded shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[270px] object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Badge */}
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded font-montserrat w-14 text-center">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="px-4 py-3 flex flex-col gap-1">
              <h1 className="text-gray-500 text-sm font-semibold">
                {item.brand}
              </h1>

              <h2 className="font-semibold text-base leading-tight">
                {item.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 text-red-bg text-base">
                ★★★★☆
                <span className="text-gray-500 text-xs">(128)</span>
              </div>

              {/* Price */}
              <h3 className="font-bold text-lg mt-1 font-main">
                ${item.price}.00
              </h3>
            </div>

            {/* Bottom Section */}
            <div className="relative flex items-center h-[50px] overflow-hidden bg-primary-bg">
              {/* Button (unchanged) */}
              <button className=" relative w-[60%] h-full bg-red-bg text-white font-medium text-sm flex items-center justify-center overflow-hidden font-montserrat gap-2 cursor-pointer rounded-tr-full">
                VIEW DETAILS <IoIosArrowDroprightCircle className="text-lg  " />
                {/* Slanted Edge */}
                <span className="absolute right-[-20px] top-0 h-full w-[40px] bg-red-bg skew-x-[-30deg]"></span>
              </button>

              {/* Icons (fixed width issue) */}
              <div className="flex items-center justify-end gap-6 pr-5 w-[40%] text-gray-600 text-xl h-full">
                <IoHeartOutline className="cursor-pointer hover:text-red-bg transition duration-200" />
                <IoCartOutline className="cursor-pointer hover:text-red-bg transition duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
