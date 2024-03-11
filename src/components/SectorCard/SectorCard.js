import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const SectorCard = ({id, title, image, description}) => {
  return (
    <Link href={'/sector/' + id}>
      {' '}<div>
        <Image src={image} width={500} height={500} />
        <h1 className="text-lg md:text-xl font-georama font-bold">
          {title}
        </h1>
        <p className="text-sm md:text-lg font-georama font-normal max-w-96">
          {description}
        </p>
        <p className="underline-offset-8 underline flex  ">
          Learn More
          {' '}
          <Image src={'/images/arrow-right.svg'} width={20} height={20} />
        </p>
      </div>
    </Link>
  );
};

export default SectorCard;
