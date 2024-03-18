import React from 'react';
import axios from '@/utils/axios';
import SectorCard from '@/components/SectorCard/SectorCard';
import CustomSwiper from '@/components/CustomSwiper/CustomSwiper';
import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

const OurSectors = ({data1, data2}) => {
  return (
    <div className="md:pt-8">
      <Head>
        <title>our sectors</title>
        <link rel="icon" href={data2.data.seo_image} />
        <meta name="description" content={data2.data.seo_description} />

      </Head>
      <NavBar />
      <Banner />
      <div className="min-h-screen container ">

        <h1 className="font-bold font-georama text-center text-3xl md:text-6xl mb-12">
          Our Sectors
        </h1>
        <div> <CustomSwiper cards={data1.data} /></div>
      </div>
      <div className="bg-primary-red"> <Footer /></div>
    </div>
  );
};
export async function getStaticProps () {
  try {
    const response = await axios.get ('/projects', {
      headers: {
        'Accept-Language': 'en',
      },
    });
    const data1 = response.data;
    const response1 = await axios.get ('/page/home', {
      headers: {
        'Accept-Language': 'en',
      },
    });
    const data2 = response1.data;

    return {
      props: {
        data1,
        data2,
      },
    };
  } catch (error) {
    console.error ('Error fetching data:', error);
    return {
      props: {
        data1: null,
        data2: null,
      },
    };
  }
}

export default OurSectors;
