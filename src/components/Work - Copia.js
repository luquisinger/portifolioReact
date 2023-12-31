import React from 'react';
import {motion} from 'framer-motion'
import Img1 from '../assets/p1.jpg'
import Img2 from '../assets/p2.jpg'
import Img3 from '../assets/p3.jpg'


const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 ma-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>
              Meus últimos <br />
              projetos.
            </h2>
            <p className='max-w-sm mb-16'>
              stack: React
            </p>
            <button className='btn btn-sm'>Veja todos os projetos</button>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
            transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img1} alt=''></img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
            transition-all duration-500 z-50'><span className='text-gradient'>Cine Tag</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 
            transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>
                Site de filmes.
              </span>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
            transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img2} alt=''></img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
            transition-all duration-500 z-50'><span className='text-gradient'>Blog</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 
            transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>
                Blog pessoal sobre programação.
              </span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
            transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img3} alt=''></img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
            transition-all duration-500 z-50'><span className='text-gradient'>Alura Space</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 
            transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>
                Galeria de imagens tiradas do espaço.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Work;
