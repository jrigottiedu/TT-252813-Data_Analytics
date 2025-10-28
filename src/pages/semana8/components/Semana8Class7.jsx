import React from 'react'

const Semana8Class7 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 8 | Lunes 13 de octubre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Dedicamos los primeros minutos de clase para conversar sobre el Taller de la Pre-entrega del Proyecto</li>
                        <li>Recordamos el link de la Wiki con el resumen, datasets, template para la resolución de la pre-entrega y link al Video <a href="https://tt-252813-data-analytics.vercel.app/#/semana7" target='_blank' className='link'>Resumen Taller Pre-entrega</a></li>
                        <li>Combinamos datasets usando "concat", "merge" y "join" <a href="https://docs.google.com/presentation/d/1dZrpJJmNtjEhYqQP2fOQGWjySJJlAntY/edit?slide=id.p16#slide=id.p16" target='_blank' className='link'>Ver PPT - a partir del slide 16</a></li>
                        <li>Generamos dos datasets, simulando datos de dos estaciones meterológicas que generan datos de temperatura, presión y humedad</li>
                        <li>Aplicamos "concat", "merge" y "join" para comprender cómo funciona cada uno.</li>
                        <li>Luego estudiamos brevemente el concepto de "joins" en SQL a partir de la teoría de conjuntos, haciendo foco en "on" para elegir la columna en donde aplicar el join y en los tipos de join más comunes, "inner", "left", "right", "outter". Se sugiere complementar con este link/imagen <a href="https://upload.wikimedia.org/wikipedia/commons/c/c9/Joins_del_SQL.svg" target='_blank' className='link'>Ver en Wikipedia</a></li>
                        <li>En la segunda parte, trabajamos con 3 datasets que importamos desde Kaggle sobre reviews de usuarios sobre hoteles <a href="https://www.kaggle.com/code/sonawanelalitsunil/international-hotel-booking-analytics-ml-34-75/notebook" target='_blank' className='link'>Ver en Kaggle</a> </li>
                        <li>Analizamos 3 queries SQL, comenzando por un join simple entre la tabla "reviews" y "hotels" que luego fuimos desarrollando en el Colab usando merge</li>
                        <li>Aqui observamos el potencial de Pandas, uniendo dataframes, y luego aplicamos filtros y agregación para encontrar un Hotel de Argentina</li>
                        <li>Como "Bonus Track", encontramos que el dataset provee los datos de latitud y longitud del Hotel, que podemos usar para hacer "enrichment" y complementar los datos originales, por ejemplo con la dirección del hotel, haciendo peticiones a una API (Open Street Map)</li>
                        <li><a href="https://colab.research.google.com/drive/1SL2QJ90wsoPh9Qi3_gauFSMDn_77OXts#scrollTo=psGGQmT1Opr1" target='_blank' className='link'>Ver Notebook Clase 8 Colab - Concat - Merge - Join</a></li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/_15_Clase_8/Clase_08_Cat_Merge_Join.ipynb" target='_blank' className='link'>Ver Notebook Clase 8 Github - Concat - Merge - Join</a></li>
                    </ul>
                </div>

                {/* Miscelaneas */}
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <p>Durante el receso, se armo un lindo debate e intercambio de información sobre sitios web con herramientas de análisis de datos y sitios web con APIs de finanzas</p>
                    <ul className='list-disc list-inside'>
                        <li><a href="https://jasp-stats.org/" target='_blank' className='link'>Tool desarrollada por la Universidad de Amsterdan</a></li>
                        <li><a href="https://www.binance.com/en/binance-api" target='_blank' className='link'>API Binance</a></li>
                        <li><a href="https://github.com/ranaroussi/yfinance" target='_blank' className='link'>Yfinance - Yahoo Finance</a></li>
                        <li><a href="https://www.bybit.com/en/register?ref=8BXEPPP&source=home&page_section=herobanner&button_name=signup&regPhone=&gad_source=1" target='_blank' className='link'>By Bit</a></li>
                        <li><a href="https://es.tradingview.com/" target='_blank' className='link'>TradingView</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=Seyvw_bZJi8'
                        alt="Video semana 8 clase 8"
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 2 de la clase 4</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=WDVpOZcUyCA" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 3 de la clase 6</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=wrZPY2894qc" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Recordamos el link de la Wiki con el resumen, datasets, template para la resolución de la pre-entrega y link al Video <a href="https://tt-252813-data-analytics.vercel.app/#/semana7" target='_blank' className='link'>Ver resumen aquí</a></li>
                        <li>Nos encontramos el miércoles 15 de octubre a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                    </ul>
                </div>



                {/* Temas Clase 9 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 9</h2>
                    <ul className='list-disc list-inside'>
                        <li>Nos quedan ver algunas cositas de filtros y agregación de clase 7, pero pueden adelantar la resolución aquí <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_6/Clase_06_NB1_Resuelto.ipynb" target='_blank' className='link'>Resolución NB Clase 7</a></li>
                        <li>Comenzamos con Estadística Descriptiva!!</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana8Class7