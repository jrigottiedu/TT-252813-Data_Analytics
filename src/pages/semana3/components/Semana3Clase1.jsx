import React from 'react'

const Semana3Clase1 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 2 | Lunes 7 de abril</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Algoritmos: son una serie de pasos lógicos, específicos y finitos que nos permiten resolver un problema</li>
                        <li>Un algoritmo se puede representar a través de un diagrama de flujo, un pseudocódigo o código fuente</li>
                        <li>Sugerencia ver este video de Algoritmos <a className='link' href="https://youtu.be/U3CGMyjzlvM?si=J4Xraqs74kgOgRZh" target="_blank" >Ver en Youtube</a></li>
                        <li>Lenguajes de programción</li>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Python: Es de alto nivel, lo más parecido al lenguaje natural, lo usamos por su simplicidad</li>
                            <li>Java o C/C# son lenguajes de bajo nivel y esta más cerca del Hardware</li>
                        </ul>
                        <li>Variables</li>
                        <ul className='list-disc list-inside ml-4'>
                            <li>son espacios de memoria que almacenan datos de forma temporal</li>
                            <li>los tipos de datos que almacenan son int, float, str, bool entre otros</li>
                        </ul>
                        <li>Usamos el signo = para asignar un valor a una variable</li>
                        <li>Los operadores aritméticos nos permiten realizar operaciones matemáticas con los valores de las variables</li>
                        <li>Usamos la función print() para mostrar datos en pantalla</li>
                        <li>Usamos la función input() para solicitar al usuario que ingrese un dato</li>
                        <li>La función input() siempre devuelve un tipo de dato str</li>
                        <li>Si vamos a trabajar con operaciones matemáticas, debemos convertir el tipo de dato por ejemplo int(dato_str)</li>
                        <li>En el archivo procesamiento_e_.py encuentran la primera parte de nuestra calculadora</li>
                        <li>En el archivo procesamiento_calculadora.py encuentran la segunda parte del código de la calculadora, con el uso de input(), type() e int()</li>
                    </ul>
                </div>

                {/* Grabación de Clase en Youtube */}
                <div className='flex flex-col'>
                    <h2 className='title-h2'>Grabación de la clase</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=W1dlredrnpo&list=PLR6qrffywxhCXbifXL6lB9zh0nbI5e9hU&index=2'
                        alt="Video semana 2 clase 1"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                    <a className="link"
                        href="https://drive.google.com/file/d/1hWe0m4xvlZiWM53uoNt0OyZuS08gqoQE/view?usp=sharing" target='download'>Descargar Chat de Zoom</a>
                    <a className='link' href="https://drive.google.com/file/d/1yMlc0UQLuJsS0BwN3nIWItaIPP0wB-kH/view?usp=sharing" target='download'>Descargar sketch "Algoritmo de nuestra calculadora"</a>
                </div>

                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Código hecho en clase</h2>
                    <a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_3/clase_2"
                        alt="Semana 3 Clase 2 Codigo Github"
                        target="_blank">Ver aquí en Github</a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Porfi, validar el acceso al Campus Virtual y que puedan visualizar nuestro curso</li>
                        <li>Tener ya instalado y configurado el VSCode para poder hacer las prácticas</li>
                        <li>Completar el custionario introductorio de la clase 1 del 31 de marzo</li>
                        <li>Completar el cuestionario de la clase 2 del 7 de abril </li>
                        <li>Realizar el ejercicio práctico que encuentran en la sección de la clase 2 en el campus <a className='link' href='https://docs.google.com/presentation/d/1xsQF7ALTfbvo7jDx1AKM7ChPoaCA6Byi/edit?slide=id.p3#slide=id.p3' target='download'>descargar también aquí</a></li>
                        <li>Nos encontramos el miércoles 9 de abril a las 19:00 en Meet - tienen el link en la sección Inicio</li>
                        <li>El miércoles en el After Class vamos a ver el cuestionario de la clase 2, el ejercicio de tarea y conversar sobre dudas que hayan quedado</li>
                    </ul>
                </div>

                {/* Code Snippets */}
                {/* <div>
                    <h2 className='title-h2'>Code Snippets</h2>
                </div> */}

                {/* Miscelaneas */}
                <div>
                    <h2 className='title-h2'>Miscelaneas</h2>
                    <ul className='list-disc list-inside'>
                        <li>En el Github van a encontrar algunos archivos que les van a ayudar a comprender los temas de la clase 2</li>
                        <li>variables.py: nos muestra los tipos de datos y la asignación de datos a las variables</li>
                        <li>print_input.py: nos muestra como usar las funciones para salida e ingreso de datos por terminal/consola</li>
                        <li>operadores_aritmeticos.py: nos muestra como usar los principales operadores</li>
                        <li>conversion_datos_simples.py: nos muestra las diferentes opciones de convertir tipos de datos</li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Semana3Clase1