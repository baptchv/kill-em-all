const mongoose = require('mongoose');
const Villains = require('../Models/Villains');
const R = require('ramda');

mongoose.set('useNewUrlParser', true);

const update = async rep => {
  const town = JSON.parse(rep.body).town;
  // const aze = await Villains.updateOne({town},{points: 0}).exec();
  return {
    status: 200,
    body: JSON.stringify('Coucou')
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
  updateV: update
};