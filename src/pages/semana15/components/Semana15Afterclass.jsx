import React from 'react'

const Semana15Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 3 de diciembre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>After Class 15</h2>
        <ul className='list-disc list-inside'>
          <li>Hoy repasamos los conceptos de regresión lineal y analizamos el caso real con el Dataset de precios de propiedades de Amsterdam</li>
          <li>Ver la teoría básica en este PPT <a href="https://docs.google.com/presentation/d/19iVSzdec7M973RDjXMVBGAUjj_FAdnrH/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>PPT Regresión Lineal</a></li>
          <li>Ver Notebook en Google Colab con caso práctico y caso real <a href="https://colab.research.google.com/drive/1vidt-5e2GwPea9K7PGUGPUXiH_YR6k0t#scrollTo=qYukJf5WVSeq" target='_blank' className='link'>Notebook Regresión en Colab</a></li>
          <li>Ver Notebook en Google Colab con caso práctico y caso real <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_26_Clase_15/Clase_15.ipynb" target='_blank' className='link'>Notebook Regresión en Github</a></li>

        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Miércoles 10 de diciembre a las 19:00 hs por Meet, para aclarar dudas sobre la entrega final.</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación Taller Entrega Final</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=j7bc7zbWmMo'
            alt="Video semana 15 After Class 15"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana15Afterclass