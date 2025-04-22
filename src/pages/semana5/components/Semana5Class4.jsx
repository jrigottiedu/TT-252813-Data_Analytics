import React from 'react'

const Semana5Class4 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 4 | Lunes 21 de abril</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Resolvimos el ejercicio de la clase 3 <a href='https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/after_class_3/ejercicio_v2.py' target='_blank' className='link'>Ver código aquí</a></li>
                        <li>Repasamos la estructura if-else de la clase 3</li>
                        <li>Recordar: Los operadores relacionales se usan para comparar valores. El resultado de esa comparación siempre es verdadero (true) o falso (false) </li>
                        <li>Recordar: Los operadores lógicos permiten evaluar múltiples condiciones</li>
                        <li>Los condiconeales nos permiten "Clasificar" los datos ingresados</li>
                        <li>Estudiamos la estructura if-elif-else con el ejemplo de clasificar las edades<a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_5/clase_4/condicionales_parte_3.py" target="_blank" className="link"> Ver código aquí</a></li>
                        <li>Estudiamos la estructura match con el ejemplo del menú de opciones <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_5/clase_4/condicionales_parte_4.py" target="_blank" className="link"> Ver código aquí</a></li>
                        <ul className='list-disc list-inside ml-4'>
                            <li>palabra reservada match + variable a evaluar</li>
                            <li>palabra reservada case + valor o condición + :</li>
                            <li>código a ejecutar si se cumple esa condición</li>
                            <li>case _: para default (equivalente a else en estructura if-elif-else)</li>
                        </ul>
                        <li>Comenzamos a estudiar las cadenas de caracteres <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_5/clase_4/cadenas_intro.py" target="_blank" className="link">Ver código aquí</a></li>
                        <li>Las cadenas son una serie de caracteres (o letras, números)</li>
                        <li>La cadena tiene una longitud, que depende de la cantidad de caracteres que posea</li>
                        <li>Cada caracter en la cadena tiene un índice</li>
                        <li>Si usamos ese índice (o una combinación de ellos) podemos acceder a los caracteres de la cadena </li>
                        <li>Mencionamos los métodos de las cadenas (lo ampliamos la próxima clase) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_5/clase_4/cadenas_metodos.py" target="_blan" className="link">Ver código aquí</a></li>
                        <li>Mencionamos el proceso de "slicing" de cadenas (lo ampliamos la próxima clase) <a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_5/clase_4/cadenas_slicing.py" target="_blank" className="link">Ver código aquí</a></li>
                        <li>Primera ruta de avance para el Proyecto Final Integrador - Vimos un ejemplo <a href="https://docs.google.com/presentation/d/1OafTKu5lLbXanOQ0-HiTAoTzGCU4mP9w/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target="_blank" className='link'>Ver Ruta de Avance</a></li>
                        <li>La consigna de la pre-entrega se indica en la clase 7 u 8, y a partir de ahí cuentan con 7 días para subir la pre-entrega</li>
                        <li>De todas formas, vamos a ir incorporando cada tema en un modelo de proyecto, de manera que lleguen bien cómodos con el tiempo</li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=KWMyqhtP0cE'
                        alt="Video semana 5 clase 4"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_5/clase_4"
                        alt="Semana 5 Clase 4 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul>
                        <li>Los que adeuden el Cuestionario 1 de la clase 2, porfi traten de completarlo - <a href="https://www.youtube.com/watch?v=iD0e2si4Imo&list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx&index=1&t=2764s" target="_blank" className='link'>Ver aquí resolución</a></li>
                        <li>En el campus virtual, ya pueden también hacer el cuestionario 2 de la clase 4 (de hoy)</li>
                        <li>Resolver el ejercio de la clase 4 que encuentran en el campus - <a href="https://docs.google.com/presentation/d/1FuZjW51rs4LgUPuhNfd9Cv-mfqMl59fa/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>también puede ver aquí</a></li>
                        <li>Nos encontramos el miércoles 23 de abril a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                        <li>En el after class vamos a resolver el cuestionario 2 de la clase 4 (de hoy)</li>
                        <li>Vamos a resolver el ejercicio de la clase 4 (de hoy)</li>
                    </ul>
                </div>

                {/* Temas Clase 5 */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 5</h2>
                    <ul className='list-disc list-inside'>
                        <li>Vamos a terminar de ver cadenas, métodos y slicing</li>
                        <li>Estructura de control de flujo: bucles while</li>
                        <li>Concepto y uso de contadores y acumuluadores</li>
                        <li>Sentencias break y continue</li>
                        <li>Introducción a listas como estructuras para almacenar múltiples valores.</li>
                    </ul>
                </div>


            </section>
        </div>
    )
}

export default Semana5Class4