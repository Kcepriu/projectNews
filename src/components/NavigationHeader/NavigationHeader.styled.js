import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  /* position: relative; */
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  /* &.active {
    color: orangered;
  } */
  &.active::after {
    content: '';
    /* position: absolute; */
    left: 0;
    bottom: -1px;

    display: block;

    border: 1px solid #4440f7;
    height: 1px;
  }
`;
