import React from 'react'

const Semana10Class9 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 10 | Lunes 27 de octubre</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy vimos:</p>
          <ul className='list-disc list-inside'>
            <li>Recordamos porfi que suban el TP de la pre-entrega hasta donde hayan llegado, siempre hay beneficios de TT para los egresados! Esta semana ya debemos tener todas las entregas con devolución</li>
            <li>Comenzamos con técnicas y herramientas de visualización complementarias para EDA (Análisis Exploratorio de Datos)</li>
            <li>Hicimos foco en graficar histogramas y boxplots usando la librería base Matplotlib y Seaborn</li>
            <li>En el boxplot encontramos todos los conceptos de estadística descriptiva vistos en clase 9. Si los complementamos con Histogramas y gráficos de densidad, tenemos una muy buena apreciación de la estructura de los datos, patrones y valores atípicos - outliers.</li>
            <li>Generamos datos de calificaciones aleatorios usando Numpy, pueden jugar cambiando la media, desvio y cantidad de muestras para ver como se manifiesta en los gráficos</li>
            <li>Luego usamos el dataset "Tips" de seaborn, que sugiere la teoría del campus, aplicamos histograma y boxplot</li>
            <li>Por último hicimos un scatterplot o gráfico de dispersión, para presentar el tema de clase 11 - "Correlación" de manaera de analizar la relación entre variables.</li>
            <li><a href="https://colab.research.google.com/drive/1B4YmQRpHU-ers2NpoOShDzjcuhHKR9iy" target='_blank' className='link'>Link Notebook Clase 10 Google Drive</a></li>
            <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/_19_Clase_10" target='_blank' className='link'>Link Notebooks Clase 10 Github (el que hicimos en clase y otra versión con algunas cositas que faltaron ver.)</a></li>
            <li><a href="https://drive.google.com/file/d/1zfKAhL14PFAqOhx4Vt4eW6U453vjb5ZO/view?usp=sharing" target='_blank' className='link'>PDF teoría</a></li>
            <li><a href="https://docs.google.com/presentation/d/1aB4N20-egUjbRyIK8I9VNSio4FsxiJYd/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>PPT Presentación</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=79eRseRRQ5g'
            alt="Video semana 10 clase 10"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 2 de la clase 4</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=WDVpOZcUyCA" target="_blank" className='link'>Ver aquí resolución</a></li>
            <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 3 de la clase 6</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=wrZPY2894qc" target="_blank" className='link'>Ver aquí resolución</a></li>
            <li>Recordamos el link de la Wiki con el resumen, datasets, template para la resolución de la pre-entrega y link al Video <a href="https://tt-252813-data-analytics.vercel.app/#/semana7" target='_blank' className='link'>Ver resumen aquí</a></li>
            <li>Hoy abre el cuestionario # 4 de la clase 10, lo encuentran en el campus</li>
            <li>Queda para analizar el ejercicio del PPT de hoy que usa el Dataset "Diamonds" lo vemos el miércoles en el After Class</li>
            <li>Nos encontramos el miércoles 29 de octubre a las 19:00 en Meet - tienen el link en la sección Inicio</li>
          </ul>
        </div>

        {/* Temas Clase 9 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 11</h2>
          <ul className='list-disc list-inside'>
            <li>Análisis de relación entre variables</li>
            <li>Nos permite comprender el grado de asociación lineal entre las variables</li>
            <li>Vamos a agregar también la covarianza, que nos indica como varían juntas las variables</li>
            <li>Estos temas son centrales para luego aplicarlos en Machine Learning e Inteligencia Artificial</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana10Class9