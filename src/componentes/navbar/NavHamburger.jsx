import React from "react";
import { useGlobal } from "../../hook/useGlobal";

const NavHamburger = () => {
  const { showNavSidebar, setShowNavSidebar } = useGlobal();
  return (
    <div className="border-b border-gray-300 h-8 flex items-center">
      <button 
      className="cursor-pointer flex items-center"
      onClick={() => setShowNavSidebar(!showNavSidebar)}>
        <span className="material-icons">menu</span>
      </button>
    </div>
  );
};

export default NavHamburger;
