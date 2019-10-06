const express = require('express');
const router = express.Router();
const request = require('request');

// @route GET api/weather
// @desc test route
// @access public

router.get('/:city', (req, res) => {
  try {
    console.log(req.params);
    var city = req.params.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3f20118eead94533603b9665190dd88`;

    request(url, (error, response, body) => {
      weather_json = JSON.parse(body);
      console.log(weather_json);
      res.send(weather_json);
    });
  } catch (err) {}
});

module.exports = router;
