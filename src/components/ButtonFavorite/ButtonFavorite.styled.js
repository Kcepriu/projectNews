import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 355px;

  display: flex;
  align-items: center;

  padding: 6px 12px;

  border: 1px solid #4b48db;
  border-radius: 20px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #111321;

  &:hover,
  &:focus {
    background: #4440f6;
    color: #ffffff;
  }

  &.Active {
    background: #4440f6;
    color: #ffffff;
  }
`;
