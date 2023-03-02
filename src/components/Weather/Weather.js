import useFetchWether from 'hooks/useFetchWeather';
// import { getUrlIcon } from 'services/fetcWeather';

import { formatNameDay, formatDateWeather } from 'helpers/formatDate';
import { ReactComponent as IconLocation } from '../../images/icon_location.svg';
import {
  CardWeather,
  // Img,
  Button,
  TextDate,
  TextTemp,
  TitleCard,
  WrapWeatherLocation,
  Location,
  TextWeather,
} from './Weather.styled';

const Weather = () => {
  const weather = useFetchWether();
  const nowDate = Date.now();
  return (
    <>
      {weather && (
        <CardWeather>
          <TitleCard>
            <TextTemp>
              {Math.round(weather.main.temp)}
              <sup>°</sup>
            </TextTemp>
            <WrapWeatherLocation>
              <TextWeather>{weather.weather[0].main}</TextWeather>
              <Location>
                <IconLocation width="27" />
                <p>{weather.name}</p>
              </Location>
            </WrapWeatherLocation>
          </TitleCard>

          {/* <Img
            src={getUrlIcon(weather.weather[0].icon)}
            alt="Icon weather"
            width="165"
          /> */}

          <TextDate>
            {formatNameDay(nowDate)} <br /> {formatDateWeather(nowDate)}
          </TextDate>

          <Button type="button">weather for week </Button>
        </CardWeather>
      )}
    </>
  );
};

export default Weather;
