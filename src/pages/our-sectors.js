import React from 'react';
import axios from '@/utils/axios';
import SectorCard from '@/components/SectorCard/SectorCard';
import CustomSwiper from '@/components/CustomSwiper/CustomSwiper';
import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

const OurSectors = ({data, metadata}) => {
  console.log (data);
  return (
    <div>
      <Head>
        <title>{"Our Sectors"}</title>
        <link rel="icon" href={metadata.data.seo_image} />
        <meta name="description" content={metadata.data.seo_description} />
        <meta name="title" content={metadata.data.seo_title} />
      </Head>
      <div className="min-h-screen container ">
        <NavBar />
        <Banner />
        <h1 className="font-bold font-georama text-center text-3xl md:text-6xl mb-12">
          Our Sectors
        </h1>
        <div> <CustomSwiper cards={data.data} /></div>
      </div>
      <div className="bg-primary-red"> <Footer /></div>
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

    const response1 = await axios.get ('/page/home', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    const metadata = response1.data;
    const data = response.data;

    return {
      props: {
        data,
        metadata,
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

export default OurSectors;
