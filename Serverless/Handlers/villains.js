const mongoose = require('mongoose');
const Villains = require('../Models/Villains');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);

let value = 230;
let max = 0;

const processing = v => {
  v.points >= max ? max = v.points : false;
};

const update = async (/*Nom de la ville*/) => {
  await Villains.updateOne({town: 'Paris'}, {points: value});

  const modifiedField = await Villains.findOne({town: 'Paris'});
  modifiedField.points = value ? console.log('Champs modifie avec succes') :
    console.log('Champs non modifié');

  return {
    status: 200,
    body: JSON.stringify('OK UPDATE')
  };
};

const get = async () => {
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
  getV: get,
  updateV: update
};