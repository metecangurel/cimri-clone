import styled from 'styled-components'

const Wrapper = styled.a`
    display: block;
    text-decoration: none;
    margin-left: 20px;;
`;

const Icon = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 8px 10px 4px;
`;

const Title = styled.div`
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    color: rgb(62, 66, 69);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

function MenuIcon(props) {
  return (
    <Wrapper href={props.link}>
        <Icon>
            <img src={props.image.default} alt={props.title} />
        </Icon>
        <Title>
            {props.title}
        </Title>
    </Wrapper>
  )
}

export default MenuIcon