import React from 'react'

const Semana6Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 1 de octubre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del After Class</h2>
        <ul className='list-disc list-inside'>
          <li>Resolvimos el cuestionario de la clase 6</li>
          <li>Resolvimos las actividades 1 y 2 de la clase 6 sobre filtro y transformación con el dataset Titanic de seaborn</li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/After_class_6/After%20Class%206%20-%20Actividad%20con%20Titanic.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 6/10 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación del After Class 5</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=wrZPY2894qc'
            alt="Video semana 6 After Class 6"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana6Afterclass