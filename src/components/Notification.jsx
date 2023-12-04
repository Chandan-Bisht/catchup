/* eslint-disable react/prop-types */
import { EllipsisIcon, NotificationIcon } from "./Icons";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DropdownContext } from "../context/DropdownContext";

const Notification = () => {
  const { isActive, toggleDropdown } = useContext(DropdownContext);
  const activeState = isActive === "notification";
  const styles = `p-2 rounded-full ${
    activeState? "bg-blue-200 hover:bg-blue-200" : "hover:bg-gray-200"
  }`;

  const notificationlist = [
    {
      id: 1,
      name: "James Bond",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 2,
      name: "Angela Yu",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 3,
      name: "Priyanka Jadhav",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 4,
      name: "Sunil Desai",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 5,
      name: "Abhijit Khore",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 6,
      name: "Nikhil Palkar",
      action: "shared a reel with you.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 7,
      name: "Aditi Yadav",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 8,
      name: "Vandana Sharma",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 9,
      name: "Pratiksha Sakhare",
      action: "liked your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      id: 10,
      name: "Manish Yadav",
      action: "commented on your profile picture.",
      time: "a day ago",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
  ];

  const notificationItem = () => {
    return (
      <button onClick={() => toggleDropdown("notification")} className={styles}>
        <NotificationIcon
          className={`w-5 h-5 ${activeState? "fill-blue-500" : "fill-gray-500"}`}
        />
      </button>
    );
  };

  return (
    <Dropdown classname={styles} active={activeState} dropdownContent={notificationItem()}>
      <div className="px-4 py-3 flex flex-col h-[30rem] overflow-y-scroll scrollbar">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Notifications</h1>
          <span className="p-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            <EllipsisIcon />
          </span>
        </div>
        <div className="flex items-center py-2 gap-4">
          <button className="w-12 h-10 bg-blue-50 text-base text-blue-500 font-medium rounded-full ">
            All
          </button>
          <button className="w-20 h-10 text-base font-medium text-gray-500 hover:bg-gray-100 rounded-full">
            Unread
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">Earlier</span>
          <Link
            to=""
            className="p-2 text-base text-blue-500 hover:bg-gray-200 rounded-md"
          >
            See all
          </Link>
        </div>
        <div className="flex flex-col cursor-pointer">
          {notificationlist.map((notification) => (
            <div
              key={notification.id}
              className="flex flex-row gap-3 items-center hover:bg-gray-200 rounded-lg px-2"
            >
              <img
                className="w-14 h-14 rounded-full"
                src={notification.image}
                alt="user-picture"
              />
              <div className="flex flex-col">
                <span className="text-base text-gray-500 leading-5 mt-[5px]">
                  <strong>{notification.name}</strong> {notification.action}
                </span>
                <span className="text-sm text-gray-500 mb-[5px]">
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  );
};

export default Notification;
