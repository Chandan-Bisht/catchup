import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="container bg-slate-100 max-w-full max-h-screen">
      <div className="flex items-center">
        <div className="bg-white flex justify-center flex-col min-h-screen w-full lg:w-3/5 xl:w-1/3 shadow-base py-8">
          <Link to="/" className="text-center">
            <img
              src="https://svgshare.com/i/nEz.svg"
              alt="Company Logo"
              className="lg:w-32 xl:w-auto mx-auto"
            />
          </Link>
          <h2 className="py-3 text-lg lg:text-lg xl:text-xl font-bold text-center">
            Login into your account
          </h2>
          <form action="" className="w-full px-7">
            <div className="mt-3 xl:mt-5 mb-1">
              <label htmlFor="email" className="lg:text-sm xl:text-base text-gray-500 mb-2 block">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="flex p-2 bg-slate-100 rounded-lg overflow-hidden w-full lg:p-2 xl:p-3 border-0 outline-gray-600"
                placeholder="Email address"
              />
            </div>
            <div className="mt-3 xl:mt-5 mb-1">
              <label htmlFor="password" className="lg:text-sm xl:text-base text-gray-500 mb-2 block">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="flex p-2 bg-slate-100 rounded-lg overflow-hidden w-full lg:p-2 xl:p-3 border-0 outline-gray-600"
                placeholder="Enter your password"
              />
            </div>
            <Link to="/forgot-password" className="block mt-3 text-right lg:text-xs xl:text-sm underline">
              Forgot Password?
            </Link>
            <button type="submit" className="p-2 bg-[#fd7401] w-full text-white lg:text-sm xl:text-base lg:p-2 xl:p-3 my-4 rounded-md shadow-btn">
              Login Now
            </button>
            <div className="text-center relative mb-5 before:w-full before:h-[1px] before:bg-[#c2c2c2] before:absolute before:top-3 before:left-0 before:content-[''] before:z-10 after:w-10 after:h-8 after:bg-white after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:z-20">
              <p className="z-30 relative uppercase text-[#c2c2c2] text-sm w-full px-1 mb-0">
                or
              </p>
            </div>
            <Link to="/home" className="block p-2 text-center bg-white w-full text-[#fd7401] lg:text-sm xl:text-base lg:p-2 xl:p-3 border border-solid border-[#fd7401] rounded-md">
              Sign up Now
            </Link>
          </form>
        </div>
        <div className="hidden lg:flex items-center justify-center w-full">
          <img src="https://svgshare.com/i/nDi.svg" alt="Login-page" className="lg:w-96 xl:w-auto" />
        </div>
      </div>
    </main>
  );
};

export default Login;
