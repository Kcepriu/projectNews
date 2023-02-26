import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const WrapImg = styled.div`
  width: 100%;
  height: 395px;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  margin-top: 20px;
  flex-grow: 1;

  max-width: 100%;
  max-height: 100%;

  outline: 1px solid green;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  position: absolute;
  left: 0;
  top: 40px;
  display: block;
  padding: 4px 8px;
  background-color: rgba(68, 64, 246, 0.7);

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #f4f4f4;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.01em;

  color: #111321;
`;

export const ContentNew = styled.div`
  flex-grow: 1;

  padding: 0, 41, 0, 0;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
