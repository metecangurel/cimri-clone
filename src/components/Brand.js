import styled from "styled-components"

const Item = styled.li`
  background-color: #fff;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child a {
    border-right: none;
  }
`;

const Image = styled.img`
  height: 39px;
`;

const Link = styled.a`
  display: block;
  width: 100%;
  border-right: 1px solid #eeeeee;
`;

function Brand(props) {
  return (
    <Item>
      <Link href={props.link} title={props.title}>
        <Image src={props.image} alt={props.title} />
      </Link>
    </Item>
  )
}

export default Brand