'use client';

import Image from 'next/image';
import Bolo1 from '../images/bolos-e-tortas/bolo1.jpg';
import Bolo2 from '../images/bolos-e-tortas/bolo2.jpg';
import Bolo4 from '../images/bolos-e-tortas/bolo4.jpg';
import Torta from '../images/bolos-e-tortas/torta.jpg';

export default function Bolos() {
  return (
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
        <div className='relative w-full h-full'>
            <Image
                src={Bolo1}
                alt="Bolo 1"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Bolo2}
                alt="Bolo 2"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Bolo4}
                alt="Bolo 4"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Torta}
                alt="Torta"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    </div>
  )
}
