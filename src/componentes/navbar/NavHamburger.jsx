import React, { useState, useEffect } from "react";
import { useGlobal } from "../../hook/useGlobal";
import navItems from "./NavItems";

const NavHamburger = () => {
  const { showNavSidebar, setShowNavSidebar, activeLink } = useGlobal();
  const [activeLinkName, setActiveLinkName] = useState(null);
  
  useEffect(() => {
    const object = navItems.filter((item) => item.id == activeLink);
    if (object.length > 0) {
      setActiveLinkName(object[0].name);
    }
  }, [activeLink]);

  return (
    <div className="border-b border-gray-300 h-8 flex items-center">
      <button
        className="cursor-pointer flex items-center"
        onClick={() => setShowNavSidebar(!showNavSidebar)}
      >
        <span className="material-icons">menu</span>
      </button>
      <p className="ps-5">{activeLinkName}</p>
    </div>
  );
};

export default NavHamburger;
