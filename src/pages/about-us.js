import React from 'react';
import axios from '@/utils/axios';
import Head from 'next/head'
const AboutUs = ({metadata}) => {
  return (
    <div>
      {' '} <Head>
        <title>{'Contact'}</title>
        <link rel="icon" href={metadata.data.seo_image} />
        <meta name="description" content={metadata.data.seo_description} />
        <meta name="title" content={metadata.data.seo_title} />
      </Head>
    </div>
  );
};
export async function getServerSideProps () {
  try {
    const response = await axios.get ('/page/home', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    const metadata = response.data;

    return {
      props: {
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
export default AboutUs;
