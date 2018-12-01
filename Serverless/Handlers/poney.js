const mongoose = require('mongoose');
const R = require('ramda');
const Poney = require('../Models/poney');

mongoose.set('useNewUrlParser', true);

const status = 0;

const update = async req => {
  const body = JSON.parse(R.prop('body', req));
  await Poney.updateOne({town: 'Paris'}, {status});

  return {
    status: 200,
    body: JSON.stringify('Update Poney success')
  };
};

const get = async () => {
  const poneyList = await Poney.find({},
    {town: 1, longitude: 1, latitude: 1, status: 1, _id: 0}).exec();
  return {
    status: 200,
    body: JSON.stringify(poneyList)
  };
};

module.exports = {
  getP: get,
  updateP: update
};
