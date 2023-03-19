const express = require('express');
const app = express();

// Import controllers
const locationController = require('./controllers/locationController');
const weatherController = require('./controllers/weatherController');
const routeController = require('./controllers/routeController');

// Serve static files
app.use(express.static('public'));

// Set up routes
app.get('/', routeController.home);
app.get('/weather/:location', weatherController.getWeather);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
