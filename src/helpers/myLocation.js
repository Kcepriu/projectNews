const getMyLocation = (success, error) => {
  function showPosition(position) {
    success({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error);
  } else {
    console.log('Geolocation is not supported by this browser.');
    error();
  }
};

export default getMyLocation;
