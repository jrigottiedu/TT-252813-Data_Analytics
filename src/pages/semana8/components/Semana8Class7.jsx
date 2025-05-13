import React from 'react'

const Semana8Class7 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 7 | Lunes 12 de mayo</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Presentacion de Tuplas <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/clase_7/metodos_de_tuplas.py" target='_blank' className='link'>Ver código modelo</a></li>
                        <li>Métodos de listas: append(), remove(), sort() <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/clase_7/metodos_de_listas.py" target="_blank" className='link'>Ver código modelo</a></li>
                        <li>Métodos de tuplas: count(), index(). Listas y Tuplas no comparten métodos en común porque las listas son Mutables y las Tuplas Inmutables <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/clase_7/metodos_de_tuplas.py" target='_blank' className='link'>Ver código modelo</a> </li>
                        <li>Slicing en Listas <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/clase_7/slicing_listas.py" target='_blank' className='link'>Ver código modelo</a></li>
                        <li>Slicing en Tuplas <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_8/clase_7/slicing_tuplas.py" target='_blank' className='link'>Ver código modelo</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=uIgqAJv_vqg&list=PLR6qrffywxhCXbifXL6lB9zh0nbI5e9hU'
                        alt="Video semana 8 clase 7"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_8/clase_7"
                        alt="Semana 7 Clase 6 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 2 de la clase 4</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=avxXXV6U2-I&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=4" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 3 de la clase 6</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=hjx-1UD7Dp4&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=1" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Resolver el ejercio de la clase 7 que encuentran en el campus - <a href="https://docs.google.com/presentation/d/1KuSH4PvRixdC98sLZyhBwE97XRwf6AB9/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>también puede ver aquí</a></li>
                        <li>Nos encontramos el miércoles 14 de mayo a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                    </ul>
                </div>

                {/* Miscelaneas */}
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <p>Aqui les comparto un video complementario que explica como utilizar el modo Debug</p>
                    <ul className='list-disc list-inside'>
                        <li><strong>Video 1: </strong> Utilizando el Modo Debug <a className="link" href="https://youtu.be/spYjDGDKvTM" target='_blank'>Ver en Youtube</a></li>
                    </ul>
                </div>

                {/* Temas Clase 7 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 8</h2>
                    <ul className='list-disc list-inside'>
                        <li><span className='font-semibold'>Se presenta oficialmente la consigna para la pre-entrega</span></li>
                        <li>Comenzamos con diccionarios</li>
                        <li>Conceptos clave-valor en diccionarios</li>
                        <li>Métodos escenciales de diccionarios</li>
                        <li>Iteración en diccionarios con bucle For</li>

                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana8Class7