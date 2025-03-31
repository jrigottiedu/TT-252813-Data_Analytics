import React from 'react'

const HomeAulaVirtual = () => {
    return (
        <div className='home-info-container'>
            <div className="flex flex-col items-start w-full">

                <h3 className='title-h2'>Aula Virtual</h3>
                <ul className='space-y-1 pt-2'>
                    <li><strong>Acceso: </strong><a className='link' href="https://aulasvirtuales.bue.edu.ar/" target="_blank">Click aquí</a></li>
                    <li><strong>Usuario: </strong>DNI sin puntos ni guiones</li>
                    <li><strong>Contraseña genérica: </strong>Prueba!123 (se sugiere cambiarla) </li>
                    <li><strong>Mesa de Ayuda: </strong>Completar formulario <a className='link' href='https://docs.google.com/forms/d/e/1FAIpQLSdfVdqGxb4hA-2CHtCpR5XNUV3EVPB4E76F7UFdcTf8Z0TCUA/viewform' target="_blank">Click aquí</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeAulaVirtual