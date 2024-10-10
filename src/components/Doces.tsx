'use client';

import Image from "next/image";
import Doce1 from '../images/doces/doce1.jpg';
import Doce2 from '../images/doces/doce2.jpg';
import Doce3 from '../images/doces/doce3.jpg';
import Doce4 from '../images/doces/doce4.jpg';

export default function Doces() {
  return (
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
        <div className='relative w-full h-full'>
            <Image
                src={Doce1}
                alt="Doce 1"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Doce2}
                alt="Doce 2"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Doce3}
                alt="Doce 3"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Doce4}
                alt="Doce 4"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    </div>
  )
}
