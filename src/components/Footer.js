import styled from "styled-components"
import Lists from "./Lists";

import '../styles/Footer.css';

const Wrapper = styled.div`
  background-color: #3e4145;
  margin-top: 25px;
  color: #fff;
  padding-top: 35px;
  padding-bottom: 35px;
`;

const listData = [
  {
    "title": "Popüler Kategoriler",
    "items": [
      {
        "title": "Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Kahve Makineleri",
        "link": "#"
      },
      {
        "title": "Akıllı Bileklik",
        "link": "#"
      },
      {
        "title": "Akıllı Saat",
        "link": "#"
      },
      {
        "title": "Buzdolapları",
        "link": "#"
      },
      {
        "title": "Robot Süpürgeler",
        "link": "#"
      },
      {
        "title": "Oyun Konsolları",
        "link": "#"
      },
      {
        "title": "Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Kombiler",
        "link": "#"
      },
      {
        "title": "Isıtıcılar",
        "link": "#"
      }
    ]
  },
  {
    "title": "Özel Ürünler",
    "items": [
      {
        "title": "Oppo Cep Telefonları",
        "link": "#"
      },
      {
        "title": "iPhone Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Xiaomi Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Sony Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Infinix Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Apple Akıllı Saat",
        "link": "#"
      },  
      {
        "title": "Nike Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Sleepy Bebek Bezi",
        "link": "#"
      },
      {
        "title": "Excalibur G770",
        "link": "#"
      },
      {
        "title": "Casper Nirvana S500",
        "link": "#"
      }
    ]
  },
  {
    "title": "Popüler Kategoriler",
    "items": [
      {
        "title": "Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Kahve Makineleri",
        "link": "#"
      },
      {
        "title": "Akıllı Bileklik",
        "link": "#"
      },
      {
        "title": "Akıllı Saat",
        "link": "#"
      },
      {
        "title": "Buzdolapları",
        "link": "#"
      },
      {
        "title": "Robot Süpürgeler",
        "link": "#"
      },
      {
        "title": "Oyun Konsolları",
        "link": "#"
      },
      {
        "title": "Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Kombiler",
        "link": "#"
      },
      {
        "title": "Isıtıcılar",
        "link": "#"
      }
    ]
  },
  {
    "title": "Özel Ürünler",
    "items": [
      {
        "title": "Oppo Cep Telefonları",
        "link": "#"
      },
      {
        "title": "iPhone Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Xiaomi Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Sony Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Infinix Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Apple Akıllı Saat",
        "link": "#"
      },  
      {
        "title": "Nike Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Sleepy Bebek Bezi",
        "link": "#"
      },
      {
        "title": "Excalibur G770",
        "link": "#"
      },
      {
        "title": "Casper Nirvana S500",
        "link": "#"
      }
    ]
  },
  {
    "title": "Popüler Kategoriler",
    "items": [
      {
        "title": "Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Kahve Makineleri",
        "link": "#"
      },
      {
        "title": "Akıllı Bileklik",
        "link": "#"
      },
      {
        "title": "Akıllı Saat",
        "link": "#"
      },
      {
        "title": "Buzdolapları",
        "link": "#"
      },
      {
        "title": "Robot Süpürgeler",
        "link": "#"
      },
      {
        "title": "Oyun Konsolları",
        "link": "#"
      },
      {
        "title": "Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Kombiler",
        "link": "#"
      },
      {
        "title": "Isıtıcılar",
        "link": "#"
      }
    ]
  },
  {
    "title": "Özel Ürünler",
    "items": [
      {
        "title": "Oppo Cep Telefonları",
        "link": "#"
      },
      {
        "title": "iPhone Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Xiaomi Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Sony Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Infinix Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Apple Akıllı Saat",
        "link": "#"
      },  
      {
        "title": "Nike Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Sleepy Bebek Bezi",
        "link": "#"
      },
      {
        "title": "Excalibur G770",
        "link": "#"
      },
      {
        "title": "Casper Nirvana S500",
        "link": "#"
      }
    ]
  },
  {
    "title": "Özel Ürünler",
    "items": [
      {
        "title": "Oppo Cep Telefonları",
        "link": "#"
      },
      {
        "title": "iPhone Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Xiaomi Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Sony Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Infinix Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Apple Akıllı Saat",
        "link": "#"
      },  
      {
        "title": "Nike Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Sleepy Bebek Bezi",
        "link": "#"
      },
      {
        "title": "Excalibur G770",
        "link": "#"
      },
      {
        "title": "Casper Nirvana S500",
        "link": "#"
      }
    ]
  },
  {
    "title": "Popüler Kategoriler",
    "items": [
      {
        "title": "Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Kahve Makineleri",
        "link": "#"
      },
      {
        "title": "Akıllı Bileklik",
        "link": "#"
      },
      {
        "title": "Akıllı Saat",
        "link": "#"
      },
      {
        "title": "Buzdolapları",
        "link": "#"
      },
      {
        "title": "Robot Süpürgeler",
        "link": "#"
      },
      {
        "title": "Oyun Konsolları",
        "link": "#"
      },
      {
        "title": "Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Kombiler",
        "link": "#"
      },
      {
        "title": "Isıtıcılar",
        "link": "#"
      }
    ]
  },
  {
    "title": "Özel Ürünler",
    "items": [
      {
        "title": "Oppo Cep Telefonları",
        "link": "#"
      },
      {
        "title": "iPhone Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Xiaomi Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Sony Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Infinix Cep Telefonları",
        "link": "#"
      },  
      {
        "title": "Apple Akıllı Saat",
        "link": "#"
      },  
      {
        "title": "Nike Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Sleepy Bebek Bezi",
        "link": "#"
      },
      {
        "title": "Excalibur G770",
        "link": "#"
      },
      {
        "title": "Casper Nirvana S500",
        "link": "#"
      }
    ]
  },
  {
    "title": "Popüler Kategoriler",
    "items": [
      {
        "title": "Cep Telefonları",
        "link": "#"
      },
      {
        "title": "Kahve Makineleri",
        "link": "#"
      },
      {
        "title": "Akıllı Bileklik",
        "link": "#"
      },
      {
        "title": "Akıllı Saat",
        "link": "#"
      },
      {
        "title": "Buzdolapları",
        "link": "#"
      },
      {
        "title": "Robot Süpürgeler",
        "link": "#"
      },
      {
        "title": "Oyun Konsolları",
        "link": "#"
      },
      {
        "title": "Spor Ayakkabı",
        "link": "#"
      },
      {
        "title": "Kombiler",
        "link": "#"
      },
      {
        "title": "Isıtıcılar",
        "link": "#"
      }
    ]
  }
]


