import React from 'react'

const Semana11Class10 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 11 | Lunes 3 de noviembre</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy vimos:</p>
          <ul className='list-disc list-inside'>
            <li>Presentamos una análisis bivariado, es decir, identificar si existe relación lineal entre las variables de nuestro dataset, y que tan asociadas se encuentran. Esto nos permite, por ejemplo, identificar si existe una relación entre el monto que los clientes gastan en un restaurante vs la propina que dejan, o entre el tamaño de las mesas o los días de la semana.</li>
            <li>Técnicamente, aprendimos a calcular la matriz de correlación - df.corr() - y a generar gráficos de dispersión (scatterplot) y de calor (heatmap)</li>
            <li>Introducimos la covarianza, que mide como varían dos variables juntas, que usamos para explicar la correlación, la cuál indica además el grado de asociación lineal entre las variables.</li>
            <li>Trabajamos con dos Notebooks, en el primero analizamos la teoría a través de un dataset reducido con datos de altura, peso y masa corporal</li>
            <li>Luego presentamos el caso de estudio del dataset "tips" con las propinas (queda de tarea para ustedes explorar el análisis con el dataset "iris")</li>
            <li><a href="https://colab.research.google.com/drive/1sVv9MOpr3ivYvo9C2Ji_5gmHBYdhTfWT" target='_blank' className='link'>Link Notebook con teoría de Correlación en Google Drive</a></li>
            <li><a href="https://colab.research.google.com/drive/1lvVhyLtJ4xmfrWK86cIO8asIc5WUp_ff" target='_blank' className='link'>Link Notebook con ejemplos en Google Drive</a></li>
            <li>Como Bonus Track, analizamos el dataset "Gapminder", con datos de población, expectativa de vida y PBI, en el cuál usamos la "Distancia de Mahalanobis" para buscar paises cuyas propiedas son similares. Es un tema que no llegamos a cubrir, pero la idea es mostrarles cuanto más se puede hacer.</li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://youtu.be/lTg2RgW8gOc'
            alt="Video semana 11 clase 11"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>"Taller especial sobre visualización": este miércoles 5 de noviembre a las 19:00 en Meet - tienen el link en la sección Inicio</li>
          </ul>
        </div>

        {/* Temas Clase 9 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 12</h2>
          <ul className='list-disc list-inside'>
            <li>Presentación consigan TP Final</li>
            <li>Primera parte - Graficos para comunicación y presentación de informes</li>
            <li>Repaso de temas y series de tiempo - lineplot</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana11Class10