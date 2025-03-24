import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../hook/useGlobal";

const NavLink = ({ link: link, name: name }) => {
  const { setShowNavSidebar, desktopView } = useGlobal();
  const handleClick = () => {
    if (!desktopView) {
      setShowNavSidebar(false);
    }
  };
  return (
    <div>
      <Link
        className="hover:text-gray-500"
        to={link}
        onClick={() => handleClick()}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavLink;
