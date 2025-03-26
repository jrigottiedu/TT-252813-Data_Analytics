import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import Semana2Clase1 from "../components/Semana2Clase1";
import Semana2Afterclass from "../components/Semana2Afterclass";

const Semana2View = () => {
  return (
    <div>
      {/* Class */}
      <Semana2Clase1 />
      {/* After Class */}
      <Semana2Afterclass />
    </div>
  );
};

export default Semana2View;
