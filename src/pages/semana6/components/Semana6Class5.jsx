import React from 'react'

const Semana6Class5 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 5 | Lunes 28 de abril</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Repasamos la estructura if-elif-else y match de la clase 4</li>
                        <li>Tomamos el ejemplo del menú desarrollado en clase 4 con match y lo incorporamos a un bucle While para que se ejecute hasta que el usuario lo desee <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_6/clase_5/repaso_intro_ciclo_while.py" target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Introducimos los Bucles While </li>
                        <li>En Python, un Bucle while se usa para repetir la ejecución de un bloque de código
                        mientras se cumpla una condición. </li>
                        <li>Vimos la sintáxis junto con contadores y acumuladores <a href='https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_6/clase_5/ciclo_while_acumulador.py' target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Introducimos el uso de la sentencia Break para detener el flujo del código <a href='https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_6/clase_5/ciclo_while_break.py' target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Introducimos el uso de la sentencias Continue para omitir la iteración y retornar a la condición del While <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_6/clase_5/ciclo_while_continue.py" target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Repasamos cadenas con índices para introducir listas <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_6/clase_5/repaso_cadenas_metodos.py" target='_blank' className='link'></a> </li>
                        <li><strong>Les arme un material complementario con el uso de while en casos prácticos, les sugiero que lo vean </strong>
                            <ul>
                                <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_6/clase_5/while_ejemplos_adicionales.py" target='_blank' className='link'>Ver código en Github</a></li>
                                <li><a href="https://www.youtube.com/watch?v=6kMHRyPJADI" target='_blank' className='link'>Ver video en Youtube</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=QJocbPCT-bM'
                        alt="Video semana 6 clase 5"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_6/clase_5"
                        alt="Semana 6 Clase 5 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul>
                        <li>Los que adeuden el Cuestionario 2 de la clase 4, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=avxXXV6U2-I&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=1" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Resolver el ejercio de la clase 5 que encuentran en el campus - <a href="https://docs.google.com/presentation/d/1Mh7kDSXG9TRIVTILQrJMGk3POIJlpe_Z/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>también puede ver aquí</a></li>
                        <li>Nos encontramos el miércoles 30 de abril a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                        <li>Vamos a resolver el ejercicio de la clase 5 (de hoy)</li>
                    </ul>
                </div>

                {/* Temas Clase 5 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 6</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a terminar de ver cadenas, métodos y slicing</li>
                        <li>Estructura de control de flujo: bucles for</li>
                        <li>Listas en detalles</li>
                        <li>Recorrer listas con While y For</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana6Class5