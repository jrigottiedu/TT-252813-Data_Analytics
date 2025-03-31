import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobal = () => {
  const { desktopView, showNavSidebar, setShowNavSidebar, activeLink, setActiveLink } = useContext(GlobalContext);
  return { desktopView , showNavSidebar, setShowNavSidebar, activeLink, setActiveLink};
};
