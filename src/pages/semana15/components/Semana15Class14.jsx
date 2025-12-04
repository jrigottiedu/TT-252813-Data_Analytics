import React from 'react'

const Semana15Class14 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 15 | Lunes 1 de diciembre</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy vimos Regresión Lineal</p>
          <ul className='list-disc list-inside'>
            <li>Generamos un modelo de regresión lineal para predecir el peso de una persona dada su altura</li>
            <li>Y luego lo extendimos a un dataset de precios de propiedades en Amsterdam, para predecir el precio de la propiedad dada la superficie</li>
            <li>Ver la teoría básica en este PPT <a href="https://docs.google.com/presentation/d/19iVSzdec7M973RDjXMVBGAUjj_FAdnrH/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>PPT Regresión Lineal</a></li>
            <li>Ver Notebook en Google Colab con caso práctico y caso real <a href="https://colab.research.google.com/drive/1vidt-5e2GwPea9K7PGUGPUXiH_YR6k0t#scrollTo=qYukJf5WVSeq" target='_blank' className='link'>Notebook Regresión en Colab</a></li>
            <li>Ver Notebook en Google Colab con caso práctico y caso real <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_26_Clase_15/Clase_15.ipynb" target='_blank' className='link'>Notebook Regresión en Github</a></li>
            <li>Los conceptos básicos son:</li>
            <li>EDA al dataset, y pre-procesamiento (eliminar nulos, transformar datos, etc)</li>
            <li>Separar el Dataset en un conjunto de entreamiento y otro de testing</li>
            <li>Entrenar un modelo de regresión lineal con el conjunto de entreamiento</li>
            <li>Evaluar las métricas, R2, MSE, RMSE usando el conjunto de testing</li>
            <li>Escribir conclusiones, que tan bueno es el modelo y las limitaciones que tiene</li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación Clase 15</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=9zieYKFlR7A'
            alt="Video semana 15 Class 15"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li><span className='font-semibold'>"Entrega Final":</span> 1ra fecha sugerida hasta el 8/12 - 2da y última fecha límite hasta el 15/12</li>
            <li>En el After Class de este miércoles 19 vamos a analizar el caso de estudio </li>
            <li>*** Lunes 8/15 - Feriado ***</li>
          </ul>
        </div>

        {/* Temas Clase 16 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 17 - Lunes 15 de diciembre</h2>
          <ul className='list-disc list-inside'>
            <li>Clase de cierre, compartir experiencias, opiniones, sugerencias y analizar cómo continuar el recorrido en el mundo de los datos!</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana15Class14