import React from 'react';
import Head from 'next/head';
import axios from '@/utils/axios';
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
export default AboutUs;
