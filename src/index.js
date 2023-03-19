import './css/styles.css';
import { updateUI } from './controllers/weatherController';
import { routeController } from './controllers/routeController.js';
import { weatherController } from './controllers/weatherController.js';


document.addEventListener('DOMContentLoaded', () => {
  routeController.init(); // initialize route controller
  weatherController.init(); // initialize weather controller
  
  document.getElementById('generate').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    updateUI(location);
  });
});
