import Search from './Search'
import MenuIcon from './MenuIcon'
import MenuText from './MenuText'
import '../styles/App.css'

const textMenu = [ "Klima", "Kamp Sandalyesi", "Vantilatör", "iPhone 13", "iPhone 11", "Airpods" ]

function MainHeader() {
  return (
    <div className="border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <a href="/" className="logo">
              <svg width="86" height="28" viewBox="0 0 86 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="s1sb4ezy-3 kVAkeB"><path fill-rule="evenodd" clip-rule="evenodd" d="M84.589 1.191c.943 1.29.674 3.092-.605 4.026-1.274.934-3.075.647-4.018-.644-.946-1.29-.675-3.091.603-4.024 1.276-.935 3.074-.647 4.02.642zm-58.246.082c.944 1.29.677 3.093-.602 4.026-1.277.935-3.074.647-4.02-.642-.943-1.29-.674-3.092.604-4.025 1.276-.936 3.076-.648 4.018.641zM9.717 23.922c2.463-.004 4.099-.769 4.91-2.294l4.322-.007c-1.12 4.248-4.195 6.373-9.227 6.379C3.252 28.01.01 24.532 0 17.566-.01 10.625 3.222 7.153 9.693 7.142c5.032-.007 8.114 2.108 9.244 6.345l-4.322.005c-.787-1.518-2.427-2.272-4.916-2.27-2.176.005-3.692.582-4.556 1.736-.706.946-1.06 2.477-1.055 4.602.002 2.124.36 3.656 1.069 4.6.866 1.177 2.384 1.764 4.56 1.762zM21.995 7.125l4.087-.006.03 20.858-4.087.005-.03-20.857zM54.42 7.08c6.498-.009 9.753 3.47 9.763 10.434l.015 10.41-4.089.006-.014-10.411c-.004-2.124-.36-3.655-1.066-4.597-.893-1.177-2.427-1.765-4.604-1.76-2.175.002-3.692.592-4.554 1.772-.708.943-1.06 2.478-1.057 4.601l.015 10.412-4.086.006-.016-10.412c-.002-2.124-.359-3.656-1.069-4.598-.891-1.177-2.424-1.763-4.598-1.76-2.177.003-3.695.594-4.558 1.773-.705.944-1.056 2.477-1.053 4.6l.015 10.412-4.088.005-.015-10.408c-.01-6.965 3.22-10.454 9.693-10.463 3.46-.005 6.026 1.048 7.708 3.161 1.646-2.117 4.2-3.178 7.658-3.183zm13.06 7.563c-.006-5.054 3.462-7.587 10.405-7.597l.007 4.083c-2.544.002-4.299.358-5.268 1.066-.706.525-1.056 1.337-1.055 2.439l.019 13.28-4.089.005-.019-13.276zm16.846-7.606l.029 20.86-4.086.005-.03-20.859 4.087-.006z" fill="#0786E7"></path></svg>  
            </a>
          </div>
          <div className="col-6">
            <Search/>
            <div className="menu-text d-flex justify-content-between">
              {textMenu.map((text, index) => {
                return <MenuText link="/" key={index} title={text} />
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-end">
              <MenuIcon image={require('../images/brochure.svg')} title="Broşürler" link="/hey" />
              <MenuIcon image={require('../images/discount.svg')} title="Fiyatı Düşenler" link="/hey" />
              <MenuIcon image={require('../images/currency.svg')} title="Günün Fırsatları" link="/hey" />
              <MenuIcon image={require('../images/benefit.svg')} title="Kuponlar" link="/hey" />
              <MenuIcon image={require('../images/profile.svg')} title="Hesabım" link="/hey" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader