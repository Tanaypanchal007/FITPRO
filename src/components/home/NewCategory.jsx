import shoes1 from "../../assets/Images/Shoes1.png";
import shoes2 from "../../assets/Images/Shoes2.png";
import shoes3 from "../../assets/Images/Shoes3.png";

const ShopCategory = () => {
  const shoesData = [
    {
      id: 1,
      name: "Men's Collection",
      img: shoes1,
    },
    {
      id: 2,
      name: "Women's  Collection",
      img: shoes2,
    },
    {
      id: 3,
      name: "Kids Collection",
      img: shoes3,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-white  px-2 py-1 lg:px-5 lg:py-4">
        <div className=" flex items-center justify-between  px-5 py-3">
          <h1 className="font-bold text-xs lg:text-xl font-montserrat">
            SHOP BY CATEGORY
          </h1>
          <p className="cursor-pointer text-xs lg:text-xl font-montserrat">
            VIEW ALL COLLECTION
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 pb-5">
          {shoesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full  object-cover rounded"
              />
              <p className="mt-2 text-center font-medium absolute top-5 left-5 font-orbitron text-xl">
                {item.name}
              </p>
              <p className="h-full w-full bg-black/40 absolute  top-full group-hover:top-0 transition-all duration-500 cursor-pointer">
                <h1 className="absolute bottom-0 bg-black w-full text-white p-2 text-center ">
                  VIEW MORE COLLECTION
                </h1>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ShopCategory;
