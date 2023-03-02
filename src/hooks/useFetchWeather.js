import { useEffect, useState } from 'react';
import getMyLocation from '../helpers/myLocation';
import {
  fetchWeatherForCity,
  fetchWeatherForLocation,
} from 'services/fetcWeather';

const useFetchWether = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchFromLocation(myLocation) {
      try {
        const myWeather = await fetchWeatherForLocation({
          ...myLocation,
          controller,
        });
        setWeather(myWeather?.data);
      } catch {
        console.log('Error fetch weather');
      }
    }

    async function fetchFromCyti() {
      try {
        const myWeather = await fetchWeatherForCity('Kyiv', controller);
        setWeather(myWeather?.data);
      } catch {
        console.log('Error fetch weather');
      }
    }

    async function fetchWeather() {
      getMyLocation(fetchFromLocation, fetchFromCyti);
    }

    fetchWeather();

    return () => {
      controller.abort();
    };
  }, []);

  return weather;
};

export default useFetchWether;
