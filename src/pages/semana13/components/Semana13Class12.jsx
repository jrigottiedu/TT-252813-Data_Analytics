import React from 'react'

const Semana13Class12 = () => {
  return (
    <div>
      <h1 className="title-class">Feriado | Lunes 17 de noviembre</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy vimos Gráficos de Barra</p>
          <ul className='list-disc list-inside'>
            <li>Continuamos con herramientas y técnicas de "Visualización de Datos" para la toma de decisiones estratégicas</li>
            <li>Noten que trabajamos con el Powerpoint de la clase 14 <a href="https://docs.google.com/presentation/d/1kAbo9cT0nulV_lFxRVNwa6qOb2aAt6x1/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>PPT Clase 14 Visualización</a> </li>
            <li>Presentamos y analizamos el código para generar gráficos de barras usando Matplotlib y Seaborn - Ver Notebook 1 con presentación de casos simples y genéricos <a href="https://colab.research.google.com/drive/1hEIMN4O5P0EipQbiGEfm2R5_K6gIrBjt?usp=sharing" target='_blank' className='link'>Notebook 1 - Google Drive</a></li>
            <li>Luego aplicamos estos conceptos y técnicas a situaciones reales usando el Dataset Superstore y graficando ventas/ganancias por ciudades, aplicando gráficos de barra simple, apilado y side-by-side <a href="https://colab.research.google.com/drive/1FmS59mowSogYDduLe12mfKV9Vh6e8miu?usp=sharing" target='_blank' className='link'>Notebook 2 - Google Drive</a></li>
            <li><span className='font-semibold'>Bonus Track:</span> presentamos el famoso gráfico de Nightingale's Rose, creado por la enfermera, matemática y estadísta Florence Nigthingale en 1850's para comunicar con claridad e impacto a la realeza, que las mejoras sanitarias en los hospitales de campaña de guerra reducía significativamente la tasas de mortalidad.</li>
            <li>Aquellos que usan GitHub encuentran los Notebooks en la carpeta de clase 13.</li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=uuWCiQNBHSM'
            alt="Video semana 13 clase 13"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li><span className='font-semibold'>"Taller de la Entrega Final":</span> el próximo miércoles 26 de noviembre a las 19:00 en Meet</li>
            <li>En el After Class de este miércoles 19 vamos a estudiar Visualización Interactiva con Plotly - Les adelanto el Notebook <a href="https://colab.research.google.com/drive/1-nkn1CaHbDercgMP5j3hEBeW7PnwAQAj?usp=sharing" target='_blank' className='link'>Notbook Plotly</a></li>
            <li>*** Lunes 24 de noviembre - Feriado ***</li>
          </ul>
        </div>

        {/* Temas Clase 13 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 14 - Lunes 1 de diciembre</h2>
          <ul className='list-disc list-inside'>
            <li>Completaremos lo que quede pendiente de Visualización con Plotly</li>
            <li>Vamos a hablar y presentar un caso de estudio sobre regresión lineal / regresión logística</li>
            <li>Aún nos quedan varios After Class para aclarar dudas sobre la Entrega Final</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana13Class12