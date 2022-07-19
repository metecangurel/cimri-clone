import Product from './Product';

const dataArray = [
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  },
  {
    "title": "Apple iPhone 12 5G 64GB 4GB Ram 6.1 inç 12MP Akıllı Cep Telefonu",
    "image": "https://cdn.cimri.io/image/356x356/apple-iphone-12-5g-64gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_309416795.jpg",
    "link": "/",
    "topofferlink": "/",
    "topoffer": "hepsiburada.com",
    "topofferprice": "20.899.00 TL"
  }
];

function Products() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-wrap">
            {dataArray.map((data, index) => {
              return <Product 
              title={data.title} 
              image={data.image} 
              topofferlink={data.topofferlink} 
              topofferprice={data.topofferprice} 
              topoffer={data.topoffer}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products