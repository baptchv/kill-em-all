const Hero = require('../Models/Hero');
const mongoose = require('mongoose');

const update = async (a) => {
  console.log(a.a);
  return {
    status: 200,
    body: JSON.stringify(a)
  };
};

const get = async () => {
  const listHero = await  Hero.find({},{name:1,town:1,score:1,_id: 0});
  return {
    status: 200,
    body: JSON.stringify(listHero)
  };
};

module.exports = {
  getH: get,
  updateH: update
};
