import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import axios from '@/utils/axios';
const Sector = ({data}) => {
  const sectors = data.data;
  console.log (sectors[0]);
  return (
    <div className="container font-georama flex flex-col items-center">
      {sectors.map (
        (sector, index) =>
          sector.id === parseInt (useRouter ().query.id)
            ? <div key={index}>
                <h1 className="font-bold  w-max text-2xl mb-2 underline">{sector.title}</h1>

                {' '}<Image src={sector.image} width={800} height={800} />

                <div className="grid grid-cols-4 gap-x-5 w-max ">
                  <div className="col-span-3">
                    {' '}<h1 className="font-bold">Description</h1>

                    <p className="max-w-[44rem]">{sector.text}</p>
                  </div>
                  <div className="col-span-1 ">

                    <div className="  border-white border-b-2 mb-2">
                      <p className="font-bold">Agency</p>
                      <p> {sector.agency}</p>
                    </div>
                    <div className="  border-white border-b-2 mb-2">
                      {' '}<p className="font-bold">Cinematographer</p>
                      <p> {sector.cinematographer}</p>
                    </div>

                    <div className="  border-white border-b-2 mb-2">
                      <p className="font-bold">Client</p>
                      <p> {sector.client}</p>
                    </div>
                  </div>
                </div>

                <p />
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
