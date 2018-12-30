const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://0.0.0.0:27017/resources');

const hero = new mongoose.Schema({
  name: {type: String, required: true},
  town: {type: String, required: true},
  score: {type: Number, required: true},
  isMoving: {type: Boolean, required: true},
  eta: {type: String, required: true}
});

const Hero = mongoose.model('Hero', hero);

module.exports = Hero;

