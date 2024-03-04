import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '@/../public/images/logo.svg';
import Menu from '../Menu/Menu';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState (false);

  return (
    <nav className="p-4 md:p-0 md:container md:flex md:md:py-2 md:justify-between md:items-center border-b-2 border-blue-200 md:border-0 ">
      <div className="flex justify-between items-center w-full md:w-max ">
        {' '}
        <div className="w-16 h-16 md:w-28 md:h-28 border-2 md:border-4 rounded-full border-white flex items-center justify-center hover:bg-gray-400 transition-colors duration-300 hover:cursor-pointer ">
          <Link href="/">
            <Image
              src={Logo}
              className="rounded-full w-12 h-12 md:w-20 md:h-20   "
            />
          </Link>
        </div>
        <div
          onClick={() => {
            setIsMenuOpen (!isMenuOpen);
          }}
          className={` ${'inline cursor-pointer md:hidden h-max'}`}
        >
          {/* Hamburger menu bars */}
          <div
            className={`${isMenuOpen ? 'transition-transform transform translate-y-[5px] translate-x-[0px] rotate-[-45deg]' : ''} ${'w-8 h-0.5 bg-white mt-2 mb-2 transition-all duration-400'}`}
          />

          <div
            className={`${isMenuOpen ? 'transition-transform transform translate-y-[-5px] translate-x-[0px] rotate-[45deg] w-8' : 'w-4'} ${' h-0.5 bg-white mt-2 mb-2 transition-all duration-400'}`}
          />
        </div>
      </div>

      <Menu isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default NavBar;
