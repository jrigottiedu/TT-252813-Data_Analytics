import React from 'react'

const Semana14Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">Taller Entrega Final | Miércoles 26 de noviembre</h1>
           <section className="home-info-container">
        <h2 className='title-h2'>After Class 14 - Taller Entrega Final </h2>
        <ul className='list-disc list-inside'>
          <li>Fecha de entrega sugerida: lunes 8 de diciembre</li>
          <li>Fecha de entrega excepcional: domingo 14 de diciembre</li>
          <li>Ver PPT con la Consigna <a href="https://gamma.app/docs/DATA-ANALYTICS-Clase-15-uy3su99uxzc5v2f?mode=present#card-vk1xuxjoww4mttu" target='_blank' className='link'>aquí</a></li>
          <li>Recuerden que el TP es una continuación de la pre-entrega. Etapas 1 & 2 se hicieron en la pre-entrega, mientras que ahora completamos Etapas 3 & 4</li>
          <li>Subir el link del Notebook (Colab o Github) al Campus Virtual</li>
          <li>Les dejo un link del Notebook de hoy en Google Drive <a href="https://colab.research.google.com/drive/1bISOpH95aR253o_CxfL-RxJZOzuO1pIx#scrollTo=tvk8mFmsg8gc&uniqifier=2" target='_blank' className='link'>Notebook Taller Entrega Final en Google Drive</a></li>
          <li>Les dejo un link del Notebook de hoy en Google Drive <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/EntregaFinal" target='_blank' className='link'>Notebook Taller Entrega Final en Github</a></li>
          <li>Para quienes esten más avanzados, en Etapa 2 - Integración de datos se ha refactorizad</li>
          <li>Para esta Entrega Final, si llegan a completar hasta Etapa 3 - 4 Consolidación de datos - Impacto de la Campañana de Marketing I esta perfecto</li>
          <li>Avanzados o quién quiera explorar más, puede analizar: 4 Consolidación de datos - Impacto de la Campañana de Marketing II comparando ventas con y sin campaña de Marketing</li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 1 de diciembre a las 19:00 hs por Zoom, vamos a terminar con Plotly y ver Regresión - tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación Taller Entrega Final</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=yYz5raPjJqs'
            alt="Video semana 14 After Class 14"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana14Afterclass