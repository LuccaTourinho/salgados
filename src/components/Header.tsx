'use client';

import {useState, useEffect, createRef} from 'react';
import Image from 'next/image';
import LogoPNG from '../images/Logo.png';
import { useRouter, usePathname } from 'next/navigation';
import { AlignJustify } from 'lucide-react';
import { motion } from 'framer-motion';


export default function Header() {
  const sections = [
    { name: 'Home', ref: createRef<HTMLElement>() },
    { name: 'Produtos', ref: createRef<HTMLElement>() },
    { name: 'Avaliação', ref: createRef<HTMLElement>() },
    { name: 'Sobre Nós', ref: createRef<HTMLElement>() },
    { name: 'Contatos', ref: createRef<HTMLElement>() },
  ]

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Representa a quantidade de pixels quo o usuário já rolou a partir do topo da página
      const windowHeight = window.innerHeight; // Altura da janela do navegador (ou viewport)
      const docHeight = document.body.scrollHeight; // Altura total do conteúdo da página

      const totalHeight = docHeight - windowHeight; // Subtraimos a altura total do conteúdo pelo tamanho da janela do navegador para obter o valor que pode ser rolado
      const percentage = (scrollTop / totalHeight) * 100; // Dividimos o valor de pixel rolados pelo valor total possível de rolagem e multiplicamos por 100 para obter a percentagem 
 
      setScrollPercentage(percentage);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    window.addEventListener('scroll', handleScroll);

    return
  }, []);

  return (
    <header className='fixed top-0 z-1 shadow-md h-[10%] lg:h-[18%] xl:h-[20%] w-full flex flex-col items-center'>
      <div className='w-full h-full flex flex-row items-center justify-center bg-background'>
        <Image src={LogoPNG} alt='Logo' className='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:h-32 2xl:w-32' />
        <nav className='hidden sm:block'>
          <div className='flex items-center justify-around gap-8'>
          {sections.map((section, index) => (
              <motion.h1
                key={index}
                className='text-md uppercase font-bold hover:text-accent cursor-pointer'
                whileHover={{ scale: 1.1 }} // Animação ao passar o mouse
                onClick={() => scrollToSection(section?.ref ?? {current: null})}
              >
                {section?.name}
              </motion.h1>
            ))}
          </div>
        </nav>
        <div className='flex justify-center items-center sm:hidden hover:cursor-pointer hover:text-accent hover:scale-110 transition-all duration-200'>
          <AlignJustify size={32} />
        </div>
      </div>
      <div className='w-full h-[10px] bg-foreground ' style={{ width: `${scrollPercentage}%` }}></div>
    </header>
  )
}
