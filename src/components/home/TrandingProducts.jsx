// import React from 'react'
import shoes1 from "../../assets/Images/Shoes1.png";
import shoes2 from "../../assets/Images/Shoes2.png";
import shoes3 from "../../assets/Images/Shoes3.png";

const TrandingProducts = () => {
  const ProductInformation = [
    {
      key: 1,
      name: `SUNSHINE PUNK`,
      image: `${shoes1}`,
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
      price: `$42.00`,
      color: `#FCD34D`,
    },
    {
      key: 2,
      name: `Green Harlequin`,
      image: `${shoes2}`,
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
      price: `$42.00`,
      color: `#115E59`,
    },
    {
      key: 3,
      name: `Thunder Blue`,
      image: `${shoes3}`,
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
      price: `$42.00`,
      color: `#7DD3FC`,
    },
    {
      key: 4,
      name: `SUNSHINE PUNK`,
      image: `${shoes2}`,
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
      price: `$42.00`,
      color: `#DC2626`,
    },
  ];

  return (
    <>
      <section className="bg-white  px-2 py-1 lg:px-5 lg:py-4">
        <div className=" flex items-center justify-between  px-5 py-3">
          <h1 className="font-bold text-xs lg:text-xl font-montserrat">
            SHOP BY CATEGORY
          </h1>
          <p className="cursor-pointer text-xs lg:text-xl font-montserrat">
            VIEW ALL COLLECTION
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[30px] px-5 ">
            {ProductInformation.map((item, index) => {
              return (
                <div
                  className="shadow-3xl rounded-t-lg overflow-hidden shadow-2xl"
                  key={index}
                >
                  <div className="overflow-hidden relative rounded-t-lg">
                    <img src={item.image} />
                    <img
                      src="./products-image/nike-icon.png"
                      alt=""
                      className="absolute -top-1 left-3 w-[70px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center text-center  py-[15px] px-[5px]">
                    <h1 className="font-mono font-bold text-gray-500 ">NIKE</h1>
                    <h2 className="mt-[3px] font-semibold font-mono">
                      {item.name}
                    </h2>
                    <p className="text-sm mt-[3px] font-regular">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center bg-red-bg relative pt-[5px]">
                    <button className="w-[45%] text-white text-xs font-mono py-2 px-4">
                      BUY NOW
                    </button>
                    <div className="bg-white text-black w-[55%] text-xs font-main text-center py-2 px-3 absolute -right-[10px] -skew-x-[30deg]">
                      <span className="skew-x-[30deg] inline-block font-bold text-sm">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrandingProducts;
