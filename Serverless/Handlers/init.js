const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

// Const generate = R.over(R.lensProp('points'), addNewRand);

const town = new mongoose.Schema({
  town: {type: String, required: true},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', town);

const listVillains = [
  {
    town: 'Paris', points: Math.round(Math.random() * 10000)
  },
  {
    town: 'Marseille', points: Math.round(Math.random() * 10000)
  },
  {
    town: 'Bordeaux', points: Math.round(Math.random() * 10000)
  },
  {
    town: 'Montpellier', points: Math.round(Math.random() * 10000)
  },
  {
    town: 'Lille', points: Math.round(Math.random() * 10000)
  },
  {
    town: 'Chambéry', points: Math.round(Math.random() * 10000)
  }
];

const initVillains = () => Villains.insertMany(listVillains);
initVillains().then(() => mongoose.disconnect());

const poneyyy = new mongoose.Schema({
  town: {type: String, required: true},
  status: {type: Number, required: true}
});

const Poney = mongoose.model('Poney', poneyyy);

const listPoney = [
  {town: 'Paris', status: 1},
  {town: 'Paris', status: 1},
  {town: 'Paris', status: 1}
];

const initPoney = () => Poney.insertMany(listPoney);
initPoney().then(() => mongoose.disconnect());

const hero = new mongoose.Schema({
  name: {type: String, required: true},
  town: {type: String, required: true},
  score: {type: Number, required: true},
  isMoving: {type: Boolean, required: true},
  eta: {type: Number, required: false}
});

const Hero = mongoose.model('Hero', hero);

const listHero = [
  {name: 'BarMan', town: 'Lyon', score: 0, isMoving: false},
  {name: 'RIPDaredevil', town: 'Lyon', score: 0, isMoving: false}
];

const initHero = () => Hero.insertMany(listHero);
initHero().then(() => mongoose.disconnect());
