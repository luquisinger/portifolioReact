import React, { useState } from 'react';
import { fadeIn } from '../variants';
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] =useState('')

  function sendEmail(e){
    e.preventDefault()

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos.')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_x0fry1b", "template_omivk84", templateParams, "uk5UMfRDB-l86-xmx")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setMessage('')
      setEmail('')
    }, (err) => console.log("erro", err))
  }
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 flex justify-content items-center'>
            <div>
              <h4 className='text-x1 uppercase text-acent font-medium mb-2 
              tracking-wide text-accent '>
                Entre em contato
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Vamos trabalhar 
                <br /> juntos!
              </h2>
            </div>
          </motion.div>
        
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6
          pb-24  p-6 items-start'
            onSubmit={sendEmail}>
          <input 
                className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all'
                type='text' 
                placeholder='Seu nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all'
                type='text' 
                placeholder='Seu email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea 
                className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all
                resize-none mb-12'
                placeholder='Sua mensagem'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className='btn btn-lg'>Enviar mensagem</button>
          </motion.form>

        </div>
      </div>
  </section>
  )
};

export default Contact;
