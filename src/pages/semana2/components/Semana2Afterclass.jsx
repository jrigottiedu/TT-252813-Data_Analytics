import React from 'react'

const Semana2Afterclass = () => {
    return (
        <div>
            <h1 className="title-afterclass">After Class | Miércoles 3 de septiembre</h1>
            <section className="home-info-container">
                {/* Grabación de Clase en Youtube */}
                <div>
                    <h2 className='title-h2'>Grabación del After Class 2</h2>
                    <a
                        className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
                        href='https://www.youtube.com/watch?v=sgZ9V2yVZgs'
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

export default Semana2Afterclass

