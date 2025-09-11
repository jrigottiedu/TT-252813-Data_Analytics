import React from 'react'

const Semana3Afterclass = () => {
    return (
        <div>
            <h1 className="title-afterclass">After Class | Miércoles 10 de septiembre</h1>
<section className="home-info-container">
                <h2 className='title-h2'>Resumen del After Class</h2>
                <ul className='list-disc list-inside'>
                    <li>Hoy Nicolás Boniface compartió un proyecto de Análisis de Datos en el que participó <a href="https://github.com/No-Country-simulation/equipo-c24-03-m-data" target='_blank' className='link'>Ver aquí</a></li>
                    <li>El proyecto es parte de "No Country" una plataforma que ofrece una experiencia inmersiva para profesionales de IT, trabajando de forma colaborativa sobre casos reales <a href="https://github.com/no-country-simulation">Ver más aquí</a></li>
                    <li>Tmabién hablamos sobre herramientas para comunicación/trabajo colaborativo, como ser <a href="https://slack.com/intl/es-es" target='_blank' className='link'>Slack</a>, <a href="https://www.notion.com/es" target='_blank' className='link'>Notion</a></li>
                    <li>En el chat también mencionaron sobre repositorios disponibles en Google Big Query <a href="https://cloud.google.com/bigquery/public-data?hl=es-419" target='_blank' className='link'>Ver aqu</a></li>
                    <li>También importamos un dataset de los que se usaron en el proyecto de Nicolás (ver en el Notebook de este After Class)</li>
                    <li>Surgió una pregunta muy interesante sobre el tipo de dato cuando importamos datasets con Pandas. En principio "infiere" el tipo de dato</li>
                    <li>Pueden hacer algunas pruebas con este <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/After_class_3/Copia_Clase_03_NB2_Import_datasets_con_pandas.ipynb" target='_blank' className='link'>Notebook</a> y este <a href="https://docs.google.com/spreadsheets/d/1LeWVQ0Pd9XlQ70oTWggueRGLBXISMTGDiLG7wZ6otSI/edit?gid=887293477#gid=887293477" target='_blank' className='link'>Google Sheet</a>cambiando el tipo de dato a la columna "edad_agregada"</li>
                    <li>Surgió otra pregunta sobre los tipos de archivos que se pueden importar con Pandas, ver aqui los tipos compatibles <a href="https://pandas.pydata.org/docs/reference/io.html" target='_blank' className='link'>Pandas_input_output</a></li>
                    <li>Para archivos xlsx usamos read_excel(), para archivos ods (open source) también usamos read_excel con el atributo engine="odf"</li>
                    <li>Aclaración sobre openpyxl, es el motor que usa Pandas para importar el formato xlsx</li>
                </ul>


                <h2 className='title-h2 pt-10'>Recordatorios</h2>
                <ul className='list-disc list-inside'>
                    <li>Nos encontramos nuevamente el Lunes 15/9 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
                </ul>

                {/* Grabación de After Class en Youtube */}
                <div className='py-5'>
                    <h2 className='title-h2'>Grabación del After Class 1</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=HkaI22RWsg0'
                        alt="Video semana 3 After Class "
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Semana3Afterclass
