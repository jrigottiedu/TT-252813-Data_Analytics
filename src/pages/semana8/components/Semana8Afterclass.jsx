import React from 'react'

const Semana8Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 15 de Octubre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del Taller</h2>
        <ul className='list-disc list-inside'>
          <li>Hoy finalizamos la actividad 4 de la Pre-entrega</li>
          <li><a href="https://gamma.app/docs/Pre-Entrega-de-Proyecto-4eq8frsd0ubt429?mode=doc" target='_blank' className='link'>Ver consigna</a></li>
          <li><a href="https://colab.research.google.com/drive/1mAWq_MkiyT_VWEOixSlLuq1Yi_EuIJO1" target='_blank' className='link'>Ver Notbook en Drive</a></li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/PreEntrega/Pre-entrega.ipynb" target='_blank' className='link'>Ver Notbook en Github</a></li>
          <li>Hicimos el merge de los dataframes Ventas con Marketing, filtramos por la fecha de la campaña y calculamos ventas totales, costo de campaña de marketing y ganancias</li>
          <li>Notamos que la tabla Marketing tiene para el mismo producto 3 canales de promoción, de manera que al hacer el merge, vemos las ventas de productos triplicadas.</li>
          <li>Planteamos como solución (modificando minimanete lo hecho hasta ahora) hacer una agregación de costos en marketing antes de hacer el merge. En el código estan planteadas ambas opciones.</li>
          <li>Luego, posterior a la clase, analicé con más detalle, y les agrege una última sección "Solución al problema de los duplicados" con otro enfoque, y otra agregación un poco más compleja. No se complique, la idea del ejercicio es analizar y poner en práctica lo aprendido.</li>

        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 20/10 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación del Taller Pre-entrega</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://youtu.be/MI7yrwnldIE'
            alt="Video semana 8 After Class 8"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana8Afterclass