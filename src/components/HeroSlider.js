import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import HeroSlideItem from './HeroSlideItem';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/HeroSlider.css";

function HeroSlider() {
  return (
    <Swiper id="hero-slider" className="rounded"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
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