const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

const poneyyy = new mongoose.Schema({
  town: {type: String, required: true},
  longitude: {type: Number, required: true},
  latitude: {type: Number, required: true},
  status: {type: Number, required: true}
});

const Poney = mongoose.model('Poney', poneyyy);

module.exports = Poney;
