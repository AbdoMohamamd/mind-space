import React from 'react';
import axios from '@/utils/axios';
import SectorCard from '@/components/SectorCard/SectorCard';
import CustomSwiper from '@/components/CustomSwiper/CustomSwiper';
import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';

const OurSectors = ({data}) => {
  console.log (data);
  return (
    <div >
      <div className="min-h-screen container ">
        <NavBar />
        <Banner />
        <h1 className="font-bold font-georama text-center text-6xl mb-12">
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

export default OurSectors;
