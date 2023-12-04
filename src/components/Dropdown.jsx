/* eslint-disable react/prop-types */

import { useContext, useEffect, useRef } from "react";
import { DropdownContext } from "../context/DropdownContext";

const DropdownButton = ({ active, dropdownContent, children}) => {
  const dropdownRef = useRef(null);
  const { setIsActive } = useContext(DropdownContext);

  useEffect(() => { 
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsActive(null);
      }
    }
    if(active) {
      document.addEventListener("mousedown", handleOutsideClick)
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  })
  return (
    <div ref={dropdownRef}>
        {dropdownContent}
      {active && (
        <div className="absolute top-11 mt-2.5 right-8 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-dropdown w-96 dark:bg-gray-700">
          {/* Dropdown items */}
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
