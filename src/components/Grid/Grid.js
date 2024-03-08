import React from 'react';
import GridCard from '../GridCard/GridCard';

const Grid = ({data}) => {
  // console.log (data);

  // const cards = [
  //   {
  //     image: '/images/fizz.jpg',
  //     title: 'Fizz The world',
  //     alt: 'fizz',
  //     paragraph: "Pepsi's Expo 2022 campaign",
  //   },
  //   {
  //     image: '/images/puck.jpg',
  //     title: 'A Display To Inspire The Every Day Chef',
  //     alt: 'puck',
  //     paragraph: 'We created our bespoke, modular displays can be arranged in countless configurations',
  //   },
  //   {
  //     image: '/images/nutrition.jpg',
  //     title: 'The Optimum Nutrition For The Optimum Challenge',
  //     alt: 'nutrition',
  //     paragraph: 'In less than three weeks, we took the leading sports nutrition specialist Optimum Nutrition and got it in perfect shape',
  //   },
  //   {
  //     image: '/images/medicine.jpg',
  //     title: 'Biodegradable Product in an Eco-friendly Space',
  //     alt: 'medicine',
  //     paragraph: 'For Nivea’s new range of biodegradable wipes, we found the perfect balance between highlighting their green credentials without casting any doubt about their make-up removal efficacy.',
  //   },
  //   {
  //     image: '/images/mouthwash.jpg',
  //     title: 'Even a Mouthwash Can Be A Superhero',
  //     alt: 'mouth wash',
  //     paragraph: 'We designed a cardboard sleeve to turn the bottle into a playful superhero, making it appealing to kids aged 6 and over.',
  //   },
  //   {
  //     image: '/images/lostvalley.jpg',
  //     title: 'Taking Over the IMG World',
  //     alt: 'lost valley',
  //     paragraph: 'When Lay’s appeared in the Lost Valley dinosaur enclosure at Dubai’s biggest indoor theme park – IMG Worlds of Adventure –',
  //   },
  //   {
  //     image: '/images/cup.jpg',
  //     title: 'Longest Passes in History',
  //     alt: 'cup',
  //     paragraph: 'PepsiCo enters the Book of World Records',
  //   },
  //   {
  //     image: '/images/kitkat-bars.jpg',
  //     title: 'Trick or Treat',
  //     alt: 'kitkat',
  //     paragraph: 'KitKat Halloween full packaging driven campaign',
  //   },
  //   {
  //     image: '/images/mountain-dew.jpg',
  //     title: 'Let It Shine Brighter',
  //     alt: 'moutain dew',
  //     paragraph: 'Launch of Mountain Dew glow in the dark neon can',
  //   },
  //   {
  //     image: '/images/first-pepsi.jpg',
  //     title: 'My First Pepsi',
  //     alt: 'pepsi',
  //     paragraph: "Reveal of Pepsi's vintage can design in celebration of their 120th birthday",
  //   },
  //   {
  //     image: '/images/knowledge.jpg',
  //     title: 'Knowledge to Empower',
  //     alt: 'knowledge',
  //     paragraph: 'How can we shift the perception of UH to reach a younger audience',
  //   },
  //   {
  //     image: '/images/farm.jpg',
  //     title: 'Make Every Pack Count',
  //     alt: 'Farm',
  //     paragraph: 'Sunbites sustainable product launch at EXPO',
  //   },
  //   {
  //     image: '/images/lays.jpg',
  //     title: 'The premium choice for your gourmet moments',
  //     alt: 'lays',
  //     paragraph: 'A new Lay’s product is born. But this time it’s not a new flavor or size, it’s a totally new product level. A premium one inside out. ',
  //   },
  //   {
  //     image: '/images/bunny-kitkat.jpg',
  //     title: 'Easter Bunny on Easter Break',
  //     alt: 'kitkat',
  //     paragraph: 'KitKat easter campaign Key Visuals',
  //   },
  //   {
  //     image: '/images/spicy-lays.jpg',
  //     title: 'The Nation',
  //     alt: 'lays',
  //     paragraph: 'Define Flamin’ Hot as a platform, and its role amongst GEN-Zers in KSA and beyond',
  //   },
  //   {
  //     image: '/images/creative.jpg',
  //     title: 'BAT – Vuse',
  //     alt: 'Bat vuse',
  //     paragraph: 'BAT – Vuse',
  //   },
  //   {
  //     image: '/images/cheetos.jpg',
  //     title: 'Flamin’ Hot – Lime',
  //     alt: 'cheetos',
  //     paragraph: 'Flamin’ Hot – Lime',
  //   },
  //   {
  //     image: '/images/kitkat-break.jpg',
  //     title: 'KitKat – Aggregator Box',
  //     alt: 'kitkat',
  //     paragraph: 'KitKat – Aggregator Box',
  //   },
  //   {
  //     image: '/images/coffee.jpg',
  //     title: 'Lavazza – Jump',
  //     alt: 'lavazza',
  //     paragraph: 'Lavazza – Jump',
  //   },
  //   {
  //     image: '/images/nature-coffe.jpg',
  //     title: 'Lavazza – Made of Nature',
  //     alt: 'lavazza',
  //     paragraph: 'Lavazza – Made of Nature',
  //   },
  //   {
  //     image: '/images/lays-joy.jpg',
  //     title: 'Lay’s – Expo',
  //     alt: 'lays',
  //     paragraph: 'Lay’s – Expoy',
  //   },
  //   {
  //     image: '/images/pepsi.jpg',
  //     title: 'Pepsi – Riyadh Season',
  //     alt: 'pepsi',
  //     paragraph: 'Pepsi – Riyadh Season',
  //   },
  // ];
  return (
    <div className="container px-12 md:px-32 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 lg:gap-y-20 xl:gap-y-36 md:gap-x-10 lg:gap-x-14 xl:gap-x-20 mb-12 md:mb-36">
      {data.map ((card, index) => ( // Render GridCard component for each card
        <GridCard
          image={card.details.image}
          title={card.title}
          paragraph={card.subtitle}
          alt={card.handle}
          key={card.id}
        />
      ))}

    </div>
  );
};

export default Grid;
