import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  padding: 14px 24px;
  display: block;
  width: 168px;
  height: 380px;

  overflow: scroll;
  overflow-x: hidden; /* Hide horizontal scrollbar */

  background-color: #f8f8f8;

  border-radius: 20px;
`;

export const WrapCategories = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 0;
  margin: 0;

  display: flex;
  gap: 16px;
  list-style: none;
`;

export const ButtonCategorie = styled.button`
  border: none;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: left;

  letter-spacing: 0.01em;
  width: 100%;

  color: #4440f7;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus,
  &.Active {
    background: #4440f6;
    color: #ffffff;
  }
`;
