import React from 'react'

const Semana13Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 19 de noviembre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Introducción a Plotly</h2>
        <ul className='list-disc list-inside'>
          <li>Debido al feriado del lunes 24, en este After Class vimos el contenido de la clase 15 - Visualización Interactiva con Plotly</li>
          <li>Ver PPT Clase 15 Visualización con Plotly <a href="https://docs.google.com/presentation/d/1-451_BlA74MNZw-EkmKQPmngF2_aisG7/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>aquí</a></li>
          <li>Ver Teoría <a href="https://drive.google.com/file/d/1Ey_nFX_gLW5XjQu5NKg66eZp4-iGvoPE/view?usp=sharing" target='_blank' className='link'>aquí</a></li>
          <li>Plotly es otra librería como Matplotlib o Seaborn, pero con la diferencia que permite realizar gráficos interactivos - al estilo de los que vimos en el Taller de Visualización con Looker Studio</li>
          <li>Graficamos dispersión, serie de tiempo y gráficos de barras simple, apilado y side-by-side - <a href="https://colab.research.google.com/drive/1kxSilbnLLs_pH5tZ_zmm9tcTe3cdVpPI?usp=sharing" target='_blank' className='link'>ver Notebook Intro Plotly</a></li>
          <li>Sobre el final de la clase, presentamos un Notebook que compartió la Coordinación con la práctica resuelta de la actividad de Plotly Clase 15 - pero la analizamos en el próximo After Class <a href="https://colab.research.google.com/drive/1dT7zcQHsOeYScFYlB8BPDRu2gbW4zAAu?usp=sharing" target='_blank' className='link'>Notebook Actividades Plotly Clase 15</a></li>
          <li>Les comparto también la resulución de la activdad de gráficos de barra del After Class 12 <a href="https://colab.research.google.com/drive/1h5NBaA-GVVm43D74fbUot6qwnybzuH4l?usp=sharing" target='_blank' className='link'>Notebook Resolución After Class 12</a></li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Miércoles 26 de noviembre a las 19:00 hs por Meet, en el Taller de la Entrega Final - tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación After Class 13</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://youtu.be/zG8dWPZ2uc0'
            alt="Video semana 13 After Class 13"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana13Afterclass