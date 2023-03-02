import { format } from 'date-fns';

export const formatDate = date => {
  return format(new Date(date), ' dd/MM/yyy');
};

export const formatNameDay = date => {
  return format(new Date(date), ' EEE');
};

export const formatDateWeather = date => {
  return format(new Date(date), ' dd LLL yyy');
};
