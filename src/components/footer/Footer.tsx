import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <div className="flex justify-center bg-fuchsia-800 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-light'>Blog pessoal da Sabrina Furtado </p>
        <p className='text-lg'>Acesse minhas redes sociais</p>
        <div className='flex gap-2'>
          <a href="https://www.linkedin.com/in/sabrina-dos-santos-furtado-67374a185/" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={48} weight='thin' />
          </a>
          <a href="https://www.instagram.com/sabrinaeevio/" target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={48} weight='thin' />
          </a>
          <a href="https://github.com/SabrinaFurtado" target="_blank" rel="noopener noreferrer">
            <GithubLogo size={48} weight='thin' />
            <p className='text-align' > Copyright: 2024</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
