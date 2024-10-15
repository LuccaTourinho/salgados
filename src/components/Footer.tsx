'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <div id='contatos' className='w-full h-[400px] bg-destructive text-destructive-foreground flex flex-col justify-start items-start pl-6 pt-20'>
      <h2 className='text-2xl font-bold mt-4'>Salgados de Vó</h2>
      <div className='text-center flex flex-row gap-2'>
        <Link href='https://wa.me/5571987546608' target='_blank' rel='noopener noreferrer' className='underline'>
          <p>Fale conosco pelo Whatsapp: (71) 98754-6608</p>
        </Link>
        <FaWhatsapp size={24}/>
      </div>
      <div className='mt-10'>
        <p>Atendimento:</p>
        <p>Segunda a Sexta das 9h às 18h</p>
        <p>Sabádo das 9h às 12h</p>
      </div>
      <div className='mt-5'>
        <p>@ 2024 Salvador</p>
        <p>Desenvolvido por Lucca Tourinho</p>
      </div>
    </div>
  )
}
