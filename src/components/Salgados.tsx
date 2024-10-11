'use client';

import Image from "next/image";
import Salgado1 from '../images/salgados/salgado1.jpg';
import Salgado2 from '../images/salgados/salgado2.jpg';
import Salgado3 from '../images/salgados/salgado3.jpg';
import Salgado4 from '../images/salgados/salgado4.jpg';

export default function Salgados() {
  return (
    <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        <div className='relative w-full h-full'>
            <Image
                src={Salgado1}
                alt="Salgado 1"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Salgado2}
                alt="Salgado 2"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Salgado3}
                alt="Salgado 3"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Salgado4}
                alt="Salgado 4"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    </div>
  )
}
