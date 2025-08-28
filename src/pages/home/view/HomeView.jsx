import React from "react";
import HomeDupla from "../components/HomeDupla";
import HomeClass from "../components/HomeClass";
import HomeAfterClass from "../components/HomeAfterClass";
import HomeAulaVirtual from "../components/HomeAulaVirtual";
import HomeDiscord from "../components/HomeDiscord";
import HomePautasConvivencia from "../components/HomePautasConvivencia";
import HomeEvaluacion from "../components/HomeEvaluacion";
import HomePFI from "../components/HomePFI";
import HomeRepoOficial from "../components/HomeRepoOficial";


const HomeView = () => {
  return (
    <div>
      <HomeDupla />
      <HomeClass />
      <HomeAfterClass />
      <HomeRepoOficial />
      <HomeAulaVirtual />
      <HomeDiscord />
      <HomePautasConvivencia />
      <HomeEvaluacion />
      <HomePFI />
    </div>
  );
};

export default HomeView;
