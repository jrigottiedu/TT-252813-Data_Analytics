import React from 'react'

const Semana8Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 14 de mayo</h1>
      <section className="home-info-container">
        <p className='font-bold pb-2'>Trabajamos en las opciones del Menú para la Pre-entrega</p>

        <a
          href="https://www.youtube.com/watch?v=giH54Gv74j0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 no-underline text-gray-700 hover:text-red-600 transition-colors duration-200 pb-5"
        >
          <span className="material-icons text-red-600 group-hover:text-red-700">ondemand_video</span>
          <span>Video de clase grabada</span>
        </a>


        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Versión 1 - Enfoque más simple *** recomendado *** <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/edit/master/semana_8/after_class/pre-entrega_version_pop.py" target='_blank' className='link'>Ver código</a></p>

          <p className='font-semibold'>Menú opción 1: Alta de productos</p>
          <ul className='list-disc list-inside'>
            <li>Declaramos una lista global llamada lista_productos que almacena todos los productos ingresados</li>
            <li>Para cada producto, el usuario ingresa: nombre, categoria y precio</li>
            <li>Solo validamos nombre, agregar validación en otros campos</li>
            <li>Cargamos esos datos en una sublista temporal llamada producto</li>
            <li>Usamos el método append para insertar la sublista producto, el la lista principal lista_productos</li>
          </ul>

          <p className='font-semibold'>Menú opción 2: Mostrar productos</p>
          <ul className='list-disc list-inside'>
            <li>Usamos un bucle for con range para generar los índices y luego iterar lista_productos</li>
            <li>Almacenamos en una variable temporal producto, cada sublista de lista_productos</li>
            <li>Usamos un print con los índice relativos para acceder a cada dato del producto</li>
          </ul>

          <p className='font-semibold'>Menú opción 3: Buscar productos</p>
          <ul className='list-disc list-inside'>
            <li>Aún sin acción</li>
          </ul>

          <p className='font-semibold'>Menú opción 4: Eliminar productos</p>
          <ul className='list-disc list-inside'>
            <li>El usuario primero ejecuta la opción 2 para averiguar el índice del producto a eliminar</li>
            <li>En esta opción, ingresa el índice del producto a eliminar</li>
            <li>usamos el método pop que recibe como argumento el índice a borrar</li>
            <li>*** Notamos que pop, al eliminar el producto, los índices se reacomodan, lo que podría generar confución en el usuario</li>
          </ul>

          <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/after_class/pop.py" target='_blank' className='link'>Ver ejemplos de uso de pop aplicados a lista_productos</a>
        </div>


        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Versión 2 - Variante, reemplazamos pop por clear <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/after_class/pre-entrega_version_clear.py" target='_blank' className='link'>Ver código</a></p>

          <p className='font-semibold'>Menú opción 1: Alta de productos</p>
          <ul className='list-disc list-inside'>
            <li>Igual que versión 1</li>
          </ul>

          <p className='font-semibold'>Menú opción 2: Mostrar productos</p>
          <ul className='list-disc list-inside'>
            <li>Hay que agregar la validación de la línea 57 para evitar error de índice</li>
          </ul>

          <p className='font-semibold'>Menú opción 3: Buscar productos</p>
          <ul className='list-disc list-inside'>
            <li>Aún sin acción</li>
          </ul>

          <p className='font-semibold'>Menú opción 4: Eliminar productos</p>
          <ul className='list-disc list-inside'>
            <li>Usamos el método clear en lugar de pop</li>
          </ul>
          <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/after_class/clear.py" target='_blank' className='link'>Ver ejemplos de uso de clear aplicados a lista_productos</a>
        </div>

        <div className='bg-gray-100 p-2 border border-gray-400 rounded-xl mb-10 w-full'>
          <p className='font-bold pb-2'>Versión 3 - Versión más robusta *** no es necesario para la pre-entrega *** <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/after_class/pre-entrega_version_id.py" target='_blank' className='link'>Ver código</a></p>

          <p className='font-semibold'>Menú opción 1: Alta de productos</p>
          <ul className='list-disc list-inside'>
            <li>A diferencia de las versiones anteriores, el usuario ingresa: ID, nombre, categoría y precio</li>
          </ul>

          <p className='font-semibold'>Menú opción 2: Mostrar productos</p>
          <ul className='list-disc list-inside'>
            <li>Usamos un bucle for sin range, ya que no necesitamos el índice, el ID esta en la sublista producto</li>
          </ul>

          <p className='font-semibold'>Menú opción 3: Buscar productos</p>
          <ul className='list-disc list-inside'>
            <li>Aún sin acción</li>
          </ul>

          <p className='font-semibold'>Menú opción 4: Eliminar productos</p>
          <ul className='list-disc list-inside'>
            <li>El usuario primero ejecuta la opción 2 para averiguar el ID del producto a eliminar</li>
            <li>En esta opción, ingresa el ID del producto a eliminar</li>
            <li>Usamos un bucle for para iterar la lista_productos y un condicional para validar el producto con ID ingresado</li>
            <li>Finalmente usamos el método remove para eliminarlo</li>
          </ul>

        </div>

      </section>
    </div>
  )
}

export default Semana8Afterclass