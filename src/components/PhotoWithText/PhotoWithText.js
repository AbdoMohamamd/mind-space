import React from 'react';
import Image from 'next/image';

const PhotoWithText = ({textFirst, image, text, subtext}) => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-x-5 lg:gap-x-12">
        <div
          style={{order: textFirst ? 1 : 2}}
          className={`flex items-center ${textFirst ? 'justify-end' : ''}`}
        >
          <p className="text-[0.3rem] xs:text-[0.4rem] sm:text-xs md:text-lg lg:text-2xl xl:text-3xl font-georama font-bold max-w-24 xs:max-w-28 sm:max-w-40  md:max-w-56 lg:max-w-80 ">
            {text} <span className="text-primary-red">{subtext}</span>
          </p>
        </div>
        <div style={{order: textFirst ? 2 : 1}}>
          <Image src={image} />
        </div>
      </div>
    </div>
  );
};

export default PhotoWithText;
