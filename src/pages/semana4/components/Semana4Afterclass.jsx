import React from 'react'

const Semana4Afterclass = () => {
    return (
        <div>
            <h1 className="title-afterclass">After Class | Miércoles 17 de septiembre</h1>
<section className="home-info-container">
                <h2 className='title-h2'>Resumen del After Class</h2>
                <ul className='list-disc list-inside'>
                    <li>Resolvimos el cuestionario de la clase 4</li>
                    <li>Resolvimos el ejercicio de tarea sobre identificación de nulos y duplicados en el dataset sobre mediciones de temperatura de 150 pacientes durante 10 días</li>
                    <li>Mencionamos los métodos de imputación y dejamos un interrogante para la próxima clase</li>
                    <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/After_class_4/After_Class_Datos_nulos_y_duplicados.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                    <li>Al inicio del after conversamos sobre este artículo de Medium con links a videos tutoriales sobre Power BI y Python <a href="https://medium.com/@brittanycity/100-days-of-data-analytics-a-complete-guide-d278ac34655b" target='_blank' className='link'>Ver aquí</a></li>
                </ul>


                <h2 className='title-h2 pt-10'>Recordatorios</h2>
                <ul className='list-disc list-inside'>
                    <li>Nos encontramos nuevamente el Lunes 22/9 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
                </ul>

                {/* Grabación de After Class en Youtube */}
                <div className='py-5'>
                    <h2 className='title-h2'>Grabación del After Class 4</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=WDVpOZcUyCA'
                        alt="Video semana 4 After Class "
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Semana4Afterclass