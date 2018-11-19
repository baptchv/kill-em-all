const mongoose = require('mongoose');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

addNewRand = v => v + Math.random() * 1000;

// const generate = R.over(R.lensProp('points'), addNewRand);

const town = new mongoose.Schema({
  town: {type: String, required: true},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', town);

const listVillains = [
  {town: 'Paris', points: 0},
  {town: 'Marseille', points: 0},
  {town: 'Bordeaux', points: 100},
  {town: 'Montpellier', points: 0},
  {town: 'Lille', points: 0},
  {town: 'Chambéry', points: 0}
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
  score: {type: Number, required: true}
});

const Hero = mongoose.model('Hero', hero);

const listHero = [
  {name:'BarMan',town: 'Paris', score: 0}
];

const initHero = () => Hero.insertMany(listHero);
initHero().then(()=>mongoose.disconnect());


// const ranGen = async () => {
//   const genList = R.map(generate, list);
//   return {
//     status: 200,
//     body: JSON.stringify('OK')
//   };
// };
//
// module.exports = {
//   ranGen
// };