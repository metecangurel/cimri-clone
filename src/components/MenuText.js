import styled from 'styled-components'

const Item = styled.a`
    text-decoration: none;
    color: #9b9b9b;
    font-size: 10px;
    font-weight: 600;
    line-height: 21px;
`;

function MenuText(props) {
  return (
    <Item href={props.link}>
        {props.title}
    </Item>
  )
}

export default MenuText