const R = require('ramda');
const Hero = require('../Models/hero');

const update = async req => {
  const body = JSON.parse(R.prop('body', req));
  const town = R.prop('town', body);
  const hero = R.prop('hero', body);
  const aze = await Hero.updateOne({name: R.prop('name', hero)}, {
    town: R.prop('town', town),
    $inc: {score: R.prop('points', town)},
    longitude: R.prop('longitude', town),
    latitude: R.prop('latitude', town),
    isMoving: true,
    eta: R.prop('distance', town)
  }).exec();
  return {
    status: 200,
    body: JSON.stringify(aze)
  };
};

const get = async () => {
  const listHero = await Hero.find({},
    {_id: 0});
  return {
    status: 200,
    body: JSON.stringify(listHero)
  };
};

module.exports = {
  getH: get,
  updateH: update
};
