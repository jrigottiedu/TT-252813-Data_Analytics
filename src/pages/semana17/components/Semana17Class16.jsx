import React from 'react'

const Semana17Class16 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 17 | Lunes 14 de julio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='font-semibold py-2'>Refactorizamos la pre-entrega para el PFI</p>
          <ul className='list-disc list-inside'>
            <li>Hoy partimos del archivo codigo_modelo_pre_entrega.py <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/pre-entrega/codigo_modelo_pre_entrega.py" target='_blank' className='link'>Ver en Github</a></li>
            <li>Lo refactorizamos, implementando funciones e integrando con la Base de Datos de Sqlite, resultando el archivo main.py <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_17/clase_16/main.py" target='_blank' className='link'>Ver en Github</a></li>
            <li>Para las funciones/métodos que manejan los datos en la base, tomamos las funciones listadas en la sección SQL de nuestra Wiki <a href="https://tt-25011-python.vercel.app/#/sql" target='_blank' className='link'>Ver aquí</a></li>
            <li>Armamos el archivo bd_metodos.py, ajustando esas funciones a los nuevos requerimientos (agregamos los campos descripción y cantidad a nuestra tabla productos) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_17/clase_16/bd_metodos.py" target='_blank' className='link'>Ver en Github</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Video grabado</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=gOj3ZG8v8K0'
            alt="Video semana 17"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Miércoles 16 de julio esta el Taller de la Entrega Final</li>
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


        {/* Temas Clase 17 */}
        <div>
          <h2 className='title-h2'>Clase extra - lunes 21 de julio</h2>
          <ul>
            <li>Vamos a armar un taller de 1 hora aproximadamente para ver Git-Github para control de versionado</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana17Class16