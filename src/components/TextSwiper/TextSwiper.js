import React, {useState} from 'react';
import ArrowRight from '@/../public/images/arrow-right.svg';
import Image from 'next/image';
import Arrow from '../Svg/Arrow';

const TextSwiper = () => {
  var [currentIndex, setCurrentIndex] = useState (0);
  const items = [
    {
      title: 'CONSOLIDATED REPORTING',
      paragraph: 'The sun rose majestically over the horizon, casting its warm, golden rays across the tranquil landscape. Birds chirped joyfully as they flitted from branch to branch, filling the air with their melodic songs. A gentle breeze rustled through the leaves of the trees, carrying with it the fresh scent of blooming flowers. ',
    },
    {
      title: 'ESTATE PLANNING AND STRUCTURING',
      paragraph: 'The city buzzed with life as people hurriedly went about their daily routines. Cars honked, pedestrians chattered, and the scent of street food filled the air. Amidst the urban chaos, a sense of excitement lingered, as if every corner held the promise of an unexpected encounter or adventure. ',
    },
    {
      title: 'REAL ESTATE SOLUTIONS',
      paragraph: 'The forest whispered secrets as sunlight filtered through the canopy, dappling the forest floor with golden hues. Trees swayed gently in the breeze, their leaves rustling in conversation with the wind. Birds flitted from branch to branch, their colorful plumage a blur of motion against the verdant backdrop.',
    },
    {
      title: 'PRIVATE OFFICE',
      paragraph: 'The waves crashed against the shore with rhythmic intensity, their frothy crests sparkling in the sunlight. Seagulls soared overhead, their cries blending harmoniously with the sound of the ocean. The salty breeze carried the tang of the sea, invigorating those who dared to venture near. ',
    },
  ];

  return (
    <div className="container ">
      <div className="md:grid md:grid-cols-2 font-georama px-4 md:px-5  lg:px-20 xl:px-24  md:gap-y-0 md:gap-x-12 ">
        <div className="gap-y-5 flex flex-col items-center md:items-start">
          {items.map ((item, index) => (
            <div key={index} className="h-1/4 md:w-full">
              <h1
                className={`${currentIndex === index ? 'font-bold text-lg md:text-xl' : 'font-normal text-sm md:text-base'}
                 transition-all ease-in-out duration-300  leading-none flex flex-col items-center md:block`}
              >
                {item.title}
                <div
                  className={`${currentIndex === index ? 'w-full' : 'md:w-10/12 w-1/2'} bg-white h-[0.1rem]  md:h-[0.2rem] transition-all duration-300 ease-out mt-1 md:mt-4`}
                />
              </h1>

            </div>
          ))}
          <div className="flex gap-x-10 justify-end">
            <div
              className="group relative border-2 border-white hover:border-black hover:bg-white duration-300 ease-in-out rotate-180 p-2 md:p-4 hover:cursor-pointer rounded-full"
              onClick={() => {
                const index = currentIndex;
                if (index > 0) {
                  setCurrentIndex (index - 1);
                }
                console.log (currentIndex);
              }}
            >
              <Arrow />
            </div>
            <div
              className="group relative border-2 border-white hover:border-black hover:bg-white duration-300 ease-in-out   p-2 md:p-4 hover:cursor-pointer rounded-full"
              onClick={() => {
                const index = currentIndex;
                if (index < items.length - 1) {
                  setCurrentIndex (index + 1);
                }
                console.log (currentIndex);
              }}
            >
              <Arrow />
            </div>
          </div>
        </div>
        <div>
          {items.map ((item, index) => (
            <div
              className={`${currentIndex === index ? 'block' : 'hidden'} flex items-center px-12 bg-zinc-800 h-full mt-5 py-5 md:py-0`}
            >
              <p className="font-normal text-base lg:text-lg xl:text-xl">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TextSwiper;
