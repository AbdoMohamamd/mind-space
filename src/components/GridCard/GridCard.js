import React from 'react';
import Fizz from '@/../public/images/fizz.jpg';
import Image from 'next/image';
const GridCard = ({image, title, paragraph}) => {
  return (
    <div className="hover:cursor-pointer ">
      <div className=" overflow-hidden">
        {' '}
        <Image
          src={image}
          className="transition-transform transform-gpu hover:scale-125  duration-1000"
        />
      </div>
      <h1 className="text-xl font-georama font-bold ">{title}</h1>

      <p className="font-georama font-normal">{paragraph}</p>
    </div>
  );
};

export default GridCard;
