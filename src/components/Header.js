import React from 'react';
import Logo from '../assets/black-hole.png'
import { Link } from 'react-scroll';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt=''/>
        </a>
        <Link
        to='contact' // ID do componente ao qual deseja rolar
        smooth={true} // Ativa a rolagem suave
        duration={500} // Duração da animação em milissegundos
        >
        <button className='btn btn-sm'>Vamos trabalhar juntos</button>
        </Link>
      </div>
    </div>
  </header>
  )
}

export default Header;
