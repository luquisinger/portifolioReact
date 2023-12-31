import React from 'react';
import Image from '../assets/8.png'
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import {TypeAnimation} from 'react-type-animation'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Banner = () => {
  const handleMeuPort = () => {
    window.location.href = 'https://github.com/luquisinger';
  };
  return (
    <section 
    className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1 variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              MATHEUS <span>LUCHSINGER</span>
            </motion.h1>
    
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>TRABALHO COM</span>
            <TypeAnimation sequence={[
              'Front-end',
              2000,
              'Back-end',
              2000,
              'Blockchain',
              2000,
            ]} speed={50} className='text-accent' wrapper='span' repeat={Infinity}
            />
          </motion.div>
          
          <motion.p 
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
            FREELANCER
          </motion.p>
          <motion.div
          
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link
              to='contact' 
              smooth={true}>
              <button className='btn btn-lg'>Entre em contato</button>
              </Link>
              <a href='https://github.com/luquisinger'
                target="_blank" rel="noopener noreferrer"
                className='text-gradient btn-link'>
                Meu Portfolio
              </a>
          </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://www.linkedin.com/in/luquisinger/' target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href='https://github.com/luquisinger' target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href='https://www.instagram.com/_luquisingerrr/' target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
            </motion.div>
          </div>
          
            <motion.div
              variants={fadeIn('down', 0.5)}
              initial='hidden'
              whileInView={'show'}
              
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mix-blend-lighten rounded-full overflow-hidden'>
                <img src={Image} alt='' ></img>
            </motion.div>
        </div>
      </div>
    </section>
    );
};

export default Banner;
