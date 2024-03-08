import React from 'react';

import Image from 'next/image';
const GridCard = ({image, title, paragraph,alt}) => {
  return (
    <div className="hover:cursor-pointer ">
      <div className=" overflow-hidden">
        {' '}
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={alt}
          className="transition-transform transform-gpu hover:scale-150 duration-1000"
        />
      </div>
      <h1 className="text-lg md:text-xl font-georama font-bold ">{title}</h1>

      <p className="text-sm font-georama font-normal">{paragraph}</p>
    </div>
  );
};

export default GridCard;
