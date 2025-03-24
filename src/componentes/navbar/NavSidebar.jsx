import React from "react";
import navItems from "./NavItems";
import NavLink from "./NavLink";
import { useGlobal } from "../../hook/useGlobal";

const NavSidebar = () => {
  const { desktopView, showNavSidebar } = useGlobal();
  return (
    <div
      className={desktopView?"w-64 bg-ba-blue text-white p-3":"absolute h-full top-0 left-0 w-64 bg-ba-blue text-white p-3"}
    >
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink id={item.id} link={item.link} name={item.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSidebar;
