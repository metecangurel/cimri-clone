import Brand from "./Brand"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0;
  display: flex;
  height: 80px;
`;

const brandsArray = [
  {
    "title": "Trendyol",
    "image": "https://cdn.cimri.io/static-component/component_GbmgA2022-03-23..png",
    "link": "/"
  },
  {
    "title": "Amazon",
    "image": "https://cdn.cimri.io/static-component/component_D0EhT2022-03-10..png",
    "link": "/"
  },
  {
    "title": "Media Markt",
    "image": "https://cdn.cimri.io/static-component/component_0Q30j2022-06-21..png",
    "link": "/"
  },
  {
    "title": "Hepsiburada",
    "image": "https://cdn.cimri.io/static-component/component_8xojS2022-03-10..png",
    "link": "/"
  },
  {
    "title": "Pazarama",
    "image": "https://cdn.cimri.io/static-component/component_3PkW72022-04-08..png",
    "link": "/"
  },
  {
    "title": "PttAvm",
    "image": "https://cdn.cimri.io/static-component/component_faVyH2022-03-10..png",
    "link": "/"
  },
  {
    "title": "N11",
    "image": "https://cdn.cimri.io/static-component/component_IW33E2022-03-10..png",
    "link": "/"
  },
  {
    "title": "A101",
    "image": "https://cdn.cimri.io/static-component/component_ht7Dh2022-03-10..png",
    "link": "/"
  }
]

function Brands() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <List className="rounded overflow-hidden">
            {
              brandsArray.map((brand) => {
                return <Brand link={brand.link} image={brand.image} title={brand.title} />
              })
            }
          </List>
        </div>
      </div>
    </div>
  )
}

export default Brands