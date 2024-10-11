'use client';

import {useState} from 'react'
import BehindNav from './BehindNav'
import Bolos from './Bolos';
import Doces from './Doces';
import Pizzas from './Pizzas';
import Salgados from './Salgados';
import { Suspense } from 'react';

export default function ProductSection() {
  const [activeSection, setActiveSection] = useState<number>(0); 

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  const hideLeft = () => {
    return 'translate-x-[-100%] transition-transform duration-300'; 
  };
  
  const hideRight = () => {
    return 'translate-x-[100%] transition-transform duration-300'; 
  };
  
  const returnFromLeft = () => {
    return 'translate-x-0 transition-transform duration-300'; 
  };

  return (
    <div id='produtos' className='w-screen h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <BehindNav />
      <div className='relative h-[90%] lg:h-[82%] xl:h-[80%] w-full'>
        <div className='flex flex-row justify-around items-center bg-primary h-[10%] py-3'>
        {['Bolos e Tortas', 'Doces', 'Pizzas', 'Salgados'].map((section, index) => (
              <div
                key={index}
                className={`
                  flex items-center justify-center 
                  text-xl font-pacifico
                  ${activeSection === index ? 'text-muted-foreground bg-muted' : 'text-secondary-foreground bg-secondary hover:cursor-pointer'}
                  rounded-lg 
                  px-4 py-2
                `}
                onClick={() => handleSectionClick(index)} 
              >
                {section}
              </div>
            ))}
        </div>
        <div className='relative h-[90%] overflow-hidden'>
        <div className={`absolute w-full h-full ${activeSection === 0 ? returnFromLeft() : (activeSection > 0 ? hideLeft() : hideRight())}`}>
              <Bolos />
            </div>
            <div className={`absolute w-full h-full ${activeSection === 1 ? returnFromLeft() : (activeSection > 1 ? hideLeft() : hideRight())}`}>
              <Doces />
            </div>
            <div className={`absolute w-full h-full ${activeSection === 2 ? returnFromLeft() : (activeSection > 2 ? hideLeft() : hideRight())}`}>
              <Pizzas />
            </div>
            <div className={`absolute w-full h-full ${activeSection === 3 ? returnFromLeft() : (activeSection > 3 ? hideLeft() : hideRight())}`}>
              <Salgados />
            </div>
        </div>
      </div>
      </Suspense>
    </div>
  )
}
