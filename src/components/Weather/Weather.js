import { useEffect, useState } from 'react';
import getMyLocation from '../../helpers/myLocation';
import {
  fetchWeatherForCity,
  fetchWeatherForLocation,
} from 'services/fetcWeather';

const Weather = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeather() {
      const myLocation = getMyLocation();
      console.log('myLocation', myLocation);

      try {
        if (myLocation) {
          const myWeather = await fetchWeatherForLocation({
            ...myLocation,
            controller,
          });
          setWeather(myWeather);
        } else {
          const myWeather = await fetchWeatherForCity('Kyiv', controller);
          setWeather(myWeather);
        }
      } catch {
        console.log('Error fetch weather');
      }
    }

    fetchWeather();

    return () => {
      controller.abort();
    };
  }, []);

  console.log(weather);

  return <p>Weather</p>;
};

export default Weather;
