'use client';

import { useIntersection } from '../hooks/useIntersection';
import BehindNav from './BehindNav';
import LogoPNG from '../images/Logo.png';
import Image from 'next/image';

export default function HomeSection() {
  const { isVisible, elementRef } = useIntersection(0.7);

  return (
    <div ref={elementRef} id='home' className='w-screen h-screen'>
      <BehindNav />
      <div className='relative h-[90%] lg:h-[82%] xl:h-[80%] w-full '>
        <div className='absolute -z-10 w-full h-full shadow-none'>
          <Image
            src={LogoPNG}
            alt="Logo" 
            fill
            className='object-contain'
          />
        </div>
        <div 
          className={`
            flex flex-col w-full h-full justify-start pl-0 pt-12 items-center transition-all duration-700 overflow-hidden
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}
          `}>
          <h1 className='text-4xl text-primary font-greatVibes'>Salgados de Vó</h1>
          <h3 className='text-xl text-secondary font-lobster text-center'>O sabor da tradição, feito com o carinho de vó.</h3>
        </div>
      </div>
    </div>
  )
}
