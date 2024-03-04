import React from 'react';
import GridCard from '../GridCard/GridCard';
import Fizz from '@/../public/images/fizz.jpg';
import Puck from '@/../public/images/puck.jpg';
import Nutrition from '@/../public/images/nutrition.jpg';
import FirstPepsi from '@/../public/images/first-pepsi.jpg';
import kitKatBars from '@/../public/images/kitkat-bars.jpg';
import LostValley from '@/../public/images/lostvalley.jpg';
import MountainDew from '@/../public/images/mountain-dew.jpg';
import MouthWash from '@/../public/images/mouthwash.jpg';
import Cup from '@/../public/images/cup.jpg';
import Medicine from '@/../public/images/medicine.jpg';
const Grid = () => {
  const cards = [
    {
      image: Fizz,
      title: 'Fizz The world',
      paragraph: "Pepsi's Expo 2022 campaign",
    },
    {
      image: Puck,
      title: 'A Display To Inspire The Every Day Chef',
      paragraph: 'We created our bespoke, modular displays can be arranged in countless configurations',
    },
    {
      image: Nutrition,
      title: 'The Optimum Nutrition For The Optimum Challenge',
      paragraph: 'In less than three weeks, we took the leading sports nutrition specialist Optimum Nutrition and got it in perfect shape',
    },
    {
      image: Medicine,
      title: 'Biodegradable Product in an Eco-friendly Space',
      paragraph: 'For Nivea’s new range of biodegradable wipes, we found the perfect balance between highlighting their green credentials without casting any doubt about their make-up removal efficacy.',
    },
    {
      image: MouthWash,
      title: 'Even a Mouthwash Can Be A Superhero',
      paragraph: 'We designed a cardboard sleeve to turn the bottle into a playful superhero, making it appealing to kids aged 6 and over.',
    },
    {
      image: LostValley,
      title: 'Taking Over the IMG World',
      paragraph: 'When Lay’s appeared in the Lost Valley dinosaur enclosure at Dubai’s biggest indoor theme park – IMG Worlds of Adventure –',
    },
    {
      image: Cup,
      title: 'Longest Passes in History',
      paragraph: 'PepsiCo enters the Book of World Records',
    },
    {
      image: kitKatBars,
      title: 'Trick or Treat',
      paragraph: 'KitKat Halloween full packaging driven campaign',
    },
    {
      image: MountainDew,
      title: 'Let It Shine Brighter',
      paragraph: 'Launch of Mountain Dew glow in the dark neon can',
    },
    {
      image: FirstPepsi,
      title: 'My First Pepsi',
      paragraph: "Reveal of Pepsi's vintage can design in celebration of their 120th birthday",
    },
  ];
  return (
    <div className="grid grid-cols-2 container gap-x-20 gap-y-36 px-32">
      {cards.map ((card, index) => (
        <GridCard
          image={card.image}
          title={card.title}
          paragraph={card.paragraph}
          key={index}
        />
      ))}
    </div>
  );
};

export default Grid;
