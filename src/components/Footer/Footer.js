import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/../public/images/logo.svg';
import Instagram from '@/../public/images/instagram.svg';
import LinkedIn from '@/../public/images/linkedin-logo.svg';

const Footer = () => {
  const emailAddress = 'example@gmail.com';
  const links = [
    {text: 'about us', href: '/about-us'},
    {text: 'our work', href: '/'},
    {text: 'our clients', href: '/our-clients'},
    {text: 'our teams', href: '/our-teams'},
    {text: 'contact us', href: '/contact-us'},
  ];
  const offices = [
    'dubai, UAE',
    'beirut, LEBANON',
    'paris, FRANCE',
    'cairo, EGYPT',
    'riyadh, KSA',
  ];
  return (
    <footer className="container bg-primary-red py-12 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-5 mb-12">
        <div className="col-span-1 md:flex md:flex-col mb-5 md:mb-0 ">

          <h1 className="text-xl font-georama  font-bold mb-5 md:text-2xl  ">Sitemap</h1>
          {links.map ((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-lg group relative justify-center flex w-max md:text-xl leading-normal "
            >
              {link.text}
              <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full " />
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col mb-5 md:mb-0  ">
          {' '}
          <h1 className="text-xl font-georama font-bold mb-5 md:text-2xl  ">Offices</h1>
          {offices.map ((office, index) => (
            <Link
              href="/"
              key={index}
              className="group relative justify-center flex w-max text-lg md:text-xl"
            >
              {office}
              <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full" />
            </Link>
          ))}
        </div>
        <div className="col-span-3 flex flex-col md:items-end">
          {' '}
          <h1 className="text-xl font-georama font-bold mb-5 md:text-2xl "> inquiries</h1>
          <a
            href={`mailto:${emailAddress}`}
            className="group relative justify-center flex w-max text-lg md:text-xl"
          >
            {emailAddress}
            {' '}
            <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full" />
          </a>
        </div>

      </div>
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="flex gap-4 items-center p-1 mb-5 md:mb-0">
          <Link href="/"><Image src={Logo} loading={'eager'} /></Link>
          <span className="hidden md:block text-4xl">|</span>
          <div className="group relative hover:cursor-pointer flex justify-center  ">

            <Image src={Instagram} width={30} height={30} className="p-1" />

            <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full " />
          </div>
          <div className="group relative hover:cursor-pointer flex justify-center  ">

            <Image src={LinkedIn} width={30} height={30} className="p-1" />

            <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full " />
          </div>
        </div>
        <div />
        <div className="flex gap-4 text-3xl items-center">
          <Link
            href="/"
            className="group relative justify-center flex w-max text-xl"
          >
            Privacy Policy
            <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full" />
          </Link>
          <span className="hidden md:block">|</span>
          <Link
            href="/"
            className="group relative justify-center flex w-max text-xl"
          >
            Privacy Policy
            <div className="group-hover:w-1/2  group-hover:h-0.5  w-0 h-0  transition-all  bg-white rounded-xl duration-300  absolute top-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
