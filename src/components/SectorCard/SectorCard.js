import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const SectorCard = ({id, title, image, description}) => {
  return (
    <Link href={'/sector/' + id}>
      {' '}<div className="w-max h-[30rem] ">
        <Image src={image} width={500} height={500} />
        <h1 className="text-lg md:text-xl font-georama font-bold ">
          {title}
        </h1>
        <p className="text-sm md:text-lg font-georama font-normal max-w-96 overflow-hidden group-hover:text-black transition-all duration-300 ease-in-out">
          {description}
        </p>
        <p className="  flex gap-x-2 border-b-2 broder-white w-max ">
          Learn More

          <Image src={'/images/arrow-right.svg'} width={20} height={20} />

        </p>
      </div>
    </Link>
  );
};

export default SectorCard;
