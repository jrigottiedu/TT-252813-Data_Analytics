import React from 'react'

const Semana12Class11 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 12 | Lunes 10 de noviembre</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy vimos:</p>
          <ul className='list-disc list-inside'>
            <li>Hoy comenzamos con "Visualización de Datos" para la toma de decisiones estratégicas</li>
            <li>Presentamos la consigna de la Entrega Final que pueden <a href="https://gamma.app/docs/DATA-ANALYTICS-Clase-15-uy3su99uxzc5v2f?mode=present#card-vk1xuxjoww4mttu" target='_blank' className='link'>ver aquí</a> </li>
            <li>Los items 1 y 2 los resolvimos en la Pre-Entrega, ahora sólo nos enfocamos en los items 3 y 4</li>
            <li>Agendamos miércoles 26/11 "Taller de la Entrega Final y lunes 8/12 Plazo final para la entrega (quizás podamos extenderla un poquito)</li>
            <li>Tengan a mano el calendario con las fechas <a href="https://docs.google.com/spreadsheets/d/1jFZGrekh6l2vAmptrZf8JLTW6Z4bFAbSlYPOz2iMvSw/edit?gid=0#gid=0" target='_blank' className='link'>ver aquí</a></li>
            <li>Hicimos un repaso de las clases 9-10-11, pasando por Estadística Descriptiva, EDA, hasta correlación y mapas de calor - todos temas a aplicar al proyecto.</li>
            <li>Luego analizamos gráficos "lineplot" usando la librería Seaborn, primero con un dataset genérico y luego con "superstore" simulando datos reales.</li>
            <li>Antes de representar las ventas consolidadas y ganancias por mes/año, debimos hacer una limpieza, selección de datos relevantes, transformación de tipo de datos, generación de columnas "year" y "mes" y finalmente agrupación/agregación, de manera de armar el dataset a graficar.</li>
            <li>Finalmente introducimos un ejemplo de barplot "gráfico de barras" y vimos como comparar "ventas" y "ganancias" de las series de tiempo - a desarrollar en clase 13.</li>

            <li><a href="https://drive.google.com/drive/folders/1JXA_6WwoUME9kMjKiaz3itx_fHxsGCMD" target='_blank' className='link'>Link Notebook con teoría de y datasets - series de tiempo - Google Drive</a></li>
            <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/_22_Clase_12" target='_blank' className='link'>Link Notebook con teoría y datasets - Github</a></li>
            <li><a href="https://drive.google.com/drive/folders/1-LCQSvKU8nB07xbxalNC6DTadCakarly?usp=sharing" target='_blank' className='link'>Repo con PPT y Teoría clases 12 y 13</a></li>
            <li>Pamela Pacho nos compartió este video interesante sobre <a href="https://youtu.be/jOwnJ_gYrg4?si=3cGJJ07_RHj80Oyr" target='_blank' className='link'>IA: ¿se aproxima la mayor BURBUJA financiera de la Historia?</a> para que analicemos sobre el impacto de la IA</li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=NRJUReXuX_Q'
            alt="Video semana 12 clase 12"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>"Taller especial sobre visualización": este miércoles 12 de noviembre a las 19:00 en Meet - completamos y debatimos sobre los temas de hoy de Visualización</li>
          </ul>
        </div>

        {/* Temas Clase 12 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 13</h2>
          <ul className='list-disc list-inside'>
            <li>Segunda parte - Graficos para comunicación y presentación de informes</li>
            <li>Gráficos de barras, barras apilados, trees</li>
            <li>Visualización interactiva con Plotly</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana12Class11