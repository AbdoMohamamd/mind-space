import Image from 'next/image';
import {Inter} from 'next/font/google';
import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Grid from '@/components/Grid/Grid';
import axios from '@/utils/axios';
import {useEffect, useState} from 'react';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head'


const HomePage = ({data,data1}) => {

  const metadata=data1.data
  const [scrollBarPercentage, setScrollBarPercentage] = useState (0);
  useEffect (() => {
    const handleScrollEvent = () => {
      const body = document.body;
      const html = document.documentElement;
      const windowHeight = window.innerHeight;

      const percentage = Math.ceil (
        window.scrollY *
          100 /
          Math.max (
            body.scrollHeight - windowHeight,
            html.scrollHeight - windowHeight
          )
      );

      setScrollBarPercentage (percentage);
    };
    window.addEventListener ('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener ('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <main className="md:pt-8">
      <Head><title>Home</title>
      {/* <meta name='description'>{metadata.seo_description}</meta> */}
      </Head>
      <NavBar />
      <Banner />
      <div className="hidden md:block w-1 bg-slate-500 h-1/6 fixed bottom-1/2 left-20 rounded-lg">
        <div
          className={`w-1  bg-primary-red  rounded-lg`}
          style={{height: scrollBarPercentage + '%'}}
        />
      </div>

      <section className="flex flex-col items-center mb-12 md:mb-36 ">
        <Grid data={data.data.sections} />
        <Image src="/images/line.svg" width={200} height={200} alt={'line'} />
        <p className="font-georama">
          <span className="font-georama font-medium text-primary-red">
            we'd love
          </span>
          {' '}
          to see your project added here
        </p>
      </section>
      <Footer />
    </main>
  );
};

export async function getServerSideProps (url) {
  try {
    const response = await axios.get ('/page/news', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    const data = response.data;
    const response1 = await axios.get ('/page/home', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    const data1 = response1.data;
    

    return {
      props: {
        data,data1
      },
    };
  } catch (error) {
    console.error ('Error fetching data:', error);
    return {
      props: {
        data: null,data1:null // You can handle errors by setting data to a default value or showing an error message in your component
      },
    };
  }
}

export default HomePage;
