
import React from 'react';
import { motion } from 'framer-motion'
import Img1 from '../assets/p1.jpg'
import Img2 from '../assets/p2.jpg'
import Img3 from '../assets/p3.png'
import { fadeIn } from '../variants';




const Work = () => {
  
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10'>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col gap-y-12 justify-content'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Meus últimos <br />
                projetos no vercel
              </h2>
              <p className='max-w-sm mb-16'>stack: React</p>
              <a href="https://vercel.com/luquisinger" target="_blank" rel="noopener noreferrer">
                <button className='btn btn-sm'>Veja todos os projetos</button>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col gap-y-10'>

            <a href="https://cine-tag-five.vercel.app/" target="_blank" rel="noopener noreferrer">
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
                    Site de filmes feito em React.
                  </span>
                </div>
              </div>
            </a>

            <a href="https://blog-pessoal-rouge.vercel.app/" target="_blank" rel="noopener noreferrer">
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
                    Blog sobre programação feito em React.
                  </span>
                </div>
              </div>
            </a>

            <a href="https://github.com/luquisinger/BibliotecaGenerica" target="_blank" rel="noopener noreferrer">
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
                transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500'
                  src={Img3} alt=''></img>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                transition-all duration-500 z-50'><span className='text-gradient'>Biblioteca</span></div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                transition-all duration-700 z-50'>
                  <span className='text-3x1 text-white'>
                  CRUD em .net, SQL Server e Windows Forms.
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;