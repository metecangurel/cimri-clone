import TopHeader from './components/TopHeader'
import MainHeader from './components/MainHeader'
import MenuHeader from './components/MenuHeader'
import HeroSection from './components/HeroSection'
import Brands from './components/Brands'
import Bestsellers from './components/Bestsellers'
import Products from './components/Products'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Footer from './components/Footer'


import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MainHeader/>
      <MenuHeader/>
      <HeroSection/>
      <Brands/>
      <Bestsellers/>
      <Products/>
      <Banner/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
