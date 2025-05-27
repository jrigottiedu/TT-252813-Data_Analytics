import React from 'react'

const Semana10Class9 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 9 | Lunes 26 de mayo</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>En nuestra clase de hoy comenzamos con funciones!</p>
          <ul className='list-disc list-inside'>
            <li>Aprendimos la sintaxis de una función <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/clase_9/2_funciones_sintaxis.py" target='_blank' className='link'>Ver código</a></li>
            <li>Trabajamos con funciones que no reciben datos, esto es sin parámetros o argumentos <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/clase_9/3_funciones_sin_arg_sin_ret.py" target='_blank' className='link'>Ver código</a></li>
            <li>Trabajamos con funciones que si reciben datos, pueden ser un parámetro o multiparámetros (dos o más) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/clase_9/4_funciones_con_arg_sin_ret.py" target='_blank' className='link'>Ver código</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=Q4iyqF6vlC8'
            alt="Video semana 10 clase 9"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Código de clase en Github */}
        <div>
          <h2 className='title-h2'>Código hecho en clase</h2>
          <a
            className='link'
            href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_10/clase_9"
            alt="Semana 10 Clase 9 Codigo Github"
            target="_blank">Ver aquí en Github</a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Subir porfi la pre-entrega al Campus Virtual antes del domingo 1 de junio</strong></li>
            <li>En este video encuentran la resolución del cuestionario de auto-evaluación para la entrega del proyecto <a href="https://www.youtube.com/watch?v=8Tf783UzxZI" target='_blank' className='link'>Ver en Youtube</a></li>
            <li>En este video pueden revisar el paso a paso, desde la creación del archivo Py hasta subir el código al Campus Virtual <a href="https://www.youtube.com/watch?v=PTvgjX2azDE&list=PLR6qrffywxhBt5L15bddgxhrk6JlsJywZ" target='_blank' className='link'>Ver en Youtube</a></li>
            <li>Si tienen dudas con alguna parte del código del proyecto, aquí tienen un modelo completo funcionando <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/pre-entrega/codigo_modelo_pre_entrega.py" target='_blank' className='link'>Ver en Github</a></li>
            <li>Aquí les dejo un archivo Py con 2 ejercicios <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/clase_9/7_ejercicios.py" target='_blank' className='link'>Ver enunciado ejercicios</a></li>
            <li>Nos encontramos el miércoles 28 de mayo a las 19:00 en Meet - tienen el link en la sección Inicio</li>
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
          <h2 className='title-h2'>Temas a ver en Clase 10</h2>
          <ul className='list-disc list-inside'>
            <li>Completaremos lo que falto de ámbito local y global de una variable</li>
            <li>Veremos Funciones con retorno (funciones que devuelven valores)</li>
            <li>Documentación de funciones (docstrings)</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana10Class9