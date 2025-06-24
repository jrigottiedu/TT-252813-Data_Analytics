import React from 'react'

const Semana14Class13 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 13 | Lunes 23 de junio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>Ejecutamos las primeras consultas SQL desde Python!</p>
          <ul className='list-disc list-inside'>
            <li>4 pasos básicos para conectarnos a la Base de datos en Sqlite3 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_14/clase_13/1_bd_conexion.py" target='_blank' className='link'>Ver código aquí</a></li>

            <li>Creamos las funciones que nos permiten: </li>
            <li className="pl-2">Crear la tabla productos</li>
            <li className="pl-2">Insertar un registro en la tabla</li>
            <li className="pl-2">Listar todos los registros de la tabla</li>
            <li className="pl-2">Aplicamos el bloque try-except para manejo de errores <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_14/clase_13/try_except.py" target="_blank" className="link">Código de soporte try-except</a></li>
            <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_14/clase_13/2_bd_metodos.py" target="_blank" className='link'>Metodos bd</a> </li>
            <li><a href="https://docs.google.com/presentation/d/1PqDI3YHZWt5xRdKMZ3JSrryLSDSgdE8d/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target="_blank" className="link">Ver PPT Clase 13</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Video grabado</h2>
          <a
            className='link'
            href='https://youtu.be/S_Wo8GuG-2U'
            alt="Video semana 14"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Resolver el cuestionario de clase 12 en el Campus Virtual</li>
            <li>Resolver el ejercicio que encuentran en el slide 27 del PPT de clase 13 (link arriba) </li>
            <li>Analizar y preparar en su VSCode este código base para implementar las funciones de BD en clase 14 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/entrega-final/2_pfi_estructura_.py" target="_blank" className="link">Ver código</a></li>
            <li>Nos reencontramos el miércoles 25 en el After Class</li>
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

        {/* Temas Clase 14 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 14 - lunes 30 de junio</h2>
          <ul className='list-disc list-inside'>
          <li>Adelantaremos la Ruta de avance para la Entrega del PFI planificada para la Clase 15</li>
            <li>Completaremos las funciones de manejo de BD: búsqueda de producto, actualizar producto y eliminar producto</li>
            <li className="font-semibold">Armaremos un modelo de Entrega final completo!</li>
          </ul>
        </div>
        {/* Temas Clase 15 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 15 - lunes 7 de julio</h2>
          <ul className='list-disc list-inside'>
            <li>Veremos en detalle los temas pendientes de la clase 14</li>
            <li>Profundizaremos operaciones CRUD</li>
            <li>Analizaremos Inyecciones SQL para temas de seguridad</li>
            <li>Veremos manejo de transacciones y control de errores</li>
            <li>Espacio para dudas sobre la Entrega final</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana14Class13