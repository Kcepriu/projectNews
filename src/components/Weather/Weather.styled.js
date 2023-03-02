import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWeather = styled.div`
  padding: 40px 40px 40px 40px;

  background: #4440f7;
  width: 100%;
  height: 100%;

  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #ffffff;
`;
export const Img = styled.img`
  width: 165px;
  display: block;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkWeather = styled(Link)`
  display: inline-block;

  margin-left: auto;
  margin-right: auto;

  text-decoration: none;

  margin-top: 28px;
  padding: 9px 12px;
  font-size: 20px;
  line-height: 23px;
  background: rgba(254, 254, 255, 0.3);
  border-radius: 10px;
  color: #ffffff;
`;

export const Button = styled.button`
  margin-top: 28px;
  padding: 9px 12px;
  font-size: 20px;
  line-height: 23px;
  background: rgba(254, 254, 255, 0.3);
  border-radius: 10px;
  color: #ffffff;
`;
export const TextDate = styled.p`
  margin-top: 90px;
`;

export const TextTemp = styled.p`
  font-size: 64px;
  line-height: 75px;
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapWeatherLocation = styled.div`
  border-left: 1px solid #ffffff;
  margin-left: 8px;
  padding-left: 8px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  padding: 8px 17px 8px 7px;
  background: rgba(254, 254, 255, 0.3);
  border-radius: 10px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

export const TextWeather = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
`;
