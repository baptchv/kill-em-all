const mongoose = require('mongoose');
const Villains = require('../Models/Villains');

mongoose.set('useNewUrlParser', true);

let value = 230;

const updateVillain = async (/*Nom de la ville*/) => {
  await Villains.updateOne({town: 'Paris'}, {points: value});

  const modifiedField = await Villains.findOne({town: 'Paris'});
  modifiedField.points = value ? console.log('Champs modifie avec succes') :
    console.log('Champs non modifié');

  return {
    status: 200,
    body: JSON.stringify('OK UPDATE')
  };
};

module.exports = {
  updateVillain
};