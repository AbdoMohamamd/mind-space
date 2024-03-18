import React from 'react';
import Head from 'next/head';
import axios from '@/utils/axios';
import CustomHead from '@/components/CustomHead/CustomHead';



import CustomHead from '@/components/CustomHead/CustomHead';
import Footer from '@/components/Footer/Footer';


const OurClients = ({data}) => {
  console.log (data);
  return (



    <div className="md:pt-8">
      <Head>
        <title>our clients</title>
        <link rel="icon" href={data.data.seo_image} />
        <meta name="description" content={data.data.seo_description} />
      </Head> <NavBar />
      <Banner />

      OurClients
      <Footer />
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
