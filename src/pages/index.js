import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner/Banner";
import Grid from "@/components/Grid/Grid";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import CustomHead from "@/components/CustomHead/CustomHead";
import TextSwiper from "@/components/TextSwiper/TextSwiper";
import PhotoWithText from "@/components/PhotoWithText/PhotoWithText";
import MovieCollection from "@/../public/images/movie-collection.jpg";

const HomePage = ({ data1, data2 }) => {
  console.log(data2);
  const [scrollBarPercentage, setScrollBarPercentage] = useState(0);
  useEffect(() => {
    const handleScrollEvent = () => {
      const body = document.body;
      const html = document.documentElement;
      const windowHeight = window.innerHeight;

      const percentage = Math.ceil(
        (window.scrollY * 100) /
          Math.max(
            body.scrollHeight - windowHeight,
            html.scrollHeight - windowHeight
          )
      );

      setScrollBarPercentage(percentage);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <main className="md:pt-8">
      <CustomHead data={data2.data} />
      <NavBar />
      <Banner />
      <div className="hidden md:block w-1 bg-slate-500 h-1/6 fixed bottom-1/2 md:left-5 lg:left-20 rounded-lg">
        <div
          className={`w-1  bg-primary-red  rounded-lg`}
          style={{ height: scrollBarPercentage + "%" }}
        />
      </div>

      <section
        className="flex flex-col items-center mb-12 md:mb-36 "
        id="our-clients"
      >
        <Grid data={data1.data.sections} />
        <Image src="/images/line.svg" width={200} height={200} alt={"line"} />
        <p className="font-georama">
          <span className="font-georama font-medium text-primary-red">
            we'd love
          </span>{" "}
          to see your project added here
        </p>
      </section>
      <TextSwiper />
      <section className="mt-32 gap-y-5 md:gap-y-12 grid">
        <PhotoWithText
          text={"IMMERSE YOURSELF IN THE CAPTIVATING WORLD OF CINEMA"}
          subtext={"WHERE EVERY FRAME TELLS A STORY"}
          textFirst={false}
          image={MovieCollection}
        />
        <PhotoWithText
          text={"IMMERSE YOURSELF IN THE CAPTIVATING WORLD OF CINEMA"}
          subtext={"WHERE EVERY FRAME TELLS A STORY"}
          textFirst={true}
          image={MovieCollection}
        />
      </section>
      <div className="bg-primary-red mt-32" id="contact-us">
        {" "}
        <Footer />
      </div>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get("/page/news", {
      headers: {
        "Accept-Language": "en",
      },
    });
    const data1 = response.data;
    const response1 = await axios.get("/page/home", {
      headers: {
        "Accept-Language": "en",
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
    console.error("Error fetching data:", error);
    return {
      props: {
        data1: null,
        data2: null,
      },
    };
  }
}

export default HomePage;
