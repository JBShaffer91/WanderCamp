export function run() {
  const express = require('express');
  const app = express();
  const locationController = require('./src/controllers/locationController');
  const weatherController = require('./src/controllers/weatherController');
  const routeController = require('./src/controllers/routeController');

// Define routes
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

  app.get('/location', locationController.getLocation);
  app.get('/weather', weatherController.getWeather);
  app.get('/route', routeController.getRoute);

// Start server
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}
