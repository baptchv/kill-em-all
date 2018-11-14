const R = require('ramda');
const mongo = require('mongoose');

const generate = R.map(v => v + Math.round(Math.random() * 1000));

const generationHandler = async () => ({
  status: 200,
  body: JSON.stringify(generate({
    Paris: 0,
    Lyon: 0,
    Marseille: 0,
    Bordeaux: 0,
    Lille: 0,
    Brest: 0,
    Nice: 0,
  }))
});

module.exports = {
  generationHandler
};