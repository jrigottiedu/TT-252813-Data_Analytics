import React from 'react'

const Semana13Class12 = () => {
  return (
    <div>
      <h1 className="title-class">Feriado | Lunes 16 de junio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Material complementario</h2>
          <p className='text-orange-800 font-semibold'>Atención: debido al feriado, les arme un video de 45 minutos con los temas de la clase 11 - Módulos en Python</p>
          <p className='pt-2'>Temas alcanzados en el video grabado</p>
          <ul className='list-disc list-inside'>
            <li>Módulos propios en Py: básicamente movemos las declaraciones de las funciones a otro archivo .py y luego las importamos <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_13/clase_12/modulos_propios_teoria" target='_blank' className='link'>Ver código aquí</a></li>
            <li>Les dejo este otro de ejericio: <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_13/clase_12/modulos_propios_ejercicio" target='_blank' className='link'>Ver código en Gitub</a></li>
            <li>Módulos externos I: usamos la librería random para generar números aleatorios: <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_13/clase_12/3_modulos_random.py" target='_blank' className='link'>Ver código en Gitub</a></li>
            <li>Módulos externos II: usamos la librería math para importar funciones matemáticas complejas: <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_13/clase_12/4_modulos_math.py" target="_blank" className='link'>Ver código en Gitub</a> </li>
            <li>Módulos externos III: usamos la librería datetima para manipular fechas y horas: <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_13/clase_12/5_2_modulos_datetime_uso.py" target="_blank" className='link'>Ver código en Gitub</a> </li>
            <li>Módulos externos III: ver este archivo con varios usos: <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_13/clase_12/5_1_modulos_datetime_teoria.py" target="_blank" className='link'>Ver código en Gitub</a> </li>

          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Video grabado</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=F8URloKMf_4'
            alt="Video semana 13"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>
       
        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Repasen lo visto el lunes 9 de junio con Bases de Datos</li>
            <li>Eliminen el archivo "inventario.db" y vuelvan a crearlo, puede guiarse por el video simplificado <a
              className='link'
              href='https://www.youtube.com/watch?v=h9eOMSrEzyg'
              alt="Video semana 11 clase 10"
              target="_blank">
              Ver aquí en Youtube
            </a></li>
            <li>Revisen porfi este código que les arme sobre excepciones <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_12/clase_11/try_except.py" target='_blank' className='link'>Ver código en Github</a></li>
            <li>Si pueden, traten de ir modificando el código de la pre-entrega de manera que les quede modularizado con funciones</li>
            <li>Nos reencontramos el miércoles 18 en el After Class</li>
          </ul>
        </div>

        {/* Miscelaneas
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <p>Aqui les comparto un video complementario que explica como utilizar el modo Debug</p>
                    <ul className='list-disc list-inside'>
                        <li><strong>Video 1: </strong> Utilizando el Modo Debug <a className="link" href="https://youtu.be/spYjDGDKvTM" target='_blank'>Ver en Youtube</a></li>
                    </ul>
                </div> */}

        {/* Temas Clase 9 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 13 - lunes 23 de junio</h2>
          <ul className='list-disc list-inside'>

            <li>Seguimos con try-except</li>
            <li>Y vamos a ir trabajando por partes, explorando cada una de las consultas SQL, analizándolas desde el DB Browser primero y luego desde Python a través de funciones dedicadas.</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana13Class12