'use client';

import Image from "next/image";

interface IReviewProps {
    src: string;
    alt: string;
    text: string;
    name: string;
}

const Review: React.FunctionComponent<IReviewProps> = (props) => {
    
    return (
        <div className="w-full h-full flex flex-col lg:flex-row-reverse">
          <div className={`relative w-full h-full `}>
            <Image 
                src={props.src}
                alt="{props.alt}"
                fill
                className="object-contain lg:object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full p-3 text-card-foreground">
            <p className="text-sm font-geistSans text-center">&quot;{props.text}&quot;</p>
            <h1 className="text-xl text-accent font-lobster">{props.name}</h1>
          </div>  
        </div>
    )
};

export default Review;

