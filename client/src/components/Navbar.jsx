import { Link } from "react-router-dom";
import {SearchIcon, MessageIcon, UserIcon} from "./Icons"
import Notification from "./Notification";
import Account from "./Account";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed w-full top-0 left-0 z-20 flex items-center justify-between px-8 py-2 bg-white shadow-xl">
        <div className="flex w-full">
          <Link to="/home" className="text-center">
            <img
              src="https://svgshare.com/i/nEz.svg"
              alt="logo"
              className="w-36"
            />
          </Link>
        </div>
        <form className="justify-center">
          <label className="relative block">
            <span className="sr-only">Search</span>{" "}
            {/* Invisible label for screen readers */}
            <input
              type="search"
              aria-label="Search"
              placeholder="Search anything..."
              className="block w-96 px-3 py-1 pl-10 text-base text-gray-900 border border-gray-100 rounded-lg bg-gray-50 placeholder:text-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
          </label>
        </form>
        <div className="flex justify-end items-center w-full space-x-4">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <UserIcon className="w-6 h-6 fill-gray-500" />
          </button>
          <button className="p-2 w-10 h-10 hover:bg-gray-200 rounded-full">
            <MessageIcon />
          </button>
          <Notification/>
          <Account />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;