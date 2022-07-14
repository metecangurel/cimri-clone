import styled from 'styled-components'
import '../styles/App.css'

const Wrapper = styled.div`
  border-bottom: 1px solid #f1f1f1;
`;

const Navbar = styled.nav`
  background-color: #fff;
  display: flex;
`;

const Menu = styled.a`
  text-decoration: none;
  display: block;
  width: 150px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  line-height: 29px;
  cursor: pointer;

  color: ${props => props.active ? "#4a90e2" : "#848689"};

  ${props => props.active && `
    border-bottom: 2px solid;
    border-color: #4a90e2;
  `}

  &:hover {
    color: #4a90e2;
    ${props => props.secondary && `
      border-bottom: 2px solid;
      border-color: #3ab424;
      color: #3ab424;
    `}
  }
`;

function TopHeader() {
  return (
   <Wrapper className='bg-white'>
    <div className="container">
      <Navbar>
        <Menu href='/' active>cimri</Menu>
        <Menu href='/' secondary>cimri markette</Menu>
      </Navbar>
    </div>
   </Wrapper>
  )
}

export default TopHeader