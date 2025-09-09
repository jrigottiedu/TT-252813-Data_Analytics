import React from 'react'

const Semana1Afterclass = () => {
    return (
        <div>
            <h1 className="title-afterclass">After Class | Miércoles 27 de agosto</h1>
            <section className="home-info-container">
                <h2 className='title-h2'>Resumen del After Class</h2>
                <ul className='list-disc list-inside'>
                    <li>El curso se aprueba con un Trabajo Final que es individual, y consta de una pre-entrega a mitad del curso (aprox mediados de octubre) y una segunda entrega entre la primera semana de diciembre</li>
                    <li>Las Rúbricas contienen las consignas y los datasets</li>
                    <li>Quienes no tengas aún acceso al Campus, porfi anotarse en este <a href="https://docs.google.com/spreadsheets/d/1gtijSJoBKuu-HCkDjLBUto0BwU59-PVkn5mqoxOp_uQ/edit?gid=0#gid=0" target='_blank' className='link'>Google Sheet</a></li>
                    <li>Repasamos como abrir y guardar los Notebooks de las materia, desde el Google Drive y desde el Github</li>
                    <li>Si trabajan con Github, recuerden siempre hacer una copia de los Notebooks originales para evitar luego conflictos a la hora de Sincronizar nuevos Push desde el Repo Oficial del Curso</li>
                    <li>Vimos que pueden también descargar los Notebooks a sus discos locales y abrirlos con VSCode</li>
                    <li>Si los descargan en formato .py los bloques de texto (markup) aparecen comentados</li>
                    <li>Si los descargan con el formato .ipynb, pueden instalarse el Plugin <span className='font-semibold'>ms-toolsai.jupyter</span> para visualizarlos como el Colab</li>
                </ul>


                <h2 className='title-h2 pt-10'>Recordatorios</h2>
                <ul className='list-disc list-inside'>
                    <li>Completar el Cuestionario 1 del módulo Introducción para que habilite los módulos de clases 1 y 2</li>
                    <li>Revisar los Notebooks de la carpeta Clase 1 y completar las 5 actividades, son sencillas y de repaso</li>
                    <li>En la carpeta After_class_1 encuentran un Notbook con código para hacer un Plot en 3D de una distribución normal y explorar nuevas estructuras</li>
                    <li>Nos encontramos nuevamente el Lunes 1/9 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
                </ul>

                {/* Grabación de After Class en Youtube */}
                <div className='py-5'>
                    <h2 className='title-h2'>Grabación del After Class 1</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=elBG58hs89o'
                        alt="Video semana 1 clase 1"
                        target="_blank">
                        <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
                        <span>Ver en Youtube</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Semana1Afterclass