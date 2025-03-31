import React, { useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [desktopView, setDesktopView] = useState(false);
  const [showNavSidebar, setShowNavSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState(1)


  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDesktopView(windowWidth >= 760 ? true : false);
    setShowNavSidebar(windowWidth >= 760 ? true : false);
  }, [windowWidth]);

  return (
    <GlobalContext.Provider
      value={{ desktopView, showNavSidebar, setShowNavSidebar, activeLink, setActiveLink}}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
