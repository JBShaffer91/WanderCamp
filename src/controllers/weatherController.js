import { getLocationData } from './controllers/locationController';
import { getCurrentWeather } from './controllers/weatherController';

document.getElementById('generate').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  getLocationData(location)
    .then(locationData => {
      const lat = locationData.latitude;
      const lon = locationData.longitude;
      return getCurrentWeather(lat, lon);
    })
    .then(currentWeatherData => {
      // update UI with current weather data
    })
    .catch(error => {
      console.log(error);
    });
});
