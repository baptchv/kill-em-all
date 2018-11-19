const rp = require('request-promise');
const R = require('ramda');

const getPoney = {
  method: 'POST',
  uri: 'http://localhost:3000/updateH',
  body: {
    a:1
  },
  json: true // Automatically stringifies the body to JSON
};

const process = (v) => {
  v.town = 'Yolo';
  v.status = 10;
};

rp(getPoney)
  .then(function (parsedBody,response) {

    console.log('Request OK');
    console.log(response);

    // R.map(process,response);
    //
    // console.log(response);

  })
  .catch(function (err) {
    console.log('ERROR')
  });