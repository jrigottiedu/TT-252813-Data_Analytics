import React from 'react'

const HomeAfterClass = () => {
    return (
        <div className='home-info-container'>
            <div className="flex flex-col items-start w-full">

                <h3 className='title-h3'>After Class (Opcionales sin asistencia)</h3>
                <ul className='space-y-1'>
                    <li><strong>Horario: </strong>Miércoles de 19:00 a 20:00 hs</li>
                    <li><strong>Modalidad: </strong>Virtual por Google Meet <a className='link' href="https://meet.google.com/tkr-hxbx-uip" target="_blank">Click aquí</a></li>
                    <li><strong>Clases grabadas: </strong>Lista de reproducción en Youtube - <a href="https://www.youtube.com/playlist?list=PLR6qrffywxhDoihz7VcDGyNbVnksVtXnx" target="_blank" className='link'>Click aquí</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeAfterClass