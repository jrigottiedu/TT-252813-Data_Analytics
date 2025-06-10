import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../hook/useGlobal";

const NavLink = ({ id, link, nuevo, name }) => {
  const { setShowNavSidebar, desktopView, activeLink, setActiveLink } = useGlobal();

  const handleClick = () => {
    setActiveLink(id); // ✅ Establecer el enlace activo
    if (!desktopView) {
      setShowNavSidebar(false); // ✅ Cerrar el sidebar en móvil
    }
  };

  return (
    <div>
      <Link
        className={`hover:text-gray-500 ${activeLink === id ? "text-red-500" : ""
          }`}
        to={link}
        onClick={handleClick} // ✅ Llamar la función sin parámetros incorrectos
      >
        {name} {nuevo ? <span className="text-xs text-green-500 ml-1">New!</span> : ""}
      </Link>
    </div>
  );
};

export default NavLink;
