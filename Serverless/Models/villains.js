const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

const town = new mongoose.Schema({
  town: {type: String, required: true},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', town);

module.exports = Villains;
