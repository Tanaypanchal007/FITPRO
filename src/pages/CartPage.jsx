import shoes1 from "../assets/Images/shoes1.png";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import { ImBin } from "react-icons/im";

const CartPage = () => {
  return (
    <section className="px-4 md:px-8 py-6 bg-primary-bg min-h-screen">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold font-orbitron mb-6 ">
        Shopping Cart
      </h1>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* LEFT: Cart Items */}
        <div className="w-full lg:w-[70%] flex flex-col gap-4">
          {/* Cart Item */}
          <div className="bg-white rounded-lg shadow-sm p-2 flex flex-col sm:flex-row gap-4">
            {/* Image (UPDATED ONLY THIS PART) */}
            <img
              src={shoes1}
              alt="product"
              className="w-full sm:w-40 md:w-45 aspect-square object-cover rounded"
            />

            {/* Details */}
            <div className="flex flex-col justify-between w-full relative">
              {/* Top */}
              <div>
                <h1 className="font-semibold text-base md:text-lg font-montserrat">
                  Nike Air Force 1 '07 LV8
                </h1>

                <p className="text-sm text-gray-500 font-montserrat">
                  Color: Red | Size: 8 UK
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mt-1 font-montserrat">
                  <del className="text-gray-400 text-sm">$190</del>
                  <p className="text-red-bg font-semibold">$149.00</p>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-3 font-montserrat">
                {/* Quantity */}
                <div className="flex items-center overflow-hidden">
                  <button className="px-3 py-2 flex items-center justify-center hover:bg-gray-200 border rounded-l-md">
                    <TbMinus />
                  </button>

                  <input
                    type="number"
                    value={1}
                    className="w-10 text-center py-1 px-2 border-y outline-none appearance-none"
                  />

                  <button className="px-3 py-2 border hover:bg-gray-200 rounded-r-md">
                    <GoPlus />
                  </button>
                </div>

                {/* Remove */}
                <button className="text-sm text-red-bg absolute top-0 right-0 cursor-pointer">
                  <ImBin className="text-xl" />
                </button>

                {/* Price Right */}
                <p className="text-lg text-primary-text absolute bottom-0 right-0 ">
                  $149
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Summary */}
        <div className="w-full lg:w-[30%] font-montserrat">
          <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col gap-4 sticky top-20">
            <h2 className="text-lg font-semibold font-montserrat">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>$149.00</p>
            </div>

            <div className="flex justify-between text-sm">
              <p>Shipping</p>
              <p className="text-green-600">Free</p>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>$149.00</p>
            </div>

            <button className="bg-red-bg text-white py-2 rounded hover:opacity-90 transition cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
