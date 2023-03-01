import axios from 'axios';

const KEY = '689b01c43ded4804a84027bf54dc0817';
const URL = 'https://api.openweathermap.org/';

const configAnswer = {
  baseURL: URL,
  header: {},
  params: {
    appid: KEY,
    exclude: 'hourly,daily',
    units: 'metric',
  },
};

export const fetchWeatherForLocation = async ({ lat, lon, controller }) => {
  const { params } = configAnswer;
  params.lat = lat;
  params.lat = lon;

  const result = await axios.get('data/2.5/weather', {
    ...configAnswer,
    signal: controller.signal,
  });

  return result;
};

export const fetchWeatherForCity = async (city, controller) => {
  const { params } = configAnswer;
  params.q = city;

  const result = await axios.get('data/2.5/weather', {
    ...configAnswer,
    signal: controller.signal,
  });

  return result;
};
