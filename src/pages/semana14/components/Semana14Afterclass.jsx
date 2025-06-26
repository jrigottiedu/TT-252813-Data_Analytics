import React from 'react'

const Semana14Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 25 de junio</h1>
      <section className="home-info-container">
        <p className='font-bold pb-2'>Alta de producto integrado con Base de datos!</p>

        <a
          href="https://www.youtube.com/watch?v=Nepb9FpFUzI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 no-underline text-gray-700 hover:text-red-600 transition-colors duration-200 pb-5"
        >
          <span className="material-icons text-red-600 group-hover:text-red-700">ondemand_video</span>
          <span>Video After Class</span>
        </a>


        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-semibold'>Temas destacados</p>
          <ul className='list-disc list-inside'>
            <li>Respondimos el cuestionario de clase 12: viene con preguntas muy interesantes de módulos, bloques try-except y manejo de archivos</li>
            <li>Aunque las respuestas puedan no aparecer en el mismo orden, ver código de soporte <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_14/after_class/cuestionario_6.py" target="_blank" className='link'>Ver en Github</a></li>
            <li>Resolvimos el ejercicio de la clase 13, que consiste el integrar el alta de productos con Sqlite</li>
            <li>Reutilizamos las funciones db_crear_tabla_producto(), db_insertar_producto(), db_leer_productos()</li>
            <li>Exploramos que sucede si insertamos registros con campos vacios o datos no unicos</li>
            <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_14/after_class/ejercicio.py" target='_blank' className='link'>Ver código en Github</a></li>
            <li>Recuerden que siempre es buena práctica armar diagramas de flujo y/o pseudocódigo antes de comenzar a programar</li>
            <li>Aunque no llegamos con el tiempo, también se sugiere armar gráficos de entidad/relación previo a armar la estructura de la base de datos</li>
            <li>Podemos usar estas plataformas web:</li>
            <li className='pl-2'><a href="https://draw.io/" target='_blank' className='link'>Draw.io</a></li>
            <li className='pl-2'><a href="https://www.lucidchart.com/" target='_blank' className='link'>Lucidchart</a></li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Semana14Afterclass