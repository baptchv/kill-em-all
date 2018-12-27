const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

const villains = new mongoose.Schema({
  town: {type: String, required: true},
  longitude: {type: Number, required: true},
  latitude: {type: Number, required: true},
  distance: {type: Number, required: false},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', villains);

module.exports = Villains;
