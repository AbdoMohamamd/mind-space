import React from 'react';
import Link from 'next/link';
import {Switch} from '@nextui-org/react';
const Menu = ({isMenuOpen}) => {
  return (
    <div
      className={`${isMenuOpen ? 'max-h-full' : 'max-h-0 overflow-hidden '} items-center flex flex-col  md:flex-row md:overflow-visible  text-5xl md:flex md:gap-x-12 font-georama font-medium md:text-[1.0625rem] transition-all ease-in-out duration-300 md:items-center`}
    >
      <Link
        href="/"
        className={`${isMenuOpen ? 'h-20' : 'h-0'}  w-max md:h-full  group flex flex-col items-center relative hover:text-gray-400 ease-in-out duration-300 md:duration-0 pb-1 `}
      >
        about us{' '}
        <div className="transition-all  w-0 h-0 group-hover:md:w-12 group-hover:w-full group-hover:h-0.5 bg-blue-400 rounded-xl duration-300  absolute bottom-5 md:bottom-0" />
      </Link>
      <Link
        href="/"
        className={`${isMenuOpen ? 'h-20' : 'h-0'} w-max md:h-full  group flex flex-col items-center relative hover:text-gray-400 ease-in-out duration-300 md:duration-0 pb-1 `}
      >
        our work
        {' '}
        <div className="transition-all  w-0 h-0 group-hover:md:w-12 group-hover:w-full group-hover:h-0.5 bg-blue-400 rounded-xl duration-300 absolute bottom-0" />
      </Link>

      <Link
        href="/"
        className={`${isMenuOpen ? 'h-20' : 'h-0'} w-max md:h-full  group flex flex-col items-center relative hover:text-gray-400 ease-in-out duration-300 md:duration-0 pb-1 `}
      >
        our clients
        {' '}
        <div className="transition-all  w-0 h-0 group-hover:md:w-12 group-hover:w-full group-hover:h-0.5 bg-blue-400 rounded-xl duration-300 absolute bottom-0" />
      </Link>
      <Link
        href="/"
        className={`${isMenuOpen ? 'h-20' : 'h-0'} w-max md:h-full  group flex flex-col items-center relative hover:text-gray-400 ease-in-out duration-300 md:duration-0 pb-1 `}
      >
        our teams
        {' '}
        <div className="transition-all  w-0 h-0 group-hover:md:w-12 group-hover:w-full group-hover:h-0.5 bg-blue-400 rounded-xl duration-300 absolute bottom-0" />
      </Link>
      <Link
        href="/"
        className={`${isMenuOpen ? 'h-20' : 'h-0'} w-max md:h-full  group flex flex-col items-center relative hover:text-gray-400 ease-in-out duration-300 md:duration-0 pb-1 `}
      >
        contact us
        {' '}
        <div className="transition-all  w-0 h-0 group-hover:md:w-12 group-hover:w-full group-hover:h-0.5 bg-blue-400 rounded-xl duration-300 absolute bottom-0" />
      </Link>
     
    </div>
  );
};

export default Menu;
