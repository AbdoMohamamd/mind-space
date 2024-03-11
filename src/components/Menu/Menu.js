import React from 'react';
import Link from 'next/link';
import {Switch} from '@nextui-org/react';
import {useRouter} from 'next/router';

const Menu = ({isMenuOpen}) => {
  const links = [
    {text: 'about us', href: '/about-us'},
    {text: 'our work', href: '/'},
    {text: 'our clients', href: '/our-clients'},
    {text: 'our sectors', href: '/our-sectors'},
    {text: 'contact us', href: '/contact-us'},
  ];
  const {pathname} = useRouter ();
  
  return (
    <div
      className={`${isMenuOpen ? 'max-h-[30rem]' : 'max-h-0 '} md:h-max bg-black z-50 overflow-hidden items-center flex flex-col  md:flex-row md:overflow-visible  text-5xl md:gap-x-12 font-georama font-medium md:text-[1.0625rem] transition-all ease-in-out duration-500`}
    >
      {links.map ((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${pathname === link.href ? 'text-gray-400' : 'hover:text-gray-400'} w-max  md:h-full   group flex flex-col items-center relative  ease-in-out duration-300 md:duration-0 pb-4  `}
        >
          {link.text}
          <div
            className={`${pathname === link.href ? 'md:w-12 w-full h-0.5' : 'group-hover:md:w-12 group-hover:w-full group-hover:h-0.5  w-0 h-0 '} transition-all  bg-blue-400 rounded-xl duration-300  absolute bottom-0 md:top-5`}
          />
        </Link>
      ))}

    </div>
  );
};

export default Menu;
