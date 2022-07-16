import styled from "styled-components"

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
`;

const Link = styled.a`
    text-decoration: none;
    color: #848689;
    font-size: 11px;
    text-align: center;
`;

function Bestseller(props) {
  return (
    <Item>
        <Link href={props.link} title={props.title}>
            {props.title}
        </Link>
    </Item>
  )
}

export default Bestseller