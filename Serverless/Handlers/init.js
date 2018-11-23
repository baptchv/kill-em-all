const mongoose = require('mongoose');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/resources');

addNewRand = v => v + Math.random() * 1000;

// const generate = R.over(R.lensProp('points'), addNewRand);

const town = new mongoose.Schema({
  town: {type: String, required: true},
  longitude: {type: Number, required:true},
  latitude: {type: Number, required:true},
  points: {type: Number, required: true}
});

const Villains = mongoose.model('Villains', town);

const listVillains = [
  {town: 'Paris', longitude: 2.34,latitude: 48.86,points: 2000},
  {town: 'Marseille', longitude: 5.4,latitude: 43.3,points: 3000},
  {town: 'Bordeaux', longitude: -0.57, latitude: 44.83, points: 1000},
  {town: 'Montpellier', longitude: 3.87,latitude: 43.61,points: 768},
  {town: 'Lille', longitude: 3.05,latitude: 50.62,points:3456},
  {town: 'Chambéry', longitude: 5.91,latitude: 45.56,points: 9875}
];

const initVillains = () => Villains.insertMany(listVillains);
initVillains().then(() => mongoose.disconnect());

const poneyyy = new mongoose.Schema({
  town: {type: String, required: true},
  longitude: {type: Number, required:true},
  latitude: {type: Number, required:true},
  status: {type: Number, required: true}
});

const Poney = mongoose.model('Poney', poneyyy);

const listPoney = [
  {town: 'Paris', longitude: 2.34,latitude: 48.86,status: 1},
  {town: 'Paris', longitude: 2.34,latitude: 48.86,status: 1},
  {town: 'Paris', longitude: 2.34,latitude: 48.86,status: 1}
];

const initPoney = () => Poney.insertMany(listPoney);
initPoney().then(() => mongoose.disconnect());

const hero = new mongoose.Schema({
  name: {type: String, required: true},
  town: {type: String, required: true},
  longitude: {type: Number, required:true},
  latitude: {type: Number, required:true},
  score: {type: Number, required: true}
});

const Hero = mongoose.model('Hero', hero);

const listHero = [
  {name:'BarMan',town: 'Paris', longitude: 2.34,latitude: 48.86,score: 0}
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