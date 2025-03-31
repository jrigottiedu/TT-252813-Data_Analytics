import React from "react";
import HomeDupla from "../components/HomeDupla";
import HomeClass from "../components/HomeClass";
import HomeAfterClass from "../components/HomeAfterClass";
import HomeAulaVirtual from "../components/HomeAulaVirtual";
import HomeDiscord from "../components/HomeDiscord";
import HomePautasConvivencia from "../components/HomePautasConvivencia";


const HomeView = () => {
  return (
    <div>
      <HomeDupla />
      <HomeClass />
      <HomeAfterClass />
      <HomeAulaVirtual />
      <HomeDiscord />
      <HomePautasConvivencia />
    </div>
  );
};

export default HomeView;
