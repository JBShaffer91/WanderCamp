const fetch = require('node-fetch');

const getCoordinates = async (location) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;

  try {
    const response = await fetch(geocodeUrl);

    if (response.ok) {
      const data = await response.json();
      const coordinates = data.features[0].center;
      return coordinates;
    } else {
      throw new Error('Unable to fetch coordinates');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCoordinates,
};
