import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import Semana4Clase1 from "../components/Semana4Clase1";
import Semana4Afterclass from "../components/Semana4Afterclass";

const Semana4View = () => {
  return (
    <div>
      {/* Class */}
      <Semana4Clase1 />
      {/* After Class */}
      <Semana4Afterclass />
    </div>
  );
};

export default Semana4View;
