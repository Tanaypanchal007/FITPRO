import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";

const ContactPage = () => {
  return (
    <section className="bg-primary-bg w-full px-4 py-6 md:px-10 md:py-10">
      {/* Wrapper */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="font-orbitron text-red-bg text-sm md:text-base">
              GET IN TOUCH
            </h1>

            <h1 className="font-montserrat text-2xl md:text-4xl font-medium leading-snug">
              We'd Love to <br /> Hear From
              <span className="text-red-bg"> You!</span>
            </h1>

            <p className="text-sm md:text-base text-gray-600">
              Have a question or feedback? Fill out the form and our team will
              get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {/* Item */}
            <div className="flex items-center gap-3">
              <div className="bg-black h-10 w-10 text-white rounded-full flex items-center justify-center">
                <IoCall />
              </div>
              <div>
                <h2 className="font-bold text-sm">Phone</h2>
                <p className="text-sm text-gray-600">+91 1234567890</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-black h-10 w-10 text-white rounded-full flex items-center justify-center">
                <MdOutlineEmail />
              </div>
              <div>
                <h2 className="font-bold text-sm">Email</h2>
                <p className="text-sm text-gray-600">tanaypanchal7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-black h-10 w-10 text-white rounded-full flex items-center justify-center">
                <CiLocationOn />
              </div>
              <div>
                <h2 className="font-bold text-sm">Location</h2>
                <p className="text-sm text-gray-600">Pune, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-black h-10 w-10 text-white rounded-full flex items-center justify-center">
                <GoClock />
              </div>
              <div>
                <h2 className="font-bold text-sm">Working Hours</h2>
                <p className="text-sm text-gray-600">
                  Mon - Sat: 9:00 AM - 8:00 PM <br /> Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-full lg:w-[60%] bg-white p-5 md:p-8 rounded-xl shadow-md">
          <h1 className="font-orbitron font-bold text-lg md:text-xl">
            Send Us a Message
          </h1>

          <div className="h-0.5 bg-red-bg w-16 my-2"></div>

          <p className="font-montserrat text-sm md:text-base text-gray-600">
            Please fill in the details below and we will get back to you.
          </p>

          <form className="mt-5 flex flex-col gap-4">
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                className="border border-gray-300 outline-none w-full px-3 py-2 rounded"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="border border-gray-300 outline-none w-full px-3 py-2 rounded"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone + Subject */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                className="border border-gray-300 outline-none w-full px-3 py-2 rounded"
                placeholder="Enter your contact number"
              />
              <input
                type="text"
                className="border border-gray-300 outline-none w-full px-3 py-2 rounded"
                placeholder="Subject (optional)"
              />
            </div>

            {/* Message */}
            <textarea
              rows="5"
              className="border border-gray-300 outline-none w-full px-3 py-2 rounded"
              placeholder="Enter your message here..."
            ></textarea>

            {/* Button */}
            <button className="bg-black text-white rounded w-full py-3 hover:bg-red-bg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
