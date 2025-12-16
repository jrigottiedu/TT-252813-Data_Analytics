import React from 'react'

const Semana17Class16 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 17 | Lunes 15 de diciembre</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='font-semibold py-2'>Curso Highlights y breve intro a Machine Learning</p>
          <ul className='list-disc list-inside'>
            <li>Recorrimos en 10 items los puntos más importantes de la cursada, desde la obtención del dataset y la carga hasta los KPIs, gráficos para toma de decisiones estratégicas y conclusiones finales de nuestro proyecto.</li>
            <li>Presentamos el ecosistema de Machine Learning con los pricipales modelos de Aprendizaje Supervisado y No Supervisado, cerrando con 2 actividades en The Teachable Machine y TensorFlow Playground (los links estan en el PPT).</li>
            <li>Acceder al PPT <a href="https://docs.google.com/presentation/d/1KJhi1Q-WMR_vFV_sLxWR5dc2yIZaQJU6/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>click aquí.</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación Clase de Cierre</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=WlRj87fpWXY'
            alt="Video semana 17 Clase de Cierre"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Tienen tiempo hasta el miércoles 17/12 para subir la Entrega Final</li>
            <li>Quienes puedan y lo deseen se les agradece que completen la "Encuesta de Satisfacción" que encuentran dentro de "Proyecto Final"</li>
            <li>Ya están abiertas las inscripciones a <a href="https://talentotech.bue.edu.ar/verano" target='_blank' className='link'>Talento Tech Pop-Up (Verano 2026)</a></li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana17Class16