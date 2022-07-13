import { useState } from 'react';
import styled from 'styled-components'

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #4a90e2;
    border-radius: 4px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    font-size: 13px;
    font-weight: 600;
    outline: none;
    border: none;
`;

const Button = styled.button`
    background: #4a90e2;
    border: none;
    position: relative;
    right: -1px;
    width: 125px;
    color: #fff;
    font-weight: 700;
`;

function Search() {
  const [search, setSearch] = useState('');
  return (
    <InputWrapper>
        <Input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Binlerce mağaza arasından en ucuz fiyatı bulun!" />
        
        <Button>ARA</Button>
    </InputWrapper>
  )
}

export default Search