import React from "react";
import CalendarComponent from "../components/CalendarComponent";

const Semana1View = () => {
  return (
    <div>
      <h1 className="title-class">Clase 1 | 31 de marzo de 2025</h1>

      {/* Class */}
      <section className="home-info-container">
        <ul>
          <li>Link video Clase grabada en Youtube</li>
          <li>Resumen de lo visto en clase</li>
          <li>Link al código visto en clase en Github</li>
          <li>Code snippets con lo visto en clase</li>
          <li>Enunciados ejercicios</li>
          <li>Link video resumen de la teoría de la semana</li>
        </ul>
      </section>

      {/* After Class */}
      <h1 className="title-afterclass">After Class | 2 de abril de 2025</h1>
      <section className="home-info-container">
        <ul>
          <li>Link video After Class en Youtube</li>
          <li>Link resolución ejercicios en Github</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana1View;
