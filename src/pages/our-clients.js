import React from 'react';
import Head from 'next/head';
import axios from '@/utils/axios';
import CustomHead from '@/components/CustomHead/CustomHead';



const OurClients = ({data}) => {
 console.log(data)
  return (
    <div>
      <CustomHead data={data}/>
      OurClients
    </div>
  );
};
export async function getStaticProps () {
  try {
    const response = await axios.get ('/page/home', {
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
  }
}
export default OurClients;
