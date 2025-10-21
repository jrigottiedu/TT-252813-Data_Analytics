import React from 'react'

const Semana9Class8 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 9 | Lunes 20 de octubre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Extendimos la fecha de la Pre-Entrega hasta el <span className='font-semibold'>lunes 27/10 - ULTIMO DIA</span></li>
                        <li>Comenzamos con estadística descriptiva</li>
                        <li>Medidas de posición: media, mediana y moda</li>
                        <li>Medidas de dispersión o variabilidad: rango, varianza, desvío standard</li>
                        <li>RIC (rango intercuartil), Q1, Q2, Q3, outliers - intro a boxplots</li>
                        <li>Distribución de la muestra - intro a histogramas</li>
                        <li><a href="https://colab.research.google.com/drive/16P9TtxUm7TcR7M9ln83iXwBdPbO6kuUz#scrollTo=RJnGRSzBHpax" target='_blank' className='link'>Link Notebook Clase 9 Googlge Drive</a></li>
                        <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_9/Clase_9_Estadistica_descriptiva.ipynb" target='_blank' className='link'>Link Notebook Clase 9 Github</a></li>
                        <li><a href="https://drive.google.com/file/d/1VBptkBlvOjZWHGO6y6Ori4KkuuDtu-Ak/view?usp=sharing" target='_blank' className='link'>PDF teoría</a></li>
                        <li><a href="https://docs.google.com/presentation/d/15hOFTz9BShLrCto1MWIeGcTPOER9ZnJA/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>PPT Presentación</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href=''
                        alt="Video semana 9 clase 9"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 2 de la clase 4</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=WDVpOZcUyCA" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 3 de la clase 6</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=wrZPY2894qc" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Recordamos el link de la Wiki con el resumen, datasets, template para la resolución de la pre-entrega y link al Video <a href="https://tt-252813-data-analytics.vercel.app/#/semana7" target='_blank' className='link'>Ver resumen aquí</a></li>
                        <li>Nos encontramos el miércoles 22 de octubre a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                    </ul>
                </div>

                {/* Temas Clase 9 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 10</h2>
                    <ul className='list-disc list-inside'>
                        <li>Visualización de datos</li>
                        <li>Vamos a ver el Dataset Iris para comenzar con las primeras gráficas</li>
                        <li>Agregamos otro dataset para generar diversiadad y más casos de estudio</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana9Class8