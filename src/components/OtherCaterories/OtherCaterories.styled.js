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
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
  display: block;
  width: 168px;
  height: 380px;

  background-color: #f8f8f8;

  border-radius: 20px;
`;
