import TopHeader from './components/TopHeader'
import MainHeader from './components/MainHeader'
import MenuHeader from './components/MenuHeader'
import HeroSection from './components/HeroSection'
import Brands from './components/Brands'
import Bestsellers from './components/Bestsellers'
import Products from './components/Products'
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
      <Footer/>
    </div>
  );
}

export default App;
