import React from 'react'

const HomeClass = () => {
    return (
        <div className='home-info-container'>
            <div className="flex flex-col items-start w-full">

                <h3 className='title-h2'>Clases Sincrónicas (Obligatorias con asistencia)</h3>
                <ul className='space-y-1 pt-2'>
                    <li><strong>Horario: </strong>Lunes de 19:00 a 21:00 hs</li>
                    <li><strong>Modalidad: </strong>Virtual por Zoom <a className='link' href="https://us02web.zoom.us/meeting/register/UwuC7jQAQ5CoyGXsYVhg7A" target="_blank">Click aquí</a></li>
                    <li><strong>Guía ingreso a Zoom: </strong><a className='link' href="https://docs.google.com/document/d/1qplxN8-XhPI1bKUbghowFPkNDs_Jz1EU1Ow_L3zzDOw/edit" target="_blank">Ver aquí</a></li>
                    <li><strong>❗ Nota </strong>Usar el mismo correo electrónico con el que se inscribieron, y completar con Nombre y Apellido</li>
                    <li><strong>Toma de Asistencia: </strong>A través del Nombre, Apellido y Correo electrónico que usen en Zoom y por la cantidad de tiempo que estuvieron conectados. </li>
                    <li><strong>Clases grabadas: </strong>Lista de reproducción en Youtube - <a href="https://www.youtube.com/@juanpablorigotti8983/playlists" target="_blank" className='link'>Click aquí</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeClass