import React from 'react'

const Semana9Class8 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 8 | Lunes 19 de mayo</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Hoy lunes 19 de mayo se habilita la Pre-entrega del proyecto - con plazo hasta el domingo 1 de junio</li>
                        <li>Vimos cómo subir el proyecto al campus, aquí las capturas compartidas en clase:</li>
                        <li className='list-none'><a href="/images/campus_area_entrega_1.png" rel="noopener noreferrer" target='_blank' className='link pl-5'>Captura1 subir archivo de Pre-entrega al campus</a></li>
                        <li className='list-none'><a href="/images/campus_area_entrega_2.png" rel="noopener noreferrer" target='_blank' className='link pl-5'>Captura2 subir archivo de Pre-entrega al campus</a></li>
                        <li className='list-none'><a href="/images/campus_area_entrega_3.png" rel="noopener noreferrer" target='_blank' className='link pl-5'>Captura3 subir archivo de Pre-entrega al campus</a></li>
                        <li>Presentación de diccionarios <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_9/clase_8/diccionarios.py" target='_blank' className='link'>Ver código de clases</a></li>
                        <li>Resolvimos las opciones 1 - alta de productos y 2 - mostrar productos de la pre-entrega</li>  
                        <li className='list-none pl-5'>Versión 1 - usando lista de listas <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_9/clase_8/pre_entrega_alta_prod_lista.py" target='_blank' className='link'>Ver código de clase</a></li>  
                        <li className='list-none pl-5'>Versión 2 - usando lista de diccionarios <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_9/clase_8/pre_entrega_alta_prod_diccionario.py" target='_blank' className='link'>Ver código de clase</a></li>  
                        <li>Les dejo dos archivos adiciones:</li>
                        <li className='list-none pl-5'>El primero con las alternativas para iterar un diccionario <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_9/clase_8/iterando_diccionarios.py" target='_blank' className='link'>Ver código</a> </li>
                        <li className='list-none pl-5'>El segundo con los métodos más comunes de los diccionarios <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_9/clase_8/metodos_diccionarios.py" target='_blank' className='link'>Ver código</a> </li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=gawMAro_lQc'
                        alt="Video semana 9 clase 8"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_9/clase_8"
                        alt="Semana 9 Clase 8 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 2 de la clase 4</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=avxXXV6U2-I&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=4" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Los que adeuden el <span className='font-semibold'>Cuestionario # 3 de la clase 6</span>, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=hjx-1UD7Dp4&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=1" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Resolver el cuestionario de Autoevalución en clase 8 - re fácil, re cortito</li>
                        <li>Resolver el ejercio de la clase 8 que encuentran en el campus - <a href="https://docs.google.com/presentation/d/13mORodcBu2J0EE9p8efLt8cEBVu7uDU9/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>también puede ver aquí</a></li>
                        <li>Nos encontramos el miércoles 22 de mayo a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                        <li><strong>Espacio de consulta para la pre-entrega</strong> Este sábado 24 de mayo de 14:30 a 16:30 hs, en el mismo Meet del After Class</li>
                    </ul>
                </div>

                {/* Miscelaneas
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <p>Aqui les comparto un video complementario que explica como utilizar el modo Debug</p>
                    <ul className='list-disc list-inside'>
                        <li><strong>Video 1: </strong> Utilizando el Modo Debug <a className="link" href="https://youtu.be/spYjDGDKvTM" target='_blank'>Ver en Youtube</a></li>
                    </ul>
                </div> */}

                {/* Temas Clase 9 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 8</h2>
                    <ul className='list-disc list-inside'>
                        <li>Funciones</li>
                        <li>Uso de funciones con y sin parámetros</li>
                        <li>Alcance de variables (locales y globales)</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana9Class8