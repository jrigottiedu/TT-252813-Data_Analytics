import React from 'react'

const Semana10Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 29 de octubre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del After Class</h2>
        <ul className='list-disc list-inside'>
          <li>Hoy resolvimos dos actividades implementando Boxplots e Histogramas para EDA</li>
          <li>Primero trabajamos con el dataset "Diamonds" de Seaborn <a href="https://www.kaggle.com/datasets/shivam2503/diamonds/data" target='_blank' className='link'>Ver detalles de campos aquí</a></li>
          <li>Anlizamos la distribución de precios de los diamantes y su relación con otras variables categóricas</li>
          <li>Luego trabajamos con el dataset "Titanic", analizando las tasas de supervivencia, según la clase y el género</li>
          <li>Empleamos Boxplots e Histogramas</li>
          <li>Luego introducimos el tema de la clase 11: "correlación", de manera de ver en grado de asociación lineal entre dos variables.</li>
          <li>Para cerrar, aplicamos una lineas de código para generar una regresión logística con la probabilidad de supervivencia según el rango etario de la distribución</li>
          <li><a href="https://colab.research.google.com/drive/1qhxWyq__dnAq7BpEkw-LErPJL9c0hobr" target='_blank' className='link'>Notebook after class en Google Drive</a></li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/_20_After_class_10" target='_blank' className='link'>Notebook after class en Github</a></li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 3/11 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación After Class 10</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=FGe-L9JoNWU'
            alt="Video semana 10 After Class 10"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana10Afterclass