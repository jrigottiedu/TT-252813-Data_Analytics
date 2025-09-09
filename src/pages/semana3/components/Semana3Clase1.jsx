import React from 'react'

const Semana3Clase1 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 3 | Lunes 8 de septiembre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Librería <span>Pandas</span>: para manejo de Dataframes y Series (muy utilizado en series de tiempo) <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_3/Clase_03_NB1_Intro_Pandas.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li>Sin datos no hay análisis, por eso dedicamos buena parte de la clase a explorar diferentes alternativas para importar datasets con Pandas, desde:</li>
                        <li className='ps-5'>Google Sheets</li>
                        <li className='ps-5'>Archivo csv en Google Drive</li>
                        <li className='ps-5'>Github</li>
                        <li className='ps-5'>Kaggle (datasets públicos y privados)</li>
                        <li className='ps-5'><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_3/Clase_03_NB2_Import_datasets_con_pandas.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li>Finalmente, importamos el famoso dataset "Titanic" para hacer un breve EDA (Análisis Exploratorio de Datos) con algunos métodos de Pandas <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_3/Clase_03_NB3_EDA_pandas.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li>Sobre el final de la clase presentamos un Notebook con Scope y Argumentos avanzados en Python que veremos luego en mayor detalle <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_3/Clase_03_NB4_Scope_y_Argumentos.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de Clase 3</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=cDb10sUPH4Q'
                        alt="Video semana 1 clase 1"
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Validar el acceso al Aula Virtual y <span className='font-semibold'>completar el cuestionario de la clase 2</span> - en caso que no puedan ingresar abrir ticket con la Mesa de Ayuda: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfVdqGxb4hA-2CHtCpR5XNUV3EVPB4E76F7UFdcTf8Z0TCUA/viewform" target='_blank' className='link'>completar el formulario</a></li>
                        <li>Realizar el Ejercicio de Pandas que encuentran en el Campus en el módulo Clase 3</li>
                        <li>Nos encontramos el <span  className='font-semibold'>miércoles 10/9 a las 19:00 hs en Meet en nuestro After Class</span>, vamos a practicar el uso de Pandas importando Datasets y haciendo algo de EDA.</li>
                    </ul>
                </div>

                {/* Temas para la próxima clase */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 4</h2>
                    <ul className='list-disc list-inside'>
                        <li>Introducción a la librería <span className='font-semibold'>NumPy</span>, que proporciona arrays multidimensionales (ndarray), mucho más rápidos y eficientes que las listas de Python </li>
                        <li>Profundizar el uso de Pandas en el <span className='font-semibold'>tratamiento de valores nulos y duplicados</span> de varios datasets</li>

                    </ul>
                </div>

                {/* Miscelaneas */}
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <ul className='list-disc list-inside'>
                        <li>Libro de referencia: <a href="https://wesmckinney.com/book/" target='_blank' className='link'>Python for Data Analysis, 3E (Wes McKinney)</a></li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Semana3Clase1