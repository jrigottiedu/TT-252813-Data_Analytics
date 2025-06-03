import React from 'react'

const Semana11Class10 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 10 | Lunes 2 de junio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy completamos funciones</p>
          <ul className='list-disc list-inside'>
            <li>Estudiamos el alcance o ámbito de las variables, global y local </li>
            <li>Alcance global: se accede a las variables globales desde el cuerpo principal y desde cualquier función <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/2_variables_alcance_global.py" target='_blank' className='link'>Ver código</a></li>
            <li>Alcance local: solo se accede a las variables locales desde la función en la que se declaró <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/3_variables_alcance_local.py" target='_blank' className='link'>Ver código</a></li>
            <li>Estudiamos las funciones que retornan datos sin recibir argumentos <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/4_funciones_sin_arg_con_retorno.py" target='_blank' className='link'>Ver código</a></li>
            <li>Estudiamos las funciones que retornan datos y que además reciben argumentos <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/5_funciones_con_arg_con_retorno.py" target='_blank' className='link'>Ver código</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=_wxQIadDHnc'
            alt="Video semana 11 clase 10"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Código de clase en Github */}
        <div>
          <h2 className='title-h2'>Código hecho en clase</h2>
          <a
            className='link'
            href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_11/clase_10"
            alt="Semana 11 Clase 10 Codigo Github"
            target="_blank">Ver aquí en Github</a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Resolver el cuestionario de la clase 10 en el Campus Virtual</li>
            <li>Les comparto algunos ejercicios para que practiquemos</li>
            <li>Ejercicio_1 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/Ejercicio_tarea_1.py" target='_blank' className='link'>Ver aquí</a></li>
            <li>Ejercicio_2 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/Ejercicio_tarea_2.py" target='_blank' className='link'>Ver aquí</a></li>
            <li>Ejercicio_3 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/Ejercicio_tarea_3.py" target='_blank' className='link'>Ver aquí</a></li>
            <li>Ejercicio_4 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_11/clase_10/Ejercicio_tarea_4.py" target='_blank' className='link'>Ver aquí</a></li>
            <li>Nos encontramos el miércoles 4 de junio a las 19:00 en Meet - tienen el link en la sección Inicio</li>
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
          <h2 className='title-h2'>Temas a ver en Clase 11</h2>
          <ul className='list-disc list-inside'>
            <li>Debido al feriado del lunes 16, vamos a hacer lo siguiente</li>
            <li>En la clase 11 del lunes 9 de junio, vamos a ver la clase 12, comenzamos con coceptos de Base de Datos y SQL</li>
            <li>Les voy a grabar un video con los contenidos de la clase 11, para que lo vean durante la semana que no cursamos</li>
            <li>El lunes 23 cuando nos reencontramos, vamos a seguir con la clase 13, para conectarnos a la Base de Datos con Sqlite</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana11Class10