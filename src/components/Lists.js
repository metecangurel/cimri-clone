import React from 'react'

import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 240px;
  margin-bottom: 50px;
`;

const Title = styled.li`
  color: #ccc;
  font-size: 13px;
  line-height: 21px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Link = styled.a`
  text-decoration: none;
  color: #9b9b9b;
  font-size: 12px;
  line-height: 26px;

  &:hover {
    color: #b5b5b5;
  }
`;

function Lists(props) {
  return (
    <List data={props.data}>
      <Title>{props.data.title}</Title>
      {props.data.items.map((item) => {
        return <li><Link href={item.link}>{item.title}</Link></li>
      })}
    </List>
  )
}

export default Lists