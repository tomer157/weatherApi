const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = weather = mongoose.model('weather', weatherSchema);
