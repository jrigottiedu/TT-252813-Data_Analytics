import React from 'react'

const Semana16Class15 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 16 | Lunes 7 de julio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='font-semibold py-2'>Modelo Entrega Final</p>
          <ul className='list-disc list-inside'>
            <li>Archivo <span className='font-semibold'>pfi_estructura_basica </span><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/entrega-final/pfi_estructura_basica.py" target="_blank" className='link'>Ver en Github</a></li>
            <li className="pl-5">El archivo pfi_estructura fue renombrado a pfi_estructura_basica</li>
            <li className="pl-5">Aqui encuentran todas las funcionalidades del CRUD que desarrollamos en clase - solo agregué algunos comentarios y complete las funciones de ingreso y validación de datos</li>

            <li>Archivo <span className='font-semibold'>pfi_estructura_avanzada </span><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/entrega-final/pfi_estructura_avanzada.py" target="_blank" className='link'>Ver en Github</a></li>
            <li className="pl-5">Actualicé la rutina de actualizar productos que permite editar todos los campos del producto</li>
            <li className="pl-5">Actualicé la rutina de eliminar productos de manera que solicite confirmación antes de eliminar</li>
            <li className="pl-5">Agregué una función de inicalización de la tabla, que se ejecuta sólo si la tabla esta vacía</li>
            <li className="pl-5">En ambos casos, la función de reporte de bajo stock es demostrativa, ya que no contamos con el campo cantidad en nustro ejemplo</li>
            <li>Archivo <span className='font-semibold'>bd_metodos.py </span><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/entrega-final/bd_metodos.py" target="_blank" className='link'>Ver en Github</a></li>
            <li className="pl-5">Agregamos el módulo os para crear la ruta relativa y actualizamos las funciones con esta ruta</li>
            <li className="pl-5">Se actualizaron todas las funciones con el código que encuentran en nustra wiki (Ahora con índice de funciones) <a href="https://tt-25011-python.vercel.app/#/sql" target='_blank' className='link'>Ver Code Snippets SQL</a></li>
          </ul>
          <p className='pt-5 font-semibold'>Transacciones e Inyecciones SQL</p>
          <ul className='list-disc list-inside'>
            <li><span className='font-semibold'>Transacciones: </span>Para cuando necesitamos realizar más de una operación SQL y asegurar la integridad de los datos  <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_16/clase_15/transacciones" target='_blank' className='link'>Ver Código en Github</a></li>
            <li><span className='font-semibold'>Inyección SQL: </span>Usar siempre consultas parametrizadas y No usar f-strings para reducir vulnerabilidades de nuesto código <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_16/clase_15/inyeccion" target='_blank' className='link'>Ver Código en Github</a></li>
            <li><span className='font-semibold'>Bonus Track: </span>En el archivo mejoras_with.py encuentran el uso de with-as para optimizar la conexión a la base y el uso de un diccionario para retornar estado, datos y errores de la función <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_16/clase_15/Bonus_track" target='_blank' className='link'>Ver código en Github</a></li>
          </ul>

          <p className='pt-5 font-semibold'>Les comparto el PPT ajustado a nuestra clase <a href="https://docs.google.com/presentation/d/1fDHTHOl7xcyGIc3peis2b73LhEoJAXcs/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>Ver PPT</a></p>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Video grabado</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=T-MeS5_lLYU'
            alt="Video semana 16"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Miércoles 9 de julio feriado - no tenemos After Class</li>
            <li><span className='font-semibold'>Nos encontramos este sábado 12 de julio de 15 a 17 hs por Meet</span> en un espacio de consultas para el PFI - Traigan en lo posible dudas o código para que analicemos entre todos</li>
            <li>Les grabo en la semana un video con la resolucion del cuestionario de la clase 14</li>
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

        {/* Temas Clase 16 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 16 - lunes 14 de julio</h2>
          <ul className='list-disc list-inside'>
            <li></li>
            <li>Vamos a preparar un taller de Git-Github para versionado del código y trabajo colaborativo - 1 hora</li>
            <li>Espacio para dudas sobre la Entrega final</li>
          </ul>
        </div>
        {/* Taller Miercoles 16 */}
        <div>
          <h2 className='title-h2'>Taller PFI - Miércoles 16 de julio</h2>
          <ul className='list-disc list-inside'>
            <li>Vamos a Refactorizar el código modelo de la pre-entrega <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/pre-entrega/codigo_modelo_pre_entrega.py" target='_blank' className='link'>Ver en Github</a></li>
            <li>Para llegar a esta versión con funciones <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/pre-entrega/1_codigo_modelo_con_funciones.py" target='_blank' className='link'>Ver en Github</a></li>
            <li>Y finalmente ajustar las funciones con lo visto hasta ahora para integrar con la Base de Datos</li>
            <li>Vamos a tratar de ver Git para control de versionado - eventualmente podemos ver de agregar una clase de 1 hora el lunes 21 de julio</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana16Class15