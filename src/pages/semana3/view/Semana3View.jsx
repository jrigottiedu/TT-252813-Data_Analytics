import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import Semana3Clase1 from "../components/Semana3Clase1";
import Semana3Afterclass from "../components/Semana3Afterclass";

const Semana3View = () => {
  return (
    <div>
      {/* Class */}
      <Semana3Clase1 />
      {/* After Class */}
      <Semana3Afterclass />
    </div>
  );
};

export default Semana3View;
