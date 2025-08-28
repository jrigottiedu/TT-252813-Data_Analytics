import React from 'react'
import { FaGoogleDrive, FaGithub } from "react-icons/fa";

const HomeRepoOficial = () => {
  return (
    <div className='home-info-container'>
      <div className="flex flex-col items-start w-full">

        <h3 className='title-h2'>Repositorios Oficiales de Notebooks</h3>
        <div className='w-full flex justify-center gap-10 py-5'>
          <a href="https://drive.google.com/drive/folders/1we8c7NG_7eK1Q7seICLbn6621PzjrgBy?usp=sharing" target='_blank' className='link flex flex-col items-center'>
            <FaGoogleDrive size={48} />
            <span className="mt-2 text-sm">Google Drive</span>
          </a>
          <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks" target='_blank' className='link flex flex-col items-center'>
            <FaGithub size={48} />
            <span className="mt-2 text-sm">GitHub</span>
          </a>
        </div>

      </div>
    </div>
  )
}

export default HomeRepoOficial