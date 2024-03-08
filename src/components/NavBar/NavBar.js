import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '@/../public/images/logo.svg';
import Menu from '../Menu/Menu';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState (false);

  return (
    <nav className="fixed  z-10 right-0  left-0 bg-black p-4 border-b-2 border-blue-200 md:static  md:container md:flex md:py-2 md:justify-between md:items-center  md:border-0 ">
      <div className="flex justify-between items-center w-full md:w-max ">
        {' '}
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white hover:bg-gray-900 hover:cursor-pointer transition-colors duration-300  md:w-28 md:h-28  md:border-4  ">
          <Link href="/">
            <Image
              loading={'eager'}
              src={Logo}
              className="w-12 h-12 rounded-full md:w-20 md:h-20   "
              alt="logo"
            />
          </Link>
        </div>
        <div
          onClick={() => {
            setIsMenuOpen (!isMenuOpen);
          }}
          className="inline cursor-pointer h-max md:hidden"
        >

          <div
            className={`${isMenuOpen ? 'transition-transform transform translate-y-[5px] translate-x-[0px] rotate-[-45deg]' : ''} w-8 h-0.5 bg-white my-2 transition-all duration-400`}
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
