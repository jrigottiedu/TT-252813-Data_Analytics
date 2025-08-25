import React from "react";
import { useGlobal } from "../../hook/useGlobal";
import NavSidebar from "../../componentes/navbar/NavSidebar";
import NavHamburger from "../../componentes/navbar/NavHamburger";

const Layout = ({ children }) => {
  const { desktopView, showNavSidebar } = useGlobal();

  return (
    <>
      {/* Header */}
      <header className="py-3 px-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center">
          <img
            className="w-12"
            src="/images/logoBAAzulOscuro.webp"
            alt="Talento Tech"
          />
          <h1 className="text-sm px-5 laptop1:text-xl">TT252813 - Data Analytics con Python</h1>
        </div>
      </header>

      {/* Hamburger Menu */}
      {!desktopView && <NavHamburger />}

      {/* Main container */}
      <div
        className={
          desktopView ? "flex w-full min-h-screen" : "relative w-full min-h-screen"
        }
      >
        {/* Sidebar */}
        {showNavSidebar && <NavSidebar />}
        <main className="w-full p-3">{children}</main>
      </div>

      {/* Footer */}
      <footer className="p-3 bg-neutral-700 text-center text-neutral-50">
        Derechos Reservados 2025
      </footer>
    </>
  );
};

export default Layout;
