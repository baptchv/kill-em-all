const mongoose = require('mongoose');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/Villains');

addNewRand = v => v + Math.random() * 1000;

const generate = R.over(R.lensProp('points'), addNewRand);

const town = new mongoose.Schema({
  town: {type: String, required: true},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', town);

const list = [
  {town: 'Paris', points: 0},
  {town: 'Marseille', points: 0},
  {town: 'Bordeaux', points: 100},
  {town: 'Montpellier', points: 0},
  {town: 'Lille', points: 0},
  {town: 'Chambéry', points: 0}
];

const init = () => Villains.insertMany(list);
init().then(() => mongoose.disconnect());

const ranGen = async () => {
  const genList = R.map(generate, list);
  return {
    status: 200,
    body: JSON.stringify('OK')
  };
};

module.exports = {
  ranGen
};