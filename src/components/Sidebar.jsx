import { Link } from "react-router-dom";
import { BookmarkIcon, GroupIcon, MemoryIcon, UserIcon } from "./Icons";

const Sidebar = () => {
  return (
    <div
      role="navigation"
      className="sticky z-10 top-14 max-w-sm max-h-0 min-w-[280px] flex-shrink"
    >
      <div className="mt-4 overflow-y-auto">
        <ul>
          <li>
            <div className="px-2">
              <Link to="" className="p-2 rounded-md hover:bg-gray-200 hover:bg-opacity-75 flex items-center">
                <img
                  className="w-9 h-9 rounded-full bg-center bg-cover bg-no-repeat"
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                  alt="profile-photo"
                />
                <span className="ml-4 text-base font-medium">Jackson</span>
              </Link>
            </div>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <div className="px-2">
                <Link className="p-3.5 rounded-md hover:bg-gray-200 hover:bg-opacity-75 flex items-center">
                  <UserIcon className="w-6 h-6 fill-blue-500" />
                  <span className="ml-5 text-base font-medium">Friends</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="px-2">
                <Link className="p-3.5 rounded-md hover:bg-gray-200 hover:bg-opacity-75 flex items-center">
                  <MemoryIcon />
                  <span className="ml-5 text-base font-medium">Memories</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="px-2">
                <Link className="p-3.5 rounded-md hover:bg-gray-200 hover:bg-opacity-75 flex items-center">
                  <BookmarkIcon className="w-6 h-6" />
                  {/* rgba(207,55,174,1) rgba(147,96,246,1) 
                   
                   */}
                  <span className="ml-5 text-base font-medium">Saved</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="px-2">
                <Link className="p-3.5 rounded-md hover:bg-gray-200 hover:bg-opacity-75 flex items-center">
                  <GroupIcon className="w-6 h-6 fill-blue-500" />
                  <span className="ml-5 text-base font-medium">Groups</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
