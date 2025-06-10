import React from 'react'

const EntregaFinal = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-6">
            <h1 className="title-EntregaFinal">C25011 - Entrega Final PFI</h1>

            <div className="mb-4 bg-amber-50 p-2">
                <div className="text-sm text-gray-600 space-y-2">
                    <div>
                        <strong>Fecha de entrega: en principio hasta el lunes 14 de julio (vemos si podemos extenderlo unos días más)</strong>
                    </div>
                    <div>
                        <strong>Modalidad de entrega:</strong> Archivo .py en un repositorio en la nube (Google Drive)
                    </div>
                    {/* <div>
                        <strong>Video:</strong> Cómo generar el código, subirlo al Drive y completar la entrega en el campus 
                        <a href="https://youtu.be/PTvgjX2azDE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link underline text-blue-600 hover:text-blue-800 pl-1">Ver aquí</a>
                    </div>
                    <div>
                        <strong>
                            Archivo Python con código modelo de Resolución:{' '}
                            <a
                                href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/pre-entrega/codigo_modelo_pre_entrega.py"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link underline text-blue-600 hover:text-blue-800"
                            >
                                Ver en Github
                            </a>
                        </strong>
                    </div> */}
                </div>

            </div>

            <h2 className="text-xl font-semibold mb-2">Consigna</h2>

            <div className="space-y-6 text-gray-800">
                <div>
                    <h3 className="font-semibold">1. Base de datos</h3>
                    <p>Crear una base de datos SQLite llamada 'inventario.db' para almacenar los datos de los productos. La tabla 'productos' debe contener los siguientes campos:</p>
                    <ul className='list-disc list-inside'>
                        <li>'id': Identificador único del producto (clave primaria, autoincremental)</li>
                        <li>'nombre': Nombre del producto (texto, no nulo)</li>
                        <li>'descripcion': Breve descripción del producto (texto)</li>
                        <li>'cantidad': Cantidad disponible del producto (entero, no nulo)</li>
                        <li>'precio': Precio del producto (real, no nulo)</li>
                        <li>'categoria': Categoría a la que pertenece el producto (texto)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold">2. Funcionalidades de la aplicación</h3>
                    <ul className='list-disc list-inside'>
                        <li><span className='font-semibold'>Registro de productos:</span> La aplicación debe permitir agregar nuevos productos al inventario, solicitando los siguientes datos: nombre, descripción, cantidad, precio y categoría</li>
                        <li><span className='font-semibold'>Visualización de productos:</span> La aplicación debe mostrar todos los productos registrados en el inventario, incluyendo su ID, nombre, descripción, cantidad, precio y categoría.</li>
                        <li><span className='font-semibold'>Actualización de productos:</span> La aplicación debe permitir actualizar la cantidad disponible de un producto específico utilizando su ID</li>
                        <li><span className='font-semibold'>Eliminación de productos:</span> La aplicación debe permitir eliminar un producto del inventario utilizando su ID</li>
                        <li><span className='font-semibold'>Búsqueda de productos:</span> La aplicación debe ofrecer una funcionalidad para buscar productos por su ID, mostrando los resultados que coincidan con los criterios de búsqueda. De manera opcional, se puede implementar la búsqueda por los campos nombre o categoría</li>
                        <li><span className='font-semibold'>Reporte de bajo stock:</span> La aplicación debe generar un reporte de productos que tengan una cantidad igual o inferior a un límite especificado por el usuario o usuaria</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold">3. Interfaz de usuario o usuaria</h3>
                    <ul className='list-disc list-inside'>
                        <li>Implementar una interfaz de usuaria o usuario básica para interactuar con la base de datos a través de la línea de comandos (terminal). La interfaz debe incluir un menú principal con las opciones necesarias para acceder a cada funcionalidad descrita anteriormente.</li>
                        <li>Opcional: Utilizar la librería 'colorama' para mejorar la legibilidad y experiencia de usuario en la terminal, añadiendo colores a los mensajes y opciones.</li>
                    </ul>
                    <p className="italic text-sm mt-1">Menú: Buscar productos – Mostrar coincidencias.</p>
                </div>

                <div>
                    <h3 className="font-semibold">4. Requisitos técnicos</h3>
                    <ul>
                        <li>El código debe estar bien estructurado, utilizando funciones para modularizar la lógica de la aplicación</li>
                        <li>Los comentarios deben estar presentes en el código, explicando las partes clave del mismo</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default EntregaFinal
