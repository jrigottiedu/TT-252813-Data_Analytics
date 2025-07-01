import React from 'react'

const Semana15Class14 = () => {
  return (
    <div>
      <h1 className="title-class">Clase 15 | Lunes 30 de junio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen de clase</h2>
          <p className='pt-2'>Escribimos todas las consultas SQL desde Python!</p>
          <ul className='list-disc list-inside'>
            <li>Hoy completamos las funciones que nos permiten: </li>
            <li className="pl-2">Leer producto por id</li>
            <li className="pl-2">Leer productos por nombre</li>
            <li className="pl-2">Actualizar el precio de un registro según el id</li>
            <li className="pl-2">Eliminar un producto a partir de su id</li>
            <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_15/clase_14/2_bd_metodos.py" target="_blank" className='link'>Metodos bd</a> </li>
            <li>Tengan a mano las consultas SQL más usadas <a href="https://drive.google.com/file/d/1zNsMyqoDwCAv9tlkPusWHwZa3hI-v72O/view" target='_blank' className='link'>Ver PDF con consultas SQL</a></li>
          </ul>
          <p className='pt-5 font-semibold'>Luego trabajamos con la entrega final</p>
          <ul className='list-disc list-inside'>
            <li>Ver PPT a partir del Slide 25 "Entrega de Proyecto" con la consigna <a href="https://docs.google.com/presentation/d/1Nv7EBmhtGzUecTDci3sYHObt8epqdQA0/edit?slide=id.p1#slide=id.p1" target='_blank' className='link'></a></li>
            <li>Comenzamos a desarrollar el código en el archivo principal <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/entrega-final/2_pfi_estructura_.py" target='_blank' className='link'>Ver código Estructura PFI</a></li>
            <li>Copiamos, pegamos y adaptamos las funciones vistas en las últimas dos clases (crear tabla productos, insertar producto y eliminar producto) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/entrega-final/bd_metodos.py" target='_blank' className='link'>Ver código métodos bd</a></li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Video grabado</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=UigGf2Q-mEE'
            alt="Video semana 15"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>

        {/* Recordatorios */}
        <div>
          <h2 className='title-h2'>Recordatorios</h2>
          <ul className='list-disc list-inside'>
            <li>Resolver el cuestionario de clase 12 en el Campus Virtual - encuentran la resolución en el video del after class <a href="https://www.youtube.com/watch?v=Nepb9FpFUzI" target='_blank' className='link'>Ver aquí</a></li>
            <li>A partir de hoy pueden comenzar a subir el PFI al campus!</li>
            <li>Nos reencontramos el miércoles 2 de julio en el After Class</li>
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

        {/* Temas Clase 15 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 15 - lunes 7 de julio</h2>
          <ul className='list-disc list-inside'>
            <li>Vamos a completar el ejemplo modelo del PFI</li>
            <li>Veremos en detalle los temas pendientes de la clase 14</li>
            <li>Profundizaremos operaciones CRUD</li>
            <li>Analizaremos Inyecciones SQL para temas de seguridad</li>
            <li>Veremos manejo de transacciones y control de errores</li>
            <li>Espacio para dudas sobre la Entrega final</li>
            <li>Dado que el miércoles 9 es feriado, proponemos un espacio para consultas el sábado 12 (el horario lo conversamos en clase)</li>
          </ul>
        </div>
        {/* Temas Clase 16 */}
        <div>
          <h2 className='title-h2'>Temas a ver en Clase 16 - lunes 14 de julio</h2>
          <ul className='list-disc list-inside'>
            <li>Vamos a preparar un taller de Git-Github para versionado del código y trabajo colaborativo - 1 hora</li>
            <li>Espacio para dudas sobre la Entrega final</li>
          </ul>
        </div>
        {/* Taller Miercoles 16 */}
        <div>
          <h2 className='title-h2'>Taller PFI - Miércoles 16 de julio</h2>
          <ul className='list-disc list-inside'>
            <li>Recuerden que tendremos un After Class Especial, en el que haremos un modelo de entrega del PFI completo en un Taller de 2 horas!</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default Semana15Class14