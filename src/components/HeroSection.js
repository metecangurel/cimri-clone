import HeroSlider from './HeroSlider';
import HeroBanner from './HeroBanner';
import TodaysDeals from './TodaysDeals';

function HeroSection() {
  return (
    <div className="container mt-3">
      <div className="row g-2">
        <div className="col-6">
          <HeroSlider/>
        </div>
        <div className="col-6">
          <div className="row gx-2 h-100">
            <div className="col-7 d-flex flex-column justify-content-between">
              <HeroBanner link="/" image={require('../images/banner-1.webp')} title="Banner 1" />
              <HeroBanner link="/" image={require('../images/banner-2.webp')} title="Banner 2" />
            </div>
            <div className="col-5">
              <TodaysDeals/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection