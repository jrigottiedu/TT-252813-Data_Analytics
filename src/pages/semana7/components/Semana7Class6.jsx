import React from 'react'

const Semana7Class6 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 6 | Lunes 5 de mayo</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Enunciado de la pre-entrega del Proyecto (tener en cuenta que según el calendario, se publica en la clase # 8 el día 19 de mayo, pero para adelantarnos, nosotros lo anunciamos hoy). Al final del archivo <span className='font-semibold' >consigna_pre_entrega.py </span> encuentran la estructura sugerida: <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/consigna_pre_entrega.py" target='_blank' className='link'>Ver enunciado y código aquí</a> </li>
                        <li>En principio, la fecha de la pre-entrega vence el domingo 25 de mayo, pero más cerca de la fecha lo confirmamos</li>
                        <li>Presentamos el juego-desafío "adivina el número" que surgió en el After Class pasado, en este repositorio encuentran varias versiones del juego, desde la más básica a la más avanzada <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_6/after_class" target='_blank' className='link
                        '>Hacer click aquí</a></li>
                        <li>Repasamos y consolidamos el uso de cadenas y métodos de cadenas (recuerden que los métodos dependen del tipo de dato) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/__1_repaso_cadenas_metodos.py" target='_blank' className='link'>Ver código aquí</a> </li>
                        <li>Repasamos y consolidamos el uso del bucle while, para validar ingresos de datos y recorrer o iterar cadenas <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/__2_repaso_while_candenas.py" target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Completamos el tema listas. Las listas son un tipo de dato de Python, que nos permiten almacenar cualquier tipo de dato. Exploramos uno de sus métodos, append() para agregar un elemento al final y la recorrimos con el bucle while <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/__3_repaso_listas.py" target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Introducimos el bucle for, el cual se sugiere usar para recorrer cadenas, listas, diccionarios y rangos de números <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/__4_intro_bucle_for.py" target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Presentamos la función range(). La misma puede recibir hasta 3 argumentos, valor inicial, valor final y saltos. Retorna una lista numérica, que la podemos usar a modo de índice con la estructura del bucle for <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/__4_intro_bucle_for.py" target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Finalmente, vimos el uso combinado de la sentencia break con el bucle for para ejecutar la búsqueda de un elemento en la lista (esta función es la ques se solicita en el proyecto en el punto 3) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_7/clase_6/__5_bucle_for_break_continue.py" target='_blank' className='link'>Ver código aquí</a></li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=uYHyf4NG88E'
                        alt="Video semana 7 clase 6"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_7/clase_6"
                        alt="Semana 7 Clase 6 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Los que adeuden el Cuestionario # 2 de la clase 4, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=avxXXV6U2-I&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=1" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>Abre el cuestionario # 3, lo encuentran con el contenido de clase 6 en el campus</li>
                        <li>Resolver el ejercio de la clase 6 que encuentran en el campus - <a href="https://docs.google.com/presentation/d/1VrqHC0-ykhzn0ZICuD6nCnFRaL5Z6MD-/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>también puede ver aquí</a></li>
                        <li>Nos encontramos el miércoles 7 de mayo a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                        <li>Les voy a armar un video con la resolución del cuestionario y del ejercicio, asi no nos extendemos mucho más de la hora</li>
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
                    <h2 className='title-h2'>Temas a ver en Clase 7</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a seguir trabajando con bucles while y for</li>
                        <li>Vamos a ir enfocando los ejercicios en los requerimientos del proyecto</li>
                        <li>Listas y tuplas: diferencias y similitudes</li>
                        <li>Uso de índices y slices</li>
                        <li>Métodos comunes de listas (append(), remove(), etc.) y tuplas</li>
                        <li>teración y manipulación de listas y tuplas</li>

                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana7Class6