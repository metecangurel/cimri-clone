import Bestseller from "./Bestseller"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styled from "styled-components"

import 'swiper/css';
import "swiper/css/navigation";
import '../styles/Bestsellers.css'

const bestsellerArray = [
  {
    "name": "Grundig Buzdolapları",
    "link": "/"
  },
  {
    "name": "Luxell Ankastre Setler",
    "link": "/"
  },
  {
    "name": "Air Wick Oda Kokusu",
    "link": "/"
  },
  {
    "name": "Lumberjack Spor Ayakkabı",
    "link": "/"
  },
  {
    "name": "OGX Şampuan ve Saç Kremi",
    "link": "/"
  },
  {
    "name": "Fantom Elektrikli Süpürgeler",
    "link": "/"
  },
  {
    "name": "Alcatel Akıllı Saat",
    "link": "/"
  },
  {
    "name": "Hislon Kol Saatleri",
    "link": "/"
  },
  {
    "name": "Hiking Cep Telefonları",
    "link": "/"
  },
  {
    "name": "Felix Konserve-Yaş Kedi Maması",
    "link": "/"
  },
  {
    "name": "Lavazza Kahve",
    "link": "/"
  },
  {
    "name": "Arçelik Davlumbazlar",
    "link": "/"
  },
  {
    "name": "Moccamaster Kahve Makineleri",
    "link": "/"
  },
  {
    "name": "Beko Buzdolapları",
    "link": "/"
  },
  {
    "name": "Dove Şampuan ve Saç Kremi",
    "link": "/"
  },
  {
    "name": "Hill's Kuru Kedi Maması",
    "link": "/"
  },
  {
    "name": "Swatch Kol Saatleri",
    "link": "/"
  },
  {
    "name": "Casper Cep Telefonları",
    "link": "/"
  },
  {
    "name": "Nilfisk Elektrikli Süpürgeler",
    "link": "/"
  },
  {
    "name": "Fairy Bulaşık Makinesi Deterjanı",
    "link": "/"
  }
]

function Brands() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
        <Swiper id="bestseller-slider" className="rounded bg-white py-3"
              modules={[Navigation]}
              navigation
              loop={true}
              effect={"flip"}
              spaceBetween={20}
              slidesPerView={9}>
              {
                bestsellerArray.map((item) => {
                  return (
                    <SwiperSlide>
                      <Bestseller title={item.name} link={item.link} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Brands