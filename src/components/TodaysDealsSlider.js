import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFlip } from 'swiper';
import TodaysDealsSlideItem from './TodaysDealsSlideItem';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-flip";

const dataArray = [
  {
    "title": "Kodon Kadın Uzun Kollu Cepli Pamuk Gömlek",
    "image": "https://cdn.cimri.io/image/350x350/koton-2yak68311pw-kadin-uzun-kollu-cepli-pamuklu-gomlek_579032731.jpg",
    "discount": "%28",
    "price": "214,99 TL",
    "discountPrice": "153,90 TL",
    "seller": "https://cdn.cimri.io/pictures/merchant-logos/10725.png?v=1" 
  },
  {
    "title": "Kodon Kadın Yüksek Bel Cigarette Pantolon",
    "image": "https://cdn.cimri.io/image/350x350/koton-2sal40011mw-yuksek-bel-cigarette-kadin-pantolon_577505088.jpg",
    "discount": "%27",
    "price": "254,99 TL",
    "discountPrice": "185,90 TL",
    "seller": "https://cdn.cimri.io/pictures/merchant-logos/10725.png?v=1" 
  },
  {
    "title": "Kodon Kadın Beli Bağlamalı Cepli Jogger Pantolon",
    "image": "https://cdn.cimri.io/image/350x350/koton-2sak40100pw-siyah-kadin-beli-baglamali-cepli-jogger-pantolon_609586839.jpg",
    "discount": "%28",
    "price": "229,99 TL",
    "discountPrice": "163,90 TL",
    "seller": "https://cdn.cimri.io/pictures/merchant-logos/10725.png?v=1" 
  }
]

function TodaysDealsSlider() {
  return (
    <Swiper id="hero-slider" className="rounded"
      modules={[Navigation, Autoplay, EffectFlip]}
      navigation
      loop={true}
      effect={"flip"}
      spaceBetween={0}
      slidesPerView={1}>
      {
        dataArray.map((item, index) => {
          return <SwiperSlide>
            <TodaysDealsSlideItem 
              image={item.image} 
              title={item.title} 
              discount={item.discount}
              price={item.price}
              discountPrice={item.discountPrice}
              seller={item.seller} />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default TodaysDealsSlider