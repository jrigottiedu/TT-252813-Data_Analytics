import React from 'react'

const Semana5Class4 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 5 | Lunes 22 de septiembre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Conversamos sobre la importancia de la limpieza de datos en el proceso de transformar datos crudos "raw data" en información útil para la toma de decisiones - <a href="https://docs.google.com/presentation/d/1KAz0CV8tNTxJitlUnm7EVzOdBMgzH9Yk/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>Ver PPT Clase 5</a></li>
                        <li>Mencionamos la web <span className='font-semibold'>"Hugging Face"</span>, desde donde descargar modelos de Machine Learning hasta datasets para Análisis de Datos <a href="https://huggingface.co/datasets" target='_blank' className='link'>Ver aquí</a> </li>
                        <li>Desde el Notebook de Colab, vimos con detalle el uso de <span className='font-semibold'>duplicated()</span> para la detección de registros duplicados.</li>
                        <li>Y luego aplicamos el método <span className='font-semibold'>drop_duplicates()</span> con distintos argumentos para customizar la eliminación de registros.</li>
                        <li>Lo mismo hicimos con <span>isnull()</span> para la detección de celdas nulas o NaN y aplicamos el método <span className='font-semibold'>dropna()</span> para removerlos. También analizamos los posibles argumentos.</li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_5/Clase_05_NB1.ipynb" target='_blank' className='link'>Ver Notebook Clase 5 aquí</a></li>
                        <li>En la carpeta <span className='font-semibold'>"Datasets"</span> de Clase 3 encuentran los 3 datasets que se mencionan en este Notebook <a href="https://drive.google.com/drive/folders/1LI3HcSqcrSJ52YZAoQG0NNmdOnHVSJHG" target='_blank' className='link'>Ver aquí</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=vodYwzKVmvQ'
                        alt="Video semana 5 clase 5"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul>
                        <li>Los que adeuden el Cuestionario 2 de la clase 4, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=WDVpOZcUyCA" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Repasar los métodos vistos hoy en clase y resolver las actividades propuestas (detalladas en el PPT y en el Campus Virtual)</li>
                        <li>Nos encontramos el miércoles 24 a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                    </ul>
                </div>

                {/* Temas Clase 6 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 6</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a terminar de ver las técnicas de limpieza de datos para nulos con fillna, conversión de tipo de datos y normalización</li>
                        <li>Vamos a ver transformación de datos, generando nuevas columnas a partir de los campos del dataframe</li>
                        <li>Vamos a explorar más opciones de filtrado con Pandas</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana5Class4