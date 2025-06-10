import React from 'react'

const Semana12Class11 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 10 | Lunes 9 de junio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='text-orange-800 font-semibold'>Atención: hoy en clase 11, vimos los contenidos de clase 12 por el feriado del lunes 16</p>
          <p className='pt-2'>En nuestra clase de hoy comenzamos con Base de Datos!</p>
          <ul className='list-disc list-inside'>
            <li>Les comparto el PPT adaptado para esta clase <a href="https://docs.google.com/presentation/d/12tTP9MhWg4d9Oa5ExPDXvttGE46cdbqU/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>Descargar aquí</a></li>
            <li>Repasamos listas de listas y listas de diccionario como Intro a Tablas en Bases de datos <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_12/clase_11/intro_tablas.py" target='_blank' className='link'>Ver código</a></li>
            <li>Representamos las listas y la tabla en una hoja de cálculo <a href="https://docs.google.com/spreadsheets/d/1LpGS4apt6bqL2qu4L9uNJ5pA1xMgJGiivXZqbIl3rjg/edit?usp=sharing" target='_blank' className='link'>Ver en Google Sheet</a></li>
            <li>Mencionamos algunos motores de bases de datos y conversamos sobre las bases Relacionales y No relacionales </li>
            <li>En este curso, nosotros vamos a usar Sqlite3, que viene embebido en Python</li>
            <li>Instalamos DB Browser, una App para trabajar con Bases de Datos de manera gráfica <a href="https://sqlitebrowser.org/dl/" target='_blank' className='link'>Descargar aquí</a></li>
            <li>Vimos la teoría de tablas, concepto de campos y registros</li>
            <li>Luego los tipos de datos disponibles para los campos y sus propiedades</li>
            <li>Vimos el concepto de "Clave Primaria", única y autoincremental </li>
            <li>Creamos la tabla y le cargamos algunos registros</li>
            <li>Mencionamos SQL (Lenguage de consultas estructurados) que vamos a usar para crear tablas, y ejecutar las consultas básicas (SELECT - leer registro, INSERT - agregar registro, UPDATE - actualizar registro, DELETE - borrar registro</li>
            <li>Ejecutamos una consulta sencilla con SELECT * FROM productos</li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Grabación de la clase</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=T-i30KRASEw'
            alt="Video semana 11 clase 10"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>
        <div>
          <h2 className='title-h2'>Grabación complementaria (15 min)</h2>
          <h3>Instalación DB browser, creación de base "inventario" y tabla "productos". Inserción de registros y consultas SQL</h3>
          <p className='italic'>Les arme este video, porque el Zoom de Windows me desplazó el puntero del Mouse</p>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=h9eOMSrEzyg'
            alt="Video semana 11 clase 10"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Código de clase en Github */}
        <div>
          <h2 className='title-h2'>Código de referencia</h2>
          <ul className='list-disc list-inside'>
            <li><span className='font-semibold'>Revisen porfi este código sobre try-exept</span> que lo vamos a estudiar la clase próxima <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_12/clase_11/try_except.py" target='_blank' className='link'>Ver código en Github</a></li>
            <li>Para quienes vengan un poco más avanzados, aquí les adelanto algunas funciones para conectarse a la Base inventario desde Python <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_12/clase_11/intro_sqlite.py" target='_blank' className='link'>Ver en Github</a> </li>
          </ul>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>After Class miércoles 11 de junio esta dedicado a quienes adeudan Pre-entrega</li>
            <li>Lunes 16 de junio es feriado</li>
            <li>Repasen lo visto hoy con Bases de Datos</li>
            <li>Eliminen el archivo "inventario.db" y vuelvan a crearlo, puede guiarse por el video simplificado <a
              className='link'
              href='https://www.youtube.com/watch?v=h9eOMSrEzyg'
              alt="Video semana 11 clase 10"
              target="_blank">
              Ver aquí en Youtube
            </a></li>
            <li>Revisen porfi este código que les arme sobre excepciones <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_12/clase_11/try_except.py" target='_blank' className='link'>Ver código en Github</a></li>
            <li>Les voy a grabar un video con los temas de clase 11, asi lo van viendo</li>
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
          <h2 className='title-h2'>Temas a ver en Clase 12 - lunes 23 de junio</h2>
          <ul className='list-disc list-inside'>

            <li>Seguimos con try-except</li>
            <li>Y vamos a ir trabajando por partes, explorando cada una de las consultas SQL, analizándolas desde el DB Browser primero y luego desde Python a través de funciones dedicadas.</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana12Class11