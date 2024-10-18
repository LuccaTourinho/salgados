'use client';

import { useIntersection } from '../hooks/useIntersection';
import BehindNav from './BehindNav'
import { Suspense } from 'react';
import Review from './Review';
import Bolo1 from '../images/bolos-e-tortas/bolo1.jpg';

export default function ReviewSection() {
  const { isVisible, elementRef } = useIntersection(0.3);

  const clients = [
    {
      src: Bolo1,
      alt: 'Cliente 1',
      text: 'Os doces são incríveis, o brigadeiro derrete na boca. A qualidade é impecável!',
      name: 'João Pereira',
    },
    {
      src: Bolo1,
      alt: 'Cliente 2',
      text: 'Os salgados são deliciosos, super crocantes e fresquinhos! Recomendo para qualquer evento.',
      name: 'Maria Silva',
    },
    {
      src: Bolo1,
      alt: 'Cliente 3',
      text: 'Os doces são incríveis, o brigadeiro derrete na boca. A qualidade é impecável!',
      name: 'Joaquim Souza',
    }
  ];

  return (
    <div ref={elementRef} id='avaliacao' className={`w-screen h-screen px-3 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <BehindNav />
        <div className='w-full h-[90%] flex flex-col lg:flex-row items-center justify-center  border-2 border-border rounded-xl bg-card py-6'>
          {
            clients.map((client, index) => (
              <Review
                key={index}
                src={client.src.src}
                alt={client.alt}
                text={client.text}
                name={client.name}
              />
            ))
          }
        </div>
      </Suspense>
    </div>
  )
}
