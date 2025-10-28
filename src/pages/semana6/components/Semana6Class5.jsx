import React from 'react'

const Semana6Class5 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 6 | Lunes 29 de septiembre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Ya esta <span className='font-semibold'>disponible la consigna para la pre-entrega</span> que pueden <a href="https://gamma.app/docs/Pre-Entrega-de-Proyecto-4eq8frsd0ubt429?mode=doc" target='_blank' className='link'>Ver aquí</a></li>
                        <li>En clase 7 les vamos a dar más detalles, y recuerden que el After Class del miércoles 8/10 será un <span className='font-semibold'> taller de 90 minutos dedicado a a la pre-entrega</span></li>
                        <li>El área de carga de la pre-entrega en el campus se habilita el lunes 13/10 (recuerden que deben estar al día con el cuestionario de la clase 6) y tienen una semana hasta el lunes 20/10</li>
                        <li>Hoy, en clase 6, finalizamos  el Notebook de Clase 5 con los siguientes temas:</li>
                        <li>Análisis y tratamiento de duplicados</li>
                        <li>Análisis y tratamiento de nulos, con dropna y fillna</li>
                        <li>Normalización (mencionamos Regex) y ajuste de tipo de dato (nos queda ver datetime)</li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_5/Clase_05_NB1.ipynb" target='_blank' className='link'>Ver Notebook Clase 5 aquí</a></li>
                        <li>Comenzamos el Notebook de <span className='font-semibold'>Clase 6 sobre filtros</span>, llegamos a ver algunas estructuras simples, para filas y columnas con condicionales. En clase 7 completamos con los métodos filter (similares a consultas SQL) y querie</li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_11_Clase_6/Clase_06_NB1.ipynb" target='_blank' className='link'>Ver Notebook Clase 6 con lo que vimos en clase</a></li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_11_Clase_6/Clase_06_NB1_Resuelto.ipynb" target='_blank' className='link'>Ver Notebook Clase 6 completo para que puedan adelantar</a></li>


                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=gcO17ecfamk'
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
                        <li>Hoy se habilita el cuestionario de clase 6 (lo necesitan para habilitar la pre-entrega)</li>
                        <li>Resolver la actividad de tarea que encuentran en el campus o en el PPT de clase 6 - <a href="https://docs.google.com/presentation/d/1f66sWARz_aQMQsven6fKKLDcuJ0_Y1PG/edit?slide=id.p13#slide=id.p13" target='_blank' className='link'>Ver aquí</a></li>
                        <li>Nos encontramos el miércoles 1 de octurbre las 19:00 en Meet - tienen el link en la sección Inicio</li>
                        <li>Vamos a resolver el ejercicio de la clase 6 y el cuestionario de hoy</li>
                    </ul>
                </div>

                {/* Temas Clase 5 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 7</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a terminar de ver métodos de filtro</li>
                        <li>Transformación, para crear nuevas columnas a partir de los datos</li>
                        <li>Funciones de agregación, similares a las consultas de SQL</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Semana6Class5