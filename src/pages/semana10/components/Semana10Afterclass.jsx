import React from 'react'

const Semana10Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 28 de mayo</h1>
      <section className="home-info-container">
        <p className='font-bold pb-2'>Resolvimos los ejercicios de funciones parte I</p>

        <a
          href="https://www.youtube.com/watch?v=siTMDxKl9dw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 no-underline text-gray-700 hover:text-red-600 transition-colors duration-200 pb-5"
        >
          <span className="material-icons text-red-600 group-hover:text-red-700">ondemand_video</span>
          <span>Resolvimos los ejercicio 1, 2, 3 y evaluamos la IA claude.ai</span>
        </a>


        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Resolución ejercicio 1 </p>

          <p className='font-semibold'>Código con la Resolución <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/after_class/ejercicio_1.py" target='_blank' className='link'>Ver código</a></p>
          <ul className='list-disc list-inside'>
            <li>Función que itera un producto y lo muestra en pantalla</li>
          </ul>
        </div>

        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Función que muestra en pantalla los productos de lista_productos </p>

          <p className='font-semibold'>Código con la Resolución <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/after_class/ejercicio_2.py" target='_blank' className='link'>Ver código</a></p>
          <ul className='list-disc list-inside'>
            <li>Iteramos la lista_productos</li>
            <li>Para cada producto, mostramos en pantalla nombre, categoría y precio</li>
          </ul>
        </div>

        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Funciones anidadas: combinamos ejercicio 1 y 2 </p>

          <p className='font-semibold'>Código con la Resolución <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/after_class/ejercicio_3.py" target='_blank' className='link'>Ver código</a></p>
          <ul className='list-disc list-inside'>
            <li>Iteramos la lista_productos</li>
            <li>Al momento de mostrar en pantalla los campos, invocamos a la función del ejercicio 1</li>
            <li>Asi conseguimos anidar funciones</li>
          </ul>
        </div>

        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Función que clasifica el clima - surgió de la clase </p>

          <p className='font-semibold'>Código con la Resolución <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/after_class/funcion_clima.py" target='_blank' className='link'>Ver código</a></p>
          <ul className='list-disc list-inside'>
            <li>La función recibe algunos argumentos, cielo, temperatura, humedad, etc</li>
            <li>Evaluamos las variables dentro de un switch e informamos</li>
          </ul>
        </div>

        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Aplicando colores a las impresiones en consola </p>

          <p className='font-semibold'>Código con la Resolución <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_10/after_class/tunning_claude_ai.py" target='_blank' className='link'>Ver código</a></p>
          <p className='font-semibold'><a href="https://claude.ai/new" target='_blank' className='link'>Claude.ai </a></p>
          <ul className='list-disc list-inside'>
            <li>Usamos la ia Claude.ai</li>
            <li>Le pedimos que le aplique colores a las impresiones en pantalla usando Colorama </li>

          </ul>
        </div>



      </section>
    </div>
  )
}

export default Semana10Afterclass