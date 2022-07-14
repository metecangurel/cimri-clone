import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSlideItem from './HeroSlideItem';

import 'swiper/css';

function HeroSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}>
      <SwiperSlide>
        <HeroSlideItem link="/" image={require('../images/promo-1.webp')} title="Promo 1" />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlideItem link="/" image={require('../images/promo-2.webp')} title="Promo 2" />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlideItem link="/" image={require('../images/promo-3.webp')} title="Promo 3" />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlideItem link="/" image={require('../images/promo-4.webp')} title="Promo 4" />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider