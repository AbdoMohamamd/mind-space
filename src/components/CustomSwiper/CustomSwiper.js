import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode } from 'swiper/modules'
import SectorCard from '../SectorCard/SectorCard'

const CustomSwiper = ({ cards }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={50}
      freeMode={true}
      modules={[FreeMode]}
      className='hover:cursor-pointer '
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className='!w-auto'>
          <SectorCard id={card.id} title={card.title} image={card.image} description={card.seo_description}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default CustomSwiper
