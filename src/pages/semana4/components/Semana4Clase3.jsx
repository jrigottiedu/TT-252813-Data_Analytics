import React from 'react'

const Semana4Clase3 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 4 | Lunes 15 de septiembre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Introducimos la librería <span className='font-semibold'>NumPy, </span>soporte de Pandas (dataframes) y Seaborn (visualización), debido a su enorme eficiencia para el manejo de Arrays multidimensionales y capacidad de cómputo científico; <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_07_Clase_4/Clase_04_NB1_NumPy_intro.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li><span className='font-semibold'>Detección de valores nulos: </span> los datasets suelen traer celdas, columas o registros como NULL, que al crear el dataframe (a través de la importación con Pandas) se convierten en NaN (Not a Number). Vimos el método <span className='font-semibold'>isnull() </span>para identificarlos y cuantificarlos; <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_07_Clase_4/Clase_04_Datos_nulos_y_duplicados.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li>A fin de poder evidenciar los datos NULL y su relación con los NaN, importamos el dataset <span className='font-semibold'>booking_db_null.sqlite </span><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/_07_Clase_4/Datasets" target='_blank' className='link'>que pueden descargar desde aquí</a>. Convertimos los valores de una columna a Null y al importarlos los vimos como NaN. Dado que la columna representa el promedio de todas las calificaciones, podríamos reconstruirlo, sin necesidad de tener que eliminar todos los registros. </li>
                        <li>Se invita a quienes esten interesados en explorar la importación de datos directamente desde una Base de Datos, revisar la actualización del Notebook de la clase 3, puntos 4.7 y 4.8 <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_3/Clase_03_NB2_Import_datasets_con_pandas.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li>Les comparto el PPT de hoy con las filminas adicionales para que tengan la vista global de los aspectos que veremos en este curso <a href="https://docs.google.com/presentation/d/10uHMyFVL96_CHOzouER5Q09uQxcbFm3p/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>Ver aquí.</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de Clase 4</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://youtu.be/j8jshMj-sY4'
                        alt="Video semana 4 clase 4"
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul>
                        <li>Hoy abre el <span className='font-semibold'>cuestionario 2 de la clase 4, </span> disponible en el Campus Virtual</li>
                        <li>Nos encontramos el miércoles 17 de septiembre a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                    </ul>
                </div>

                {/* Temas Clase 4 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 5</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a continuar con la detección y tratamiento de valores nulos, y completar lo que nos falto ver hoy sobre datos duplicados.</li>
                        <li>También vamos a ver corrección de tipos de datos, eliminación de caracteres no deseados, normalización, y filtrado de datos. </li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana4Clase3