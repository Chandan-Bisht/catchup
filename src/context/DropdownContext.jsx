import { createContext, useState } from "react";

const DropdownContext = createContext();

// eslint-disable-next-line react/prop-types
const DropdownProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(null);

    // console.log(isActive)

    const toggleDropdown = (btnName) => {
        setIsActive(btnName === isActive ? null : btnName)
    }

    return (
        <DropdownContext.Provider value={{ isActive, setIsActive, toggleDropdown }}>
            {children}
        </DropdownContext.Provider>
    )
}

export { DropdownContext, DropdownProvider}