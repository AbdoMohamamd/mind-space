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
                <h1 className="font-bold  w-max">{sector.title}</h1>

                {' '}<Image src={sector.image} width={800} height={800} />

                <div className="flex gap-x-5 w-max">
                  <div>
                    {' '}<h1 className="underline">Description</h1>

                    <p className="max-w-[44rem]">{sector.text}</p>
                  </div>
                  <div>
                    {' '} <div>
                      <p className="underline">Agency</p>
                      <p> {sector.agency}</p>
                      <p className="underline">Cinematographer</p>
                      <p> {sector.cinematographer}</p>
                      <p className="underline">Client</p>
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
