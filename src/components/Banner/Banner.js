import React from 'react';
import Image from 'next/image';
import banner from '@/../public/images/banner.svg';

const Banner = () => {
  return (
    <div className=" container flex flex-col items-center  p-28 relative justify-center mb-32 -z-30">

      <div className="rounded-full w-72 h-72 absolute md:w-[30.375rem] md:h-[30.375rem] border-2   border-blue-300   bottom-12 right-90 -z-10">
        <Image
          src={banner}
          className=" rounded-full w-72 h-72  absolute md:w-[30.375rem] md:h-[30.375rem]   top-12 right-10 rotate-90 "
          alt="Banner"
        />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-[5rem] xl:text-[5.625rem] leading-none font-georama font-extralight max-w-[60rem] text-center z-30">
        here’s a teeny weeny glimpse of our work. what’s coming later is
      </h1>
      <p className="text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold font-georama z-30">
        <span className="text-primary-red">even</span> greater
      </p>
    </div>
  );
};

export default Banner;
