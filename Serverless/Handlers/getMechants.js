const mongoose = require('mongoose');
const Villains = require('../Models/Villains');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);

let max = 0;

const processing = v => {
  v.points >= max ? max = v.points : false;
};


const getHandler = async () => {
  const villainsList = await Villains.find({}, {town: 1, points: 1, _id: 0})
    .exec();
  R.map(processing, villainsList);
  console.log(max);
  console.log(villainsList);
  return {
    status: 200,
    body: JSON.stringify('Success')
  };
};

module.exports = {
  getHandler
};