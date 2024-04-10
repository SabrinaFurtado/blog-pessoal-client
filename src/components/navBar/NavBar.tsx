//import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-fuchsia-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-ligth uppercase'>Blog Pessoal</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to="/postagens" className="text-lg text-white">Postagens</Link>
              <Link to="/temas" className="text-lg text-white">Temas</Link>
              <Link to="/cadastrar-tema" className="text-lg text-white">Cadastrar tema</Link>
              <Link to="/perfil" className="text-lg text-white">Perfil</Link>
              <Link to="/sair" className="text-lg text-white">Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar