const R = require('ramda');

const generate = R.map(v => v + Math.round(Math.random() * 1000));

const generationHandler = async () => ({
  status: 200,
  body: JSON.stringify(generate({
    paris: 0,
    lyon: 0,
    marseille: 10000000000000000000000000000000
  }))
});

module.exports = {
  generationHandler
};