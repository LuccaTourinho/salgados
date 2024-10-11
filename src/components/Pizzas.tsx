'use client';

import Image from "next/image";
import Pizza1 from '../images/pizzas/pizza1.jpeg';
import Pizza2 from '../images/pizzas/pizza2.jpeg';
import Pizza3 from '../images/pizzas/pizza3.jpeg';
import Pizza4 from '../images/pizzas/pizza4.jpg';

export default function Pizzas() {
  return (
    <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        <div className='relative w-full h-full'>
            <Image
                src={Pizza1}
                alt="Pizza 1"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Pizza2}
                alt="Pizza 2"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Pizza3}
                alt="Pizza 3"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='relative w-full h-full'>
            <Image
                src={Pizza4}
                alt="Pizza 4"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    </div>
  )
}
