'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LogoPNG from '../images/Logo.png';
import { AlignJustify } from 'lucide-react';

export default function Header() {
  // Define as seções da página com seus respectivos nomes e IDs
  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'Produtos', id: 'produtos' },
    { name: 'Avaliação', id: 'avaliacao' },
    { name: 'Sobre Nós', id: 'sobre' },
    { name: 'Contatos', id: 'contatos' },
  ];

  // Estado que armazena a seção atualmente ativa
  const [activeSection, setActiveSection] = useState('home');

  // Estado que armazena a porcentagem de rolagem da janela
  const [scrollPercentage, setScrollPercentage] = useState(0);

  //
  const [showNav, setShowNav] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Posição atual do scroll
    const windowHeight = window.innerHeight; // Altura da janela
    const docHeight = document.body.scrollHeight; // Altura total do documento

    // Calcular a percentagem de rolagem
    const totalHeight = docHeight - windowHeight;
    const percentage = (scrollTop / totalHeight) * 100;
    setScrollPercentage(percentage);

    // Log dos valores no console
    // console.clear();
    // console.log('scrollTop:', scrollTop);
    // console.log('windowHeight:', windowHeight);
    // console.log('docHeight:', docHeight);
    // console.log('totalHeight:', totalHeight);
    // console.log('percentage:', percentage);

    // Verificar qual seção está ativa
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id); // Obtém a seção pelo ID
      if (sectionElement) {
        const { offsetTop, offsetHeight } = sectionElement; // Posição e altura da seção
        // Verifica se a posição do scroll está dentro da seção
        if (scrollTop >= offsetTop && scrollTop < offsetTop + offsetHeight) {
          setActiveSection(section.id); // Atualiza a seção ativa
        }
      }
    });
  };

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Adiciona um listener para o evento de scroll
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove o listener ao desmontar o componente
    };
  }, []);

  return (
    <header className='fixed top-0 z-10 shadow-md h-[10%] lg:h-[18%] xl:h-[20%] w-full flex flex-col items-center'>
      <div className='w-full h-full flex flex-row items-center justify-center bg-background'>
        <Image src={LogoPNG} alt='Logo' className='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:h-32 2xl:w-32' />
        <nav className='hidden sm:block'>
          <div className='flex items-center justify-around gap-8'>
            {sections.map((section) => (
              <h1
                key={section.id}
                className={`text-md uppercase font-bold cursor-pointer ${
                  activeSection === section.id ? 'text-accent scale-110' : 'hover:text-accent'
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.name}
              </h1>
            ))}
          </div>
        </nav>
        <div 
          onClick={handleToggleNav} 
          className={`flex justify-center items-center sm:hidden hover:scale-110 hover:cursor-pointer ${!showNav ? 'hover:text-accent' : 'text-accent'} transition-all duration-200`}
        >
          <AlignJustify size={32} />
        </div>
      </div>
      <div className={`h-[10px] bg-foreground`} style={{ width: `${scrollPercentage}%` }}></div>
      {
        showNav && (
          <nav className='fixed left-0 top-[10%] z-10 block sm:hidden shadow-md w-full bg-background'>
            <div className='flex flex-col items-center justify-between gap-2'>
              {sections.map((section) => (
                <h1
                  key={section.id}
                  className={`text-md uppercase font-bold cursor-pointer ${
                    activeSection === section.id ? 'text-accent scale-110' : 'hover:text-accent'
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.name}
                </h1>
              ))}
            </div>
          </nav>
        )
      }
    </header>
  );
}
