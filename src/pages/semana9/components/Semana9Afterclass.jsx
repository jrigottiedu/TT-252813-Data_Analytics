import React from 'react'

const Semana9Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 22 de octubre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del Taller</h2>
        <ul className='list-disc list-inside'>
          <li>Hoy finalizamos reforzamos con un ejemplo el uso de Merge/Join y analizamos inquietudes de la actividad 4 de la Pre-entrega</li>
          <li><a href="https://colab.research.google.com/drive/1DCaGhoVB6GCKLznBm0XD0tLEs1rx_uRW" target='_blank' className='link'>Ejemplo Merge</a></li>
          <li><a href="https://gamma.app/docs/Pre-Entrega-de-Proyecto-4eq8frsd0ubt429?mode=doc" target='_blank' className='link'>Ver consigna</a></li>
          <li><a href="https://colab.research.google.com/drive/1mAWq_MkiyT_VWEOixSlLuq1Yi_EuIJO1" target='_blank' className='link'>Ver Notbook en Drive</a></li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/PreEntrega/Pre-entrega.ipynb" target='_blank' className='link'>Ver Notbook en Github</a></li>
          <li><a href="https://colab.research.google.com/drive/1qQIXjufHJGBgZ-qn0gBXw0fuJx3PN8bZ" target='_blank' className='link'>Ejercicios clase 9 resueltos</a></li>


        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 27/10 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación After Class 9</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=tCokwoBDx1s'
            alt="Video semana 9 After Class 9"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana9Afterclass