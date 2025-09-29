import React from 'react'

const Semana5Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 24 de septiembre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del After Class</h2>
        <ul className='list-disc list-inside'>
          <li>Resolvimos las actividades 1 y 2 de la clase 5 sobre identificar y tratar registros duplicados y valores nulos</li>
          <li>Los datasets para esta actividad se encuentran en un Google Sheet por lo que se importan desde el Colab</li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/After_class_5/After_class_5_tratamiento_duplicados_nulos.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 29/9 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación del After Class 5</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=qSy5K-Z0BFM'
            alt="Video semana 5 After Class "
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana5Afterclass