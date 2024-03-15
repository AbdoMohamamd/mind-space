import React from 'react';
<<<<<<< Updated upstream

const AboutUs = () => {
  return <div>AboutUs</div>;
=======
import Head from 'next/head';
import axios from '@/utils/axios';
import CustomHead from '@/components/CustomHead/CustomHead';
import Footer from '@/components/Footer/Footer';



const AboutUs = ({data}) => {
 console.log(data)
  return (
    <div className="md:pt-8">
      <Head><title>about us</title>
      <link rel='icon' href={data.data.seo_image}/>
      <meta name='description' content={data.data.seo_description}/>
      </Head>
      <NavBar />
      <Banner />
      AboutUs
      <Footer/>
    </div>
  );
>>>>>>> Stashed changes
};

export default AboutUs;
