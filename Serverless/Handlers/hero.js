const Hero = require('../Models/Hero');
const mongoose = require('mongoose');
const R = require('ramda');

const update = async req => {
  const body = JSON.parse(R.prop('body', req));
  const town = R.prop('town', body);
  const hero = R.prop('hero', body);
  console.log(hero);
  const aze = await Hero.updateOne({name:R.prop('name',hero)},{$inc :{score: R.prop('points',town)}}).exec();
  return {
    status: 200,
    body: JSON.stringify(aze)
  };
};

const get = async () => {
  const listHero = await  Hero.findOne({},{name:1,town:1,longitude:1, latitude:1,score:1,_id: 0});
  return {
    status: 200,
    body: JSON.stringify(listHero)
  };
};

module.exports = {
  getH: get,
  updateH: update
};
