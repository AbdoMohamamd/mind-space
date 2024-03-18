import React from 'react';
import Image from 'next/image';

const PhotoWithText = ({textFirst, image, text, subtext}) => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-x-5  ">
        <div
          style={{order: textFirst ? 1 : 2}}
          className={`flex flex-col justify-center  col-span-2 ${textFirst ? 'items-end' : ''}`}
        >
          <div>

            <p className="text-[0.6rem] !leading-none xs:text-xs sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-georama font-normal max-w-24 xs:max-w-28 sm:max-w-44  md:max-w-56 lg:max-w-80 xl:max-w-96 2xl:max-w-[30rem] ">
              {text}
            </p>
            <p className="text-[0.3rem] xs:text-[0.4rem] sm:text-[0.6rem] md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl font-georama font-normal max-w-24 xs:max-w-28 sm:max-w-44  md:max-w-56 lg:max-w-80  xl:max-w-96 2xl:max-w-[30rem] text-primary-red">
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
