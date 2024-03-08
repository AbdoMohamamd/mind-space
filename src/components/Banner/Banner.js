import React from 'react';
import Image from 'next/image';
import banner from '@/../public/images/banner.svg';

// Banner component
const Banner = () => {
  return (
    <div className="container flex flex-col items-center justify-center relative  p-28 mb-32 -z-30">

      {/* Circular border with an image */}
      <div className="absolute bottom-12 right-90  w-72 h-72 rounded-full border-2 border-blue-300 -z-10  md:w-[30.375rem] md:h-[30.375rem] ">
        <Image
          src={banner}
          className=" absolute top-12 right-10 rotate-90 w-72 h-72 rounded-full  md:w-[30.375rem] md:h-[30.375rem] "
          alt="Banner"
        />
      </div>

      {/* Main headline */}
      <h1 className="text-5xl md:text-7xl lg:text-[5rem] xl:text-[5.625rem] leading-none font-georama font-extralight max-w-[60rem] text-center z-30">
        here’s a teeny weeny glimpse of our work. what’s coming later is
      </h1>

      {/* Subheadline with emphasis on "even greater" */}
      <p className="text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold font-georama z-30">
        <span className="text-primary-red">even</span> greater
      </p>
    </div>
  );
};

export default Banner;
