import React from 'react'

const Semana2Clase1 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 1 | Lunes 31 de marzo</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Introducción al curso, objetivos y metodologías de evaluación</li>
                        <li>Duración: 16 semanas, finalizando la semana del 14 de julio</li>
                        <li>Instalación del Interprete de Python</li>
                        <li>Instalación del ambiente de desarrollo (IDE) Visual Studio Code</li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=jMx1HwlAi-Y'
                        alt="Video semana 2 clase 1"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_2/clase_1"
                        alt="Semana 2 Clase 1 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Validar el acceso al Aula Virtual - en caso que no puedan ingresar, completar el formulario de la mesa de ayuda (ver en página principal)</li>
                        <li>Completar el Cuestionario del Módulo Introducción para que desbloquee el contenido de la clase 2</li>
                        <li>Esta semana no tenemos After Class porque el miércoles 2 de abril es feriado</li>
                        <li>En caso que no puedan aún ingresar al Aula Virtual, les compartimo el enlace a la teoría de la clase 2 para que vayan viendo con anticipación <a className="link" href="https://ttech2025.github.io/flipbook/IP_Python_2.0/Clase02/" target="_blank">Click aquí</a></li>
                    </ul>
                </div>

                {/* Temas para la próxima clase */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 2</h2>
                    <ul className='list-disc list-inside'>
                        <li>Completar conceptos de programción y algoritmos (pendientes de la clase 1)</li>
                        <li>Variables y tipos de datos simples</li>
                        <li>Operador de asignación</li>
                        <li>Operadores aritméticos</li>
                        <li>Funciones print() e input()</li>
                        <li>Conversión entre tipos de datos simples</li>
                        <li>Programas con entrada, procesamiento y salida de datos</li>
                    </ul>
                </div>

                {/* Miscelaneas */}
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <p>Les compartirmos unos videos tutoriales sobre lo visto hoy en clase</p>
                    <ul className='list-disc list-inside'>
                        <li><strong>Video 1: </strong> Instalando Python <a className="link" href="https://www.youtube.com/watch?v=r1D7hIz9eis" target='_blank'>Ver en Youtube</a></li>
                        <li><strong>Video 2: </strong> Instalando Visual Studio Code <a className="link" href="https://www.youtube.com/watch?v=wbugePPNUjc" target='_blank'>Ver en Youtube</a></li>
                        <li><strong>Video 3: </strong> Instalando el Plugin Python en VSCode <a className="link" href="https://www.youtube.com/watch?v=gykxrNQsRUE" target='_blank'>Ver en Youtube</a></li>
                        <li><strong>Video 4: </strong> Instalando el Plugin Black Formatter en VSCode <a className="link" href="https://www.youtube.com/watch?v=QLMA7aZtCVc" target='_blank'>Ver en Youtube</a></li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Semana2Clase1