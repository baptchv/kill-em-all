const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/Villains');

const villains = new mongoose.Schema({
  town: {type: String, required: true},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', villains);

module.exports = Villains;