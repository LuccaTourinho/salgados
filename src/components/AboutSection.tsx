'use client';

import BehindNav from './BehindNav';
import { Suspense } from 'react';

export default function AboutSection() {
  return (
    <div id='sobre' className={`w-screen h-screen transition-opacity duration-700 ease-in-out`}>
      <Suspense fallback={<div>Loading...</div>}>
      <BehindNav />
      <div className='relative h-[90%] lg:h-[82%] xl:h-[80%] w-full flex flex-col justify-center items-center px-4'>
       <h1 className='text-4xl text-primary font-lobster'>Sobre Nós</h1>
       <p className='text-xs lg:text-lg text-secondary'>
       Olá! Sou Sandra de Magalhães, a microempreendedora responsável pelos produtos e serviços<br/>
       oferecidos aqui. Com uma paixão por confeitaria e um compromisso com a qualidade, trago opções<br/>
       deliciosas e personalizadas para cada cliente.<br/>
        <br/>
        Além de atender aos pedidos tradicionais, também realizo projetos mais elaborados para eventos<br/>
        especiais. Já tive a honra de trabalhar em grandes ocasiões, como o Camarote Salvador e a Festa<br/>
        Junina da Secretaria de Educação, além de diversos casamentos, festas de 15 anos e eventos corporativos.<br/>
        <br/>
        Cada produto é feito com carinho e atenção aos detalhes, buscando sempre superar as expectativas.<br/>
        Estou aqui para transformar sua celebração em um momento inesquecível com sabores que marcam!<br/>
       </p>
      </div>
      </Suspense>
    </div>
  )
}
