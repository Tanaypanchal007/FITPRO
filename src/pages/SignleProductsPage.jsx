import { useState } from "react";
import shoes1 from "../assets/Images/Shoes1.png";
import shoes2 from "../assets/Images/Shoes2.png";
import shoes3 from "../assets/Images/Shoes3.png";
import shoes4 from "../assets/Images/Shoes4.png";
import { IoCartOutline } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import ServicesWeProvide from "../components/RandomComponents/ServicesWeProvide";

const SignleProductsPage = ({ product }) => {
  const data = product || {
    brand: "NIKE",
    name: "Air Jordan OG",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa iure eius repudiandae quod dicta laborum placeat, libero rerum eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa iure eius repudiandae quod dicta laborum placeat, libero rerum eligendi!",
    price: 190,
    oldPrice: 249,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    images: [shoes1, shoes2, shoes3, shoes4],
  };

  const [selectedImage, setSelectedImage] = useState(data.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <section className="w-full bg-primary-bg min-h-screen py-6 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex gap-3">
          {/* Thumbnails */}
          <div className="w-[20%] flex flex-col gap-1">
            {data.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
                className={`w-full h-30 object-cover rounded cursor-pointer border transition 
                ${selectedImage === img ? "border-red-bg" : "border-gray-300"}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-[80%] overflow-hidden rounded h-fit  ">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-87.5 md:h-122.5 object-cover hover:scale-105 transition duration-300 rounded"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <h1 className="font-montserrat text-gray-500 text-sm font-medium tracking-wide">
            {data.brand}
          </h1>
          <h2 className="font-montserrat font-bold text-xl md:text-2xl">
            {data.name}
          </h2>
          <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
            {data.description}
          </p>
          {/* Price */}
          <div className="flex gap-3 items-center font-montserrat mt-1">
            <p className="font-semibold text-xl text-red-bg">
              ${data.price}.00
            </p>
            {data.oldPrice && (
              <del className="text-gray-500 text-sm">${data.oldPrice}.00</del>
            )}
          </div>
          <hr className="border-gray-300 my-2" />
          {/* Size Section */}
          <div className="flex justify-between items-center font-montserrat">
            <p className="text-sm font-medium">Select Size (UK)</p>
            <p className="text-sm text-gray-500 cursor-pointer flex justify-center items-center gap-2">
              <CgRuler className="text-xl" />
              Size Guide
            </p>
          </div>
          {/* Sizes */}
          <div className="flex flex-wrap gap-2 mt-1">
            {data.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm rounded border transition cursor-pointer
                ${
                  selectedSize === size
                    ? "bg-primary-text text-primary-bg"
                    : "border-gray-300 hover:bg-primary-text hover:text-primary-bg"
                }`}
              >
                {size} UK
              </button>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="bg-primary-text text-primary-bg w-full py-2 rounded hover:opacity-90 transition flex gap-3 justify-center items-center cursor-pointer">
              Add To Cart <IoCartOutline className="text-xl" />
            </button>

            <button className="border border-red-bg text-red-bg w-full py-2 rounded hover:bg-red-bg hover:text-white transition flex gap-3 justify-center items-center cursor-pointer">
              Buy Now <MdElectricBolt />
            </button>
          </div>

          {/* Services We Provide */}
          <ServicesWeProvide />
        </div>
      </div>
    </section>
  );
};

export default SignleProductsPage;
