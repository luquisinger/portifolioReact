import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const About = () => {
  const[ref, inView] =useInView({
    threshold: 0.5
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-10 lg:flex-row 
        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>

              <motion.div 
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3 }}
              className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
              mix-blend-lighten bg-top'>
              </motion.div>
              <motion.div 
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3 }}
                className='flex-1'>
                <h2 className='h2 text-accent'>Sobre mim</h2>
                <h3 className='h3 mb-4'>Eu sou um desenvolvedor freelancer com 1 ano de experiência.</h3>
                <p className='mb-6'>
                  descriçãoo
                </p>
                <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                    <div> 
                      <div className='text-[40px] font-tertiary text-gradient md-2'>
                        {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                      </div>
                      <div className='font-primary text-sm tracking-[2px]'>
                        Ano de <br />
                        Experiência
                      </div>
                    </div>
                    <div> 
                      <div className='text-[40px] font-tertiary text-gradient md-2'>
                        {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                      </div>
                      <div className='font-primary text-sm tracking-[2px]'>
                        Projetos <br />
                        Completos
                      </div>
                    </div>
                    <div> 
                      <div className='text-[40px] font-tertiary text-gradient md-2'>
                        {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                      </div>
                      <div className='font-primary text-sm tracking-[2px]'>
                        Formações <br />
                        Completas
                      </div>
                    </div>
                  <div className='flex gap-x-8 items-center'>
                    <button className='btn btn-lg'>Contato</button>
                    <a href="#" className='text-gradient btn-link'>
                        Meu Portfolio
                    </a>
                  </div>
                </div>
              </motion.div>
        </div>
      </div>
  </section>
  )
};

export default About;
