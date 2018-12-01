const mongoose = require('mongoose');
const R = require('ramda');
const Villains = require('../Models/villains');

mongoose.set('useNewUrlParser', true);

const reset = async req => {
  const body = JSON.parse(R.prop('body', req));
  const town = R.prop('town', body);
  const aze = await Villains.updateOne({town}, {points: 0}).exec();
  return {
    status: 200,
    body: JSON.stringify(aze)
  };
};

const update = async req => {
  const body = JSON.parse(R.prop('body', req));
  const town = R.prop('town', body);
  const aze = await Villains.updateOne({town},
    {points: Math.round(Math.random() * 10000)});
  return {
    status: 200,
    body: JSON.stringify(aze)
  };
};

const get = async () => {
  const villainsList = await Villains.find({},
    {town: 1, longitude: 1, latitude: 1, points: 1, _id: 0})
    .exec();
  return {
    status: 200,
    body: JSON.stringify(villainsList)
  };
};

module.exports = {
  getV: get,
  resetV: reset,
  updateV: update
};
