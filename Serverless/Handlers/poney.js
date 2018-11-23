const mongoose = require('mongoose');
const Poney = require('../Models/Poney');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);

let status = 0;

const update = async (/*Nom de la ville*/) => {
  await Poney.updateOne({town: 'Paris'}, {status: status});

  return {
    status: 200,
    body: JSON.stringify('OK UPDATE')
  };
};

const get = async () => {
  const poneyList = await Poney.find({}, {town: 1, longitude:1, latitude:1,status: 1, _id: 0}).exec();
  return {
    status: 200,
    body: JSON.stringify(poneyList)
  };
};

module.exports = {
  getP: get,
  updateP: update
};