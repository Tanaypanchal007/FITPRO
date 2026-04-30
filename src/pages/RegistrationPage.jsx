import loginImg from "../assets/LayoutImages/loginScreen.png";

const RegistrationPage = () => {
  return (
    <section className="w-full min-h-screen bg-primary-bg flex flex-col lg:flex-row">
      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 h-[250px] lg:h-auto">
        <img
          src={loginImg}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md flex flex-col gap-5">
          {/* Heading */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold font-orbitron text-center">
              Create Your Account
            </h1>
            <p className="text-gray-600 text-sm font-montserrat text-center mt-2">
              Fill in the details below to get started{" "}
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="email"
                placeholder="Enter Full Name"
                className="border border-gray-300 px-4 py-2 rounded outline-none focus:border-red-bg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="border border-gray-300 px-4 py-2 rounded outline-none focus:border-red-bg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 px-4 py-2 rounded outline-none focus:border-red-bg"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 px-4 py-2 rounded outline-none focus:border-red-bg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your confirm password"
                className="border border-gray-300 px-4 py-2 rounded outline-none focus:border-red-bg"
              />
            </div>

            {/* Button */}
            <button className="bg-black text-white py-3 rounded cursor-pointer">
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <span className="text-red-bg cursor-pointer"> Login</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
