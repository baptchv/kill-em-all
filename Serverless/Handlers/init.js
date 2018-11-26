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
  {town: 'Paris', longitude: 2.34,latitude: 48.86,points: Math.round(Math.random()*10000)},
  {town: 'Marseille', longitude: 5.4,latitude: 43.3,points: Math.round(Math.random()*10000)},
  {town: 'Bordeaux', longitude: -0.57, latitude: 44.83, points: Math.round(Math.random()*10000)},
  {town: 'Montpellier', longitude: 3.87,latitude: 43.61,points: Math.round(Math.random()*10000)},
  {town: 'Lille', longitude: 3.05,latitude: 50.62,points:Math.round(Math.random()*10000)},
  {town: 'Chambéry', longitude: 5.91,latitude: 45.56,points: Math.round(Math.random()*10000)}
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
  town: {type: String, required: false},
  longitude: {type: Number, required:false},
  latitude: {type: Number, required:false},
  score: {type: Number, required: true}
});

const Hero = mongoose.model('Hero', hero);

const listHero = [
  {name:'BarMan',score: 0}
];

const initHero = () => Hero.insertMany(listHero);
initHero().then(()=>mongoose.disconnect());