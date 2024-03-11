import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import axios from '@/utils/axios';
import ArrowRight from '@/../public/images/arrow-right.svg';
import Link from 'next/link';
const Sector = ({data}) => {
  const sectors = data.data;
  console.log (sectors);
  return (
    <div className="container font-georama flex flex-col items-center">

      {sectors.map (
        (sector, index) =>
          sector.id === parseInt (useRouter ().query.id)
            ? <div key={index}>

                {' '}
                <Image
                  src={sector.image}
                  width={1000}
                  height={1000}
                  className="w-[90rem]"
                />
                <div className=" bg-gray-800 flex items-center justify-center max-w-[90rem]">
                  <div className="container mx-auto p-8  rounded-md">
                    <div className="md:flex mb-12">
                      <div className="md:w-5/6 pr-8 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4 text-white">
                          {sector.title}
                        </h1>
                        <h2 className="text-2xl font-semibold mb-2 text-white">
                          Description
                        </h2>
                        <p className="text-lg text-gray-300">
                          {sector.text}
                        </p>
                      </div>
                      <div className="md:w-1/6">
                        <div className="mb-4">
                          <h2 className="text-2xl font-semibold mb-2 text-white">
                            Agency
                          </h2>
                          <p className="text-gray-300">{sector.agency}</p>
                        </div>
                        <div className="mb-4">
                          <h2 className="text-2xl font-semibold mb-2 text-white">
                            Director
                          </h2>
                          <p className="text-gray-300">{sector.directors}</p>
                        </div>
                        <div className="mb-4">
                          <h2 className="text-2xl font-semibold mb-2 text-white">
                            Cinematographer
                          </h2>
                          <p className="text-gray-300">
                            {sector.cinematographer}
                          </p>
                          
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold mb-2 text-white">
                            Client
                          </h2>
                          <p className="text-gray-300">
                            {sector.client}
                          </p>
                          
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
                      <Link
                        href="/our-sectors"
                        className="hover:underline hover:text-gray-500 "
                      >
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
