import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import axios from '@/utils/axios';
import ArrowRight from '@/../public/images/arrow-right.svg';
import Link from 'next/link';
const Sector = ({data}) => {
  const sectors = data.data;
console.log(sectors)
  return (
    <div className="container font-georama flex flex-col items-center">
      
      {sectors.map (
        (sector, index) =>
          sector.id === parseInt (useRouter ().query.id)
            ? <div key={index}>
                <h1 className="font-bold  md:text-2xl mb-2 underline">
                  {sector.title}
                </h1>

                {' '}<Image src={sector.image} width={1000} height={1000} className="w-full h-full"/>

                <div className="flex flex-col md:grid md:grid-cols-4 md:gap-x-5 mb-5 ">
                  <div className="md:col-span-2 mb-5 order-2 md:order-1 ">
                    {' '}
                    <h1 className="font-bold text-lg md:text-base">
                      Description
                    </h1>

                    <p className="max-w-[44rem]">{sector.text}</p>
                  </div>
                  <div className="md:col-span-2 order-1 md:order-2 ">

                    <div className="  border-white border-b-2 mb-2  ">
                      <p className="font-bold text-lg md:text-base">Agency</p>
                      <p> {sector.agency}</p>
                    </div>
                    <div className="  border-white border-b-2 mb-2 ">
                      {' '}
                      <p className="font-bold text-lg md:text-base">
                        Director                      </p>
                      <p> {sector.directors}</p>
                    </div>
                    <div className="  border-white border-b-2 mb-2 ">
                      {' '}
                      <p className="font-bold text-lg md:text-base">
                        Cinematographer
                      </p>
                      <p> {sector.cinematographer}</p>
                    </div>

                    <div className="  border-white border-b-2 mb-2  ">
                      <p className="font-bold text-lg md:text-base">Client</p>
                      <p> {sector.client}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  {' '}
                  {sectors[index - 1] == null
                    ? <p className="flex gap-x-1 items-center hover:cursor-pointer font-medium">

                        <Image
                          src={ArrowRight}
                          width={20}
                          height={20}
                          className="rotate-180"
                        />
                        previous

                      </p>
                    : <Link href={'/sector/' + sectors[index - 1].id}>

                        <p className="flex gap-x-1 items-center group relative font-medium hover:underline hover:text-gray-500">

                          <Image
                            src={ArrowRight}
                            width={20}
                            height={20}
                            className="rotate-180"
                          />
                          previous
                          <div className="group-hover:bg-white h-0.5 w-full">
                            {' '}
                          </div>
                        </p>
                      </Link>}
                  <Link href="/our-sectors" className="hover:underline hover:text-gray-500 ">
                    go back
                  </Link>
                  {sectors[index + 1] == null
                    ? <p className="flex gap-x-1 items-center hover:cursor-pointer font-medium">
                        next
                        <Image src={ArrowRight} width={20} height={20} />

                      </p>
                    : <Link href={'/sector/' + sectors[index + 1].id}>

                        <p className="flex gap-x-1 items-center group relative font-medium hover:underline hover:text-gray-500">
                          next
                          <Image src={ArrowRight} width={20} height={20} />

                          <div className="group-hover:bg-white h-0.5 w-full">
                            {' '}
                          </div>
                        </p>
                      </Link>}
                </div>

              </div>
            : ''
      )}

    </div>
  );
};

export async function getServerSideProps () {
  try {
    const response = await axios.get ('/projects', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error ('Error fetching data:', error);
    return {
      props: {
        data: null, // You can handle errors by setting data to a default value or showing an error message in your component
      },
    };
  }
}
export default Sector;
