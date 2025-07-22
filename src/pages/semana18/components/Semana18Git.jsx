import React from 'react'

const Semana18Git = () => {
  return (
    <div>
      <h1 className="title-class">Taller Git-Github | Lunes 21 de julio</h1>

      <section className="home-info-container">

        {/* Resumen de clase */}
        <div>
          <h2 className='title-h2'>Resumen del taller</h2>
          <p className='font-semibold py-2'>Vimos una Introducción a Git local y Github cloud</p>
          <ul className='list-disc list-inside'>
            <li><a href="https://docs.google.com/presentation/d/10YlaO4Ya6Qrhz3wYtF4ZuedqjnP1fmu2-qzmomofJmM/edit?usp=sharing" target='_blank' className='link'>Ver PPT con temas de hoy</a></li>
            <li>Descargar e instalar Git en la PC <a href="https://git-scm.com/downloads" target='_blank' className='link'>Descargar Git</a></li>
            <li>Seguir los slilides del PPT, configurando Git (una única vez), inicializando el repositorio y haciendo el staging y el commit con git add y git commit</li>
            <li>Crear una cuenta en Github en su sitio web oficial <a href="https://github.com/" target='_blank' className='link'>Github</a></li>
            <li>Luego seguir los slides, creando la cuenta y luego el repositorio</li>
            <li>Agregar la url del repositorio de Github en el proyecto local usando git add remote</li>
            <li>Hacer el push para subir los archivos locales a la nube</li>
            <li>Luego creamos la rama de desarrollo "Develop", como una copia de la rama "Main", editamos el código y lo subimos a la nube creando la rama en Github</li>
            <li>Por último hicimos un Pull Request en Github para el Merge del código nuevo con el original en la rama Main</li>
            <li>Mencionamos el uso de clone y fork</li>
          </ul>
        </div>

        {/* Grabación de Clase en Youtube */}
        <div>
          <h2 className='title-h2'>Video grabado</h2>
          <a
            className='link'
            href='https://www.youtube.com/watch?v=XiTDOVah6FY'
            alt="Video Taller de Git - Github"
            target="_blank">
            Ver aquí en Youtube
          </a>
        </div>


      </section>
    </div>
  )
}

export default Semana18Git