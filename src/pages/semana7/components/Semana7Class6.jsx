import React from 'react'

const Semana7Class6 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 7 | Lunes 6 de octubre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Completamos el Notebook de clase 6 con el análisis de conversión de tipo de datos <span className='font-semibold'>"datetime"</span> , un pilar fundamental de cualquier análisis de datos</li>
                        <li>En el mismo notebook, completamos los <span className='font-semibold'>filtros condicionales</span>  con contains (para búsquedas flexibles) y isin (para búsquedas con listas)</li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_11_Clase_6/Clase_06_NB1_Resuelto.ipynb" target='_blank' className='link'>Ver NB clase 6</a></li>
                        <li>Planteamos otro de los pilares del análisis de datos, <span className='font-semibold'>agrupamiento/agregaciones</span>. Importamos un dataset de Kaggle con datos de ventas de productos, con varias jerarquías (país, región, estado, ciudad) y (categoría, subcategoría) de manera de poder apreciar el potencial de la herramienta en el análisis de ventas.</li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_13_Clase_7/Clase_07_NB1_Agregacion.ipynb" target='_blank' className='link'>Ver NB clase 7 iniciado</a></li>
                        <li>Si bien en la próxima clase vamos a completar lo que nos falta sobre agrupamiento/agregación y los items de filtrado con filter y query, les comparto el Notebook completo para que vayan explorando si tienen tiempo:</li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_13_Clase_7/Clase_07_NB1_Agregacion_Resuelto.ipynb" target='_blank' className='link'>Ver NB clase 7 resuelto</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=LQNH8B_Kojg'
                        alt="Video semana 6 clase 6"
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>
           
                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Este <span className='font-semibold'>miércoles 8/10 a las 19:00 Hs</span>  por Meet, tendremos nuestro <span className='font-semibold'>Taller de la Pre-entrega</span> , para comenzar a armar el código en un Notebook desde cero.</li>
                        <li>Los que adeuden el Cuestionario # 3 de la clase 6, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=wrZPY2894qc" target="_blank" className='link'>Ver aquí resolución</a></li>
                    </ul>
                </div>

                {/* Temas Clase 8 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 8</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a completar el NB sobre agrupamiento/agregación</li>
                        <li>Vamos a completar el NB sobre filtrado con Filter y Query</li>
                        <li>Comenzamos Join/Merge, para unir diferentes datasets/fuentes de datos, el último requisito que nos queda ver para la pre-entrega</li>
                        <li>A partir de clase 9 comenzamos con Estadística Descriptiva y seguimos modelos de regresión y visualización de datos</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana7Class6