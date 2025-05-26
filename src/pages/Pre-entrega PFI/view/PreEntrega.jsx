import React from 'react'

const PreEntrega = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-6">
            <h1 className="title-preEntrega">C25011 - Pre-entrega PFI</h1>

            <div className="mb-4 bg-amber-50 p-2">
                <div className="text-sm text-gray-600 space-y-2">
                    <div>
                        <strong>Fecha de entrega: Hasta el domingo 1 de junio a la medianoche</strong>
                    </div>
                    <div>
                        <strong>Modalidad de entrega:</strong> Archivo .py en un repositorio en la nube (Google Drive)
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
                    </div>
                </div>

            </div>

            <h2 className="text-xl font-semibold mb-2">Consigna</h2>

            <div className="space-y-6 text-gray-800">
                <div>
                    <h3 className="font-semibold">1. Ingreso de datos de productos</h3>
                    <p>
                        El sistema debe permitir ingresar datos básicos de los productos: nombre, categoría y precio (sin centavos).
                        Estos datos deben almacenarse en una lista, donde cada producto sea representado como una sublista de tres elementos.
                    </p>
                    <p className="italic text-sm mt-1">Menú: Alta de productos – Validar nombre (str), categoría (str o lista), precio (int).</p>
                </div>

                <div>
                    <h3 className="font-semibold">2. Visualización de productos registrados</h3>
                    <p>
                        El programa debe incluir una funcionalidad para mostrar todos los productos ingresados, de forma ordenada y numerada.
                    </p>
                    <p className="italic text-sm mt-1">Menú: Mostrar productos – Usar índice para numeración.</p>
                </div>

                <div>
                    <h3 className="font-semibold">3. Búsqueda de productos</h3>
                    <p>
                        Permitir buscar productos por nombre y mostrar coincidencias. Si no se encuentran, informar al usuario.
                    </p>
                    <p className="italic text-sm mt-1">Menú: Buscar productos – Mostrar coincidencias.</p>
                </div>

                <div>
                    <h3 className="font-semibold">4. Eliminación de productos</h3>
                    <p>
                        Permitir eliminar un producto por su posición (número) en la lista.
                    </p>
                    <p className="italic text-sm mt-1">Menú: Eliminar productos – Solicitar número de posición.</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Requisitos</h2>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                    <li>Usar condicionales para el menú y validaciones.</li>
                    <li>Usar listas para almacenar los datos.</li>
                    <li>Menú con opciones: agregar, visualizar, buscar y eliminar productos.</li>
                    <li>Utilizar bucles <code>while</code> y <code>for</code>.</li>
                    <li>Validar las entradas del usuario.</li>
                    <li>El programa debe funcionar hasta que se elija salir.</li>
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Consejos</h2>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                    <li>Usá listas y bucles para recorrer los datos.</li>
                    <li>Validá los datos usando condicionales.</li>
                    <li>Organizá la presentación de la información.</li>
                </ul>
            </div>
        </div>
    )
}

export default PreEntrega
