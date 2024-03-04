import Image from 'next/image';
import {Inter} from 'next/font/google';
import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Grid from '@/components/Grid/Grid';

const inter = Inter ({subsets: ['latin']});

export default function Home () {
  return (
    <main className="md:pt-8">
      <NavBar />
      <Banner/>
      <Grid/>
    </main>
  );
}
