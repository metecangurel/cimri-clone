import styled from 'styled-components'

const Item = styled.div`
  max-height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: cover;
  overflow: hidden;
`;

function HeroBanner(props) {
  return (  
    <Item className="rounded">
        <a href={props.link} className="d-block" title={props.title}>
            <Image className="w-100" src={props.image} alt={props.title} />
        </a>
    </Item>
  )
}

export default HeroBanner