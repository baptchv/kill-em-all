const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://0.0.0.0:27017/resources');

const poneyyy = new mongoose.Schema({
  town: {type: String, required: true},
  status: {type: Number, required: true}
});

const Poney = mongoose.model('Poney', poneyyy);

module.exports = Poney;