function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {
              listData.map((item) => {
                return <Lists data={item}/>
              })
            }
          </div>
        </div>
        <div className="row footer-end">
          <div className="col-2">
            <a href="/">
              <svg width="140" height="40" viewBox="0 0 296 98" fill="none" xmlns="http://www.w3.org/2000/svg" class="s50pz0u-14 fOJzOF"><path d="M292.869 24.949l.101 72.396-14.183.021-.101-72.396 14.183-.021zM234.4 51.348c-.022-17.544 12.015-26.333 36.115-26.368l.021 14.17c-8.827.01-14.919 1.242-18.281 3.699-2.45 1.824-3.667 4.643-3.664 8.467l.068 46.09-14.192.021-.067-46.079zm-45.328-26.252c22.554-.028 33.852 12.043 33.885 36.218l.053 36.128-14.192.021-.05-36.134c-.013-7.37-1.245-12.685-3.7-15.954-3.099-4.086-8.423-6.125-15.976-6.109-7.552.006-12.815 2.057-15.809 6.15-2.457 3.273-3.677 8.599-3.667 15.969l.051 36.139-14.182.02-.056-36.138c-.005-7.37-1.245-12.688-3.708-15.957-3.094-4.086-8.417-6.119-15.96-6.109-7.555.01-12.823 2.061-15.821 6.155-2.445 3.273-3.663 8.597-3.652 15.961l.05 36.139-14.189.021-.051-36.123c-.033-24.178 11.174-36.286 33.643-36.316 12.01-.018 20.913 3.637 26.752 10.972 5.712-7.353 14.574-11.033 26.579-11.053zm-112.54.162l14.185-.021.107 72.391-14.188.021-.103-72.391zM33.918 83.555c8.549-.015 14.227-2.668 17.04-7.961l15.003-.025c-3.884 14.745-14.561 22.12-32.023 22.141C11.48 97.745.226 85.672.193 61.496.16 37.404 11.377 25.354 33.836 25.318c17.463-.024 28.159 7.314 32.084 22.02l-15.002.021c-2.73-5.271-8.421-7.888-17.062-7.878-7.551.016-12.815 2.018-15.813 6.023-2.45 3.282-3.675 8.597-3.66 15.972.005 7.37 1.245 12.689 3.708 15.963 3.008 4.085 8.276 6.125 15.826 6.116zM91.624 4.946c3.276 4.479 2.347 10.733-2.091 13.975-4.43 3.245-10.67 2.245-13.95-2.229-3.276-4.48-2.341-10.731 2.094-13.972C82.105-.528 88.354.473 91.624 4.946zm202.156-.284c3.273 4.479 2.339 10.729-2.099 13.973-4.423 3.243-10.674 2.245-13.947-2.233-3.281-4.478-2.342-10.731 2.095-13.967 4.43-3.247 10.668-2.246 13.951 2.227z" fill="#fff"></path></svg>
            </a>
          </div>
          <div className="col-6 footer-text d-flex flex-column text-center">
            <span className="follow-us">Bizi Takip Edin!</span>
            <div className="d-flex flex-row justify-content-center social-icons">
              <a href="/">
                <span>Cimriblog</span>
              </a>
              <a href="/">
                <img width="15" height="15" data-src="https://cdn.cimri.io/web-images/social-icons/facebook.svg" alt="Facebook Sayfamız" src="https://cdn.cimri.io/web-images/social-icons/facebook.svg"/>
              </a>
              <a href="/">
                <img width="15" height="15" data-src="https://cdn.cimri.io/web-images/social-icons/twitter.svg" alt="Twitter Sayfamız" src="https://cdn.cimri.io/web-images/social-icons/twitter.svg"/>
              </a>
              <a href="/">
                <img width="15" height="15" data-src="https://cdn.cimri.io/web-images/social-icons/linkedin.svg" alt="LinkedIn Sayfamız" src="https://cdn.cimri.io/web-images/social-icons/linkedin.svg"/>
              </a>
              <a href="/">
                <img width="15" height="15" data-src="https://cdn.cimri.io/web-images/social-icons/instagram.svg" alt="Instagram Sayfamız" src="https://cdn.cimri.io/web-images/social-icons/instagram.svg"/>
              </a>
              <a href="/">
                <img width="15" height="15" data-src="https://cdn.cimri.io/web-images/social-icons/youtube.svg" alt="Youtube Sayfamız" src="https://cdn.cimri.io/web-images/social-icons/youtube.svg"/>
              </a>
            </div>
            <div className="copyright-text">
            <p>Copyright © 2007 - 2022 Cimri A.Ş. Cimri markası ve logosu, Cimri A.Ş.'nin tescilli markasıdır. <br/> 
            Tüm hakları saklıdır. Bu siteyi ziyaret edenler <a href="/">Kullanıcı Sözleşmesini</a> okumuş ve kabul etmiş sayılırlar.</p>
            </div>
          </div>
          <div className="col-4 mobile-app-links">
            <div className="d-flex">
              <a href="/">
                <img width="105" height="33" alt="App Store" src="https://cdn.cimri.io/web-images/social-icons/app-store-badge-hemenindirin.svg"/>
              </a>
              <a href="/">
                <img width="105" height="33" alt="Play Store" src="https://cdn.cimri.io/web-images/social-icons/google-play-badge-hemenindirin.svg"/>
              </a>
              <a href="/">
                <img width="105" height="33" alt="App Gallery" src="https://cdn.cimri.io/web-images/social-icons/app-gallery-badge-hemenindirin.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer