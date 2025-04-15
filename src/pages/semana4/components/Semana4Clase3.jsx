import React from 'react'

const Semana4Clase3 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 3 | Lunes 14 de abril</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Repasamos lo visto en clase 2 <a href='https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/clase_3/repaso_ejercicio_clase_2.py' target='_blank' className='link'>Ver código</a></li>
                        <li>Resolvimos el ejercio de la clase 2 <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/clase_3/repaso_ejercicio_clase_2.py" target="_blank" className='link'>Ver código</a></li>
                        <li>Sobre ese ejercicio, presentamos el tema "Condicionales" <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/clase_3/condicionales_parte_1.py" target='_blank' className='link'>Ver código</a></li>
                        <li>Analizamos la estructura (sintáxis) del condicional <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/clase_3/condicionales_parte_2.py" target='_blank' className='link'>Ver código</a></li>
                        <ul className='list-disc list-inside ml-4'>
                            <li>palabra reservada if</li>
                            <li>condicion (puede ser más de una, en ese caso usamos operadores lógicos)</li>
                            <li>los : marcan el inicio del primer bloque True</li>
                            <li>else : marca el inicio del bloque False</li>
                            <li>Los bloques True y False deben respetar la indentación</li>
                        </ul>
                        <li>Introducimos los operadores relacionales <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/clase_3/operadores_relacionales.py" target="_blank" className='link'>Ver código de muestra</a></li>
                        <li>Introducimos los operadores lógicos <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/clase_3/operadores_logicos.py" target="_blank" className='link'>Ver código de muestra</a></li>
                        <li>Les sugerimos que hagan pruebas con estos últimos dos archivos, cambiando los valores de las variables y analizando el resultado</li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=eiwMBzx3o8A'
                        alt="Video semana 4 clase 3"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_4/clase_3"
                        alt="Semana 4 Clase 3 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul>
                        <li>Los que adeuden el Cuestionario de la clase 2, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=iD0e2si4Imo&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=1&t=2764s" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Resolver el ejercio de la clase 3 que encuentran en el campus - <a href="https://docs.google.com/presentation/d/1A0y2cZrjtGkVNQCxeSZq5URvTvS8hd6f/edit?slide=id.p1#slide=id.p1" target='_blank' className='link'>también puede ver aquí</a></li>
                        <li>Nos encontramos el miércoles 16 de abril a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                    </ul>
                </div>

                {/* Temas Clase 4 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 4</h2>
                    <ul className='list-disc list-inside'>
                        <li>Estructuras condicionales avanzadas: elif y match</li>
                        <li>Manipulación de cadenas</li>
                        <li>Acceso a caracteres, concatenación, longitud</li>
                        <li>Métodos de cadenas: lower(), upper(), title()</li>
                        <li>Formateo de cadenas con f-strings</li>
                        <li><strong>Ruta de avance:</strong> Ya comenzamos a trabajar en el Proyecto Final Integrador</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana4Clase3