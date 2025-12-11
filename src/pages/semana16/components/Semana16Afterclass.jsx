import React from 'react'

const Semana16Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 10 de diciembre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>After Class 15 - Consultas Taller Entrega Final </h2>
        <ul className='list-disc list-inside'>
          <li>Ultima fecha de entrega: <span className='font-semibold'>lunes 15 de diciembre</span></li>
          <li>Ver PPT con la Consigna <a href="https://gamma.app/docs/DATA-ANALYTICS-Clase-15-uy3su99uxzc5v2f?mode=present#card-vk1xuxjoww4mttu" target='_blank' className='link'>aquí</a></li>
          <li>Recuerden que el TP es una continuación de la pre-entrega. Etapas 1 & 2 se hicieron en la pre-entrega, mientras que ahora completamos Etapas 3 & 4</li>
          <li>Subir el link del Notebook (Colab o Github) al Campus Virtual</li>
          <li>Les dejo un link del Notebook de hoy en Google Drive <a href="https://colab.research.google.com/drive/1bISOpH95aR253o_CxfL-RxJZOzuO1pIx#scrollTo=tvk8mFmsg8gc&uniqifier=2" target='_blank' className='link'>Notebook Taller Entrega Final en Google Drive</a></li>
          <li>Les dejo un link del Notebook de hoy en Google Drive <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/EntregaFinal" target='_blank' className='link'>Notebook Taller Entrega Final en Github</a></li>
          <li>Este fue un After Class muy enriquecedor, con mucha participación en la que se analizaron varios aspectos de los datasets y del código</li>
          <li>He agregado un NOTA en la sección "Integración de datos", justo antes de hacer el merge entre los dataframes ventas y marketing. - Sugiero que filtren sólo un canal de marketing antes de hacer el merge, así los gráficos son mucho más representativos.</li>
          <li>Para quienes deseen ver el impacto por mes, a partir de las ideas que surgieron hoy en clase, arme la versión 3 del impacto de la campaña, pero sólo para el canal RRSS que he filtrado según la nota anterior. Se ve claramente cómo impactan las ventas luego de iniciada la campaña de marketing.</li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 15 de diciembre a las 19:00 hs por Zoom, en nuestra clase de cierre, en la que veremos cómo sigue el recorrido en Talento Tech, y quede un espacio abierto para compartir experiencias y sugerencias para seguir mejorando!</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación After Class 16</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=OBtlG8Pnm88'
            alt="Video semana 16 After Class 16"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana16Afterclass