import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services = [
  {
    name: 'Front-End',
    description: 'React, Tailwind',
    link: 'Veja mais'
  },
  {
    name: 'Back-end',
    description: 'Java, PHP, javascript',
    link: 'Veja mais'
  },
  {
    name: 'Blockchain',
    description: 'Solidity',
    link: 'Veja mais'
  },
];

const Services = () => {
  
  return(
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services  overflow-hidden lg:bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mg-0'>
            <h2 className='h2 text-accent mb-6'>O que eu faço.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Eu sou um desenvolvedor freelancer com 1 ano de experiência.
            </h3>
            <a href="https://docs.google.com/document/d/1cL0iHQp8ozwCt56pd-yuimsrcsKFlUfs/edit" target="_blank" rel="noopener noreferrer">
            <button  className='btn btn-sm'>
              Veja o meu curriculum
            </button>
            </a>
          </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3 }}
        className='flex-1'>
          <div>

            {services.map((service, index) => {
              const {name, description, link } =service;

              return (
              <div className='border-b border-white/20 h-[146px] mb-[38px] 
              flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold md-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href='#' className='text-gradient text-sm'>{link}</a>
                  </div>
              </div>
              )
            })}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  ) 
};

export default Services;
