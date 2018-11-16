const mongoose = require('mongoose');

const Villains = require('../Models/Town');

mongoose.set('useNewUrlParser', true);
//mongoose.connect('mongodb://localhost:27017/Villains');

// let connection =
// mongoose.createConnection('mongodb://localhost:27017/Villains');

const getHandler = async () => {
  const foo = await Villains.find({}).exec();
  // console.log(foo.points);
  // R.map pour gérer les bailds
  console.log(foo);
  return {
    status: 200,
    body: JSON.stringify('Success')
  };
};

module.exports = {
  getHandler
};