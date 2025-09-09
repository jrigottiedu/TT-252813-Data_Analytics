import React from 'react'

const Semana2Clase1 = () => {
    return (
        <div>
            <h1 className="title-class">Clase 2 | Lunes 1 de septiembre</h1>

            <section className="home-info-container">

                {/* Resumen de clase */}
                <div>
                    <h2 className='title-h2'>Resumen de clase</h2>
                    <p className='pt-2'>En nuestra clase de hoy vimos:</p>
                    <ul className='list-disc list-inside'>
                        <li>Repaso de estructuras de datos: <span className='font-semibold'>listas, tuplas, diccionarios y conjuntos</span>, cada uno con sus métodos - <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_2/Clase_2_Teoria_Estructuras_de_datos.ipynb" target='_blank' className='link'>Ver Notebook</a></li>

                        <li>Funciones <span className='font-semibold'>lambda</span>, sintáxis y usos <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_2/Clase_2_Teoria_Lambda%2C%20Map%2C%20Filter%2C%20Reduce.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li className='ps-3'>Lambda como argumento en función sorted</li>
                        <li className='ps-3'>Lambda con <span className='font-semibold'>map, filter y reduce</span></li>

                        <li>List & Dict comprehension <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_2/Clase_2_Teoria_List%20%26%20Dic%20Comprehension.ipynb" target='_blank' className='link'>Ver Notebook</a></li>
                        <li className='ps-3'><span className='font-semibold'>Listas por comprensión:</span> generamos listas a partir de un for in dentro de la estructura de la lista (equivalente a map)</li>
                        <li className='ps-3'>Si combinamos con condicionales, es equivalente a filter</li>
                        <li className='ps-3'><span className='font-semibold'>Diccionarios por comprensión:</span> (lo vemos con más detalles en la práctica)</li>
                    </ul>
                </div>

                <div>
                    <h2 className='title-h2'>Grabación de Clase 2</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=_h4Hk7DlR0g'
                        alt="Video semana 2 clase 2"
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>


                {/* Código de clase en Github */}
                <div>
                    <h2 className='title-h2'>Actividad hecha en clase</h2>
                    <p>Realizamos sólo el ejercicio 4 que retorna una lista con los IMC de 3 pacientes</p><a
                        className='link'
                        href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Clase_2/Clase_2_Actividad_1.ipynb"
                        alt="Clase 2 Actividad 1 Codigo Github"
                        target="_blank">Ver Notebook</a>
                        <p>Completar los ejercicios, de todas formas los vemos en el After Class</p>
                </div>

                {/* Recordatorios */}
                <div>
                    <h2 className='title-h2'>Recordatorios</h2>
                    <ul className='list-disc list-inside'>
                        <li>Validar el acceso al Aula Virtual y <span className='font-semibold'>completar el cuestionario de la clase 2</span> - en caso que no puedan ingresar: <a href="https://docs.google.com/spreadsheets/d/1gtijSJoBKuu-HCkDjLBUto0BwU59-PVkn5mqoxOp_uQ/edit?gid=0#gid=0" target='_blank' className='link'>completar el formulario</a></li>
                        <li>Nos encontramos el <span  className='font-semibold'>miércoles 3/9 a las 19:00 hs en Meet en nuestro After Class</span>, vamos a resolver el cuestionario y ver las actividades.</li>
                    </ul>
                </div>

                {/* Temas para la próxima clase */}
                <div>
                    <h2 className='title-h2'>Temas a ver en Clase 3</h2>
                    <ul className='list-disc list-inside'>
                        <li>Scopes de variables y tipos de parámetros</li>
                        <li>Introducción a NumPy y Pandas</li>
                        <li>Lectura de archivos csv con Pandas</li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Semana2Clase1