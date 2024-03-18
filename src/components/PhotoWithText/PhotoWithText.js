import React from 'react';
import Image from 'next/image';

const PhotoWithText = ({textFirst, image, text, subtext}) => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-x-5 md:gap-x-12 ">
        <div
          style={{order: textFirst ? 1 : 2}}
          className={`flex flex-col justify-center  col-span-2 ${textFirst ? 'items-end' : ''}`}
        >
          <div>

            <p className="text-[0.3rem] xs:text-[0.4rem] sm:text-xs md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-georama font-normal max-w-24 xs:max-w-28 sm:max-w-40  md:max-w-56 lg:max-w-80 xl:max-w-96 ">
              {text}
            </p>
            <p className="text-[0.2rem] xs:text-[0.3rem] sm:text-[0.5rem] md:text-xs lg:text-sm xl:text-base  2xl:text-lg font-georama font-normal max-w-24 xs:max-w-28 sm:max-w-40  md:max-w-56 lg:max-w-80  text-primary-red">
              {subtext}
            </p>
          </div>
        </div>
        <div style={{order: textFirst ? 2 : 1}} className="col-span-3 ">
          <Image src={image} />
        </div>
      </div>
    </div>
  );
};

export default PhotoWithText;
