'use client';

import {useState} from 'react'
import BehindNav from './BehindNav'
import Bolos from './Bolos';
import Doces from './Doces';
import { Suspense } from 'react';

interface products {
  bolos_e_tortas: boolean;
  doces: boolean;
  pizzas: boolean;
  salgados: boolean;
}

export default function ProductSection() {
  const [activeSection, setActiveSection] = useState<products>({
    bolos_e_tortas: true,
    doces: false,
    pizzas: false,
    salgados: false
  });

  const handleSectionClick = (section: string) => {
    if (section === 'bolos_e_tortas') {
      setActiveSection({bolos_e_tortas: true, doces: false, pizzas: false, salgados: false})
    } else if (section === 'doces') {
      setActiveSection({bolos_e_tortas: false, doces: true, pizzas: false, salgados: false})
    } else if (section === 'pizzas') {
      setActiveSection({bolos_e_tortas: false, doces: false, pizzas: true, salgados: false})
    } else if (section === 'salgados') {
      setActiveSection({bolos_e_tortas: false, doces: false, pizzas: false, salgados: true})
    }
  };

  return (
    <div id='produtos' className='w-screen h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <BehindNav />
      <div className='relative h-[90%] lg:h-[82%] xl:h-[80%] w-full'>
        <div className='flex flex-row justify-around items-center bg-primary h-[10%] py-3'>
          <div 
            className={`
              flex items-center justify-center 
              text-xl  
              ${activeSection.bolos_e_tortas ? 'text-muted-foreground bg-muted' : 'text-secondary-foreground bg-secondary hover:cursor-pointer'}
              rounded-lg 
              px-4 py-2 
            `}

            onClick={() => handleSectionClick('bolos_e_tortas')}
          >
            Bolos e Tortas
          </div>
          <div 
            className={`
              flex items-center justify-center 
              text-xl  
              ${activeSection.doces ? 'text-muted-foreground bg-muted' : 'text-secondary-foreground bg-secondary hover:cursor-pointer'}
              rounded-lg 
              px-4 py-2 
            `}

            onClick={() => handleSectionClick('doces')}
          >
            Doces
          </div>
          <div 
            className={`
              flex items-center justify-center 
              text-xl  
              ${activeSection.pizzas ? 'text-muted-foreground bg-muted' : 'text-secondary-foreground bg-secondary hover:cursor-pointer'}
              rounded-lg 
              px-4 py-2 
            `}

            onClick={() => handleSectionClick('pizzas')}
          >
            Pizzas
          </div>
          <div 
            className={`
              flex items-center justify-center 
              text-xl  
              ${activeSection.salgados ? 'text-muted-foreground bg-muted' : 'text-secondary-foreground bg-secondary hover:cursor-pointer'}
              rounded-lg 
              px-4 py-2 
            `}

            onClick={() => handleSectionClick('salgados')}
          >
            Salgados
          </div>
        </div>
        {
          activeSection.bolos_e_tortas && <Bolos />
        }
        {
          activeSection.doces && <Doces />
        }
      </div>
      </Suspense>
    </div>
  )
}
