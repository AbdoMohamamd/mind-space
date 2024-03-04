import React from 'react';
import Image from 'next/image';
import banner from '@/../public/images/banner.svg';

const Banner = () => {
  return (
    <div className=" container flex flex-col items-center p-28 relative justify-center mb-32">

      <div className="rounded-full absolute md:w-[30.375rem] md:h-[30.375rem] border-4   border-blue-300  bottom-12 right-90">
        <Image
          src={banner}
          className=" rounded-full absolute md:w-[30.375rem] md:h-[30.375rem]  top-12 right-10 rotate-90 "
        />
      </div>
      <h1 className="text-[5.625rem] leading-none font-georama font-extralight max-w-[60rem] text-center z-30">
        here’s a teeny-weeny
        glimpse of our work.
        what’s coming later is
      </h1>
      <p className="text-[5rem] font-bold font-georama z-30">
        <span className="text-[#Fe424c]">even</span> greater
      </p>
    </div>
  );
};

export default Banner;
