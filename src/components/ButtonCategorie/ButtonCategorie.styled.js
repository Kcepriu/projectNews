import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 24px;

  border: 1px solid #4b48db;
  border-radius: 20px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #4440f7;

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
