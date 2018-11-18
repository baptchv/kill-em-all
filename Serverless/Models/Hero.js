const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

const hero = new mongoose.Schema({
  town: {type: String, required: true},
  score: {type: Number, required: true}
});

const Hero = mongoose.model('Hero', hero);

module.exports = Hero;


