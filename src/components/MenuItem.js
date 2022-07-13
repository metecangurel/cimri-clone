import styled from 'styled-components'

const Link = styled.a`
    font-size: 12px;
    height: 76px;
    flex: 0 0 auto;
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    color: #3e4145;
    position: relative;
    max-width: 90px;
    text-transform: uppercase;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0px;
        border-radius: 5px;
        background-color: #4a90e2;
        transition: 0.3s ease-in-out;
    }

    &:hover {
        color: #4a90e2;

        &:after {
            height: 5px;
        }
        
    }
`;

function MenuItem(props) {
  return (
    <li>
        <Link href={props.link} title={props.title}>
            {props.title}
        </Link>
    </li>
  )
}

export default MenuItem