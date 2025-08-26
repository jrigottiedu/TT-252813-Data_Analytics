import React from 'react'

const Semana1Clase1 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 1 | Lunes 25 de agosto</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Introducción al curso y contenidos - <a href="https://docs.google.com/spreadsheets/d/1jFZGrekh6l2vAmptrZf8JLTW6Z4bFAbSlYPOz2iMvSw/edit?usp=sharing" target='_blank' className='link'>Ver cronograma</a></li>
                        <li>Metodologías de evaluación: Proyecto (pre-entrega y entrega final)</li>
                        <li>Vamos a trabajar con Notebooks en Google Colab, allí ejecutamos el código en Python</li>
                        <li>Acceso a Google Colab <a href="https://colab.google.com/" target='_blank' className='link'>Google Colab</a></li>
                        <li>Google Colab no almacena archivos, los notebooks se deben almacenar en Google Drive o Github</li>
                    </ul>
                    <h2 className='title-h3 pt-5'>Google Drive</h2>
                    <ul className='list-disc list-inside'>
                        <li >Repositorio Oficial de Google Drive <a href="https://drive.google.com/drive/folders/1we8c7NG_7eK1Q7seICLbn6621PzjrgBy?usp=sharing" target='_blank' className='link'>Acceder</a></li>
                        <li><span className='font-semibold'>Sugerencia:</span> entrar a la carpeta "Clase 1", directamente hacer doble click sobre los Notebooks (extensión ipynb) y se abre el archivo en Colab"</li>
                        <li>Notar la nubecita tachada, indica que es un archivo de solo lectura.</li>
                        <li>Ir a Archivo, guardar una copia en Drive, luego se abre automáticamente con el agregado "Copia de - "</li>
                        <li>El archivo lo encuentran en la carpeta "Colab Notebooks" en el raíz del Drive</li>
                    </ul>

                    <h2 className='title-h3 pt-5'>Github</h2>
                    <ul className='list-disc list-inside'>
                        <li>Repositorio Oficial de Github <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks" target='_blank' className='link'>Acceder</a></li>
                        <li>Previamente haber iniciado sesión en su cuenta personal de Github; hacer click en "Fork", crea una que luego pueden sincronizar</li>
                        <li>Acceder a Google Colab, Abrir Cuaderno, seleccionar Github (puede pedir iniciar sesión) y autorizar acceso</li>
                        <li>Si les pide "Escribe una URL de Githu..." ahi pegan la URL del "Repositorio Oficial de Github" 'https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks' </li>
                        <li>Seleccionan el repositorio que "forkearon", en rama dejan Main, y seleccionan el archivo</li>
                        <li>Si bien pueden guardar los cambios sobre el mismo archivo, NO LO HAGAN, porque después genera conflicto al queres sincronizar con nuevas versiones</li>
                        <li>Guardar una copia, con otro nombre en su Github o en el Google Drive</li>
                    </ul>


                </div>

                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación de Clase 1</h2>
                    <a
                        className='link'
                        href='https://www.youtube.com/watch?v=v3NG3XbqbIE'
                        alt="Video semana 1 clase 1"
                        target="_blank">
                        Ver aquí en Youtube
                    </a>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Exploren el Notebook "Clase_1_Teoría_Lenguage_Markup.ipynb</li>
                        <li>Hacer los ejercicios de la actividad 1 y 2 del mismo archivo Clase 1</li>
                        <li>Validar el acceso al Campus Virtual, y resolver el cuestionario de la carpeta Introducción</li>
                        <li>Leer la teoría de la Clase 1 del Campus Virtual</li>
                        <li>Nos encontramos el Miércoles 27/8 a las 19:00 hs en Meet en Nuestro After Class (Link en Tab Inicio)</li>
                    </ul>
                </div>

                {/* Temas para la próxima clase */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 2</h2>
                    <ul className='list-disc list-inside'>
                        <li>Contenido: Estructuras de Datos en Python</li>
                        <li>Listas, tuplas, diccionarios y conjuntos</li>
                        <li>Funciones Lambda</li>
                        <li>Comprehensions (list y dict)</li>
                        <li>Funciones print() e input()</li>
                        <li>Conversión entre tipos de datos simples</li>
                        <li>Programas con entrada, procesamiento y salida de datos</li>
                    </ul>
                </div>

                {/* Miscelaneas */}

            </section >
        </div >
    )
}

export default Semana1Clase1