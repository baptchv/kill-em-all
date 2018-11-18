const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

//TODO Changer town par position en latitude/longitude
const poneyyy = new mongoose.Schema({
  town: {type: String, required: true},
  status: {type: Number, required: true}
});

const Poney = mongoose.model('Poney', poneyyy);

module.exports = Poney;