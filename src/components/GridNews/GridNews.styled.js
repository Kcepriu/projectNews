import styled from 'styled-components';

export const GridCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemGrid = styled.li`
  width: 395px;
  height: 675px;
  /* outline: 1px solid red; */
  border: 1px solid #eee;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;
