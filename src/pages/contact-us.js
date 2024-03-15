<<<<<<< Updated upstream
import React from 'react'
=======
import React from 'react';
import Head from 'next/head';
import axios from '@/utils/axios';
import CustomHead from '@/components/CustomHead/CustomHead';
import Footer from '@/components/Footer/Footer';
>>>>>>> Stashed changes

const ContactUs = () => {
  return (
<<<<<<< Updated upstream
    <div>ContactUs</div>
  )
=======
    <div className="md:pt-8">
      <Head><title>ContactUs</title>
      <link rel='icon' href={data.data.seo_image}/>
      <meta name='description' content={data.data.seo_description}/>
      </Head> <NavBar />
      <Banner />
      ContactUs
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
>>>>>>> Stashed changes
}

export default ContactUs