import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import {
  ChevronRightIcon,
  DropdownIcon,
  LogoutIcon,
  SettingsIcon,
  SupportIcon,
} from "./Icons";
import { useContext } from "react";
import { DropdownContext } from "../context/DropdownContext";

const Account = () => {
  const { isActive, toggleDropdown} = useContext(DropdownContext);
  const activeState = (isActive === "settings")
  const SettingItem = () => {
    return (
      <button onClick={() => toggleDropdown("settings")} className="flex relative items-center hover:opacity-50">
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt="user-profile-photo"
          className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
        />
        <span className="absolute -bottom-1.5 right-0 z-10 bg-gray-300 p-1 rounded-full">
          <DropdownIcon />
        </span>
      </button>
    );
  };
  return (
    <Dropdown active={activeState} dropdownContent={SettingItem()}>
      <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
        <li role="menuitem">
          <Link
            to=""
            className="flex items-center gap-4 px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {/* User profile photo */}
            <img
              className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
              alt="profile-photo"
            />
            <span className="font-medium text-base text-gray-500">
              Signed in as Jackson
            </span>
          </Link>
        </li>
        <hr className="my-2" />
        <li role="menuitem">
          <Link
            to="/settings"
            className="flex items-center justify-between w-full p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <h3 className="flex items-center font-medium text-base text-gray-500 capitalize">
              <SettingsIcon />
              Account settings
            </h3>
            <ChevronRightIcon />
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <h3 className="flex items-center font-medium text-base text-gray-500">
              <SupportIcon />
              Help & support
            </h3>
            <ChevronRightIcon />
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <h3 className="flex items-center font-medium text-base text-gray-500">
              <LogoutIcon />
              Log out
            </h3>
          </Link>
        </li>
      </ul>
    </Dropdown>
  );
};

export default Account;
