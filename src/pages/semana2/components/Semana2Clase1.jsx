import React from 'react'

const Semana2Clase1 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 1 | 31 de marzo de 2025</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/playlist?list=PLR6qrffywxhCXbifXL6lB9zh0nbI5e9hU'
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
                    <ul>
                        <li>Recordatorio 1</li>
                        <li>Recordatorio 2</li>
                        <li>Recordatorio 3</li>
                    </ul>
                </div>

                {/* Code Snippets */}
                <div>
                    <h2 className='title-h2'>Code Snippets</h2>
                </div>

                {/* Miscelaneas */}
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                </div>

            </section>
        </div>
    )
}

export default Semana2Clase1