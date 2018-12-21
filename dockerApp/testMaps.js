const R = require('ramda');
const moment = require('moment');
const key = 'AIzaSyD4rOj6jVXnr0aD8wfNM-xssjVw-RvHwvo'
const googleMapsClient = require('@google/maps').createClient({
  key: key,
  Promise: Promise
});

let a;

const google = (origin, dest) => {
  return new Promise((resolve, reject) => {
    googleMapsClient.distanceMatrix({
      origins: origin,
      destinations: dest
    }).asPromise().then((response) => {resolve(response)})
  })
};

const getDistance = async (org, dest) => {
  return await google(org, dest)
};

const distance = async () => {
  const yolo = await getDistance('Lyon', 'Paris');
  console.log(
    R.path(['json', 'rows', 0, 'elements', 0, 'distance', 'value'], yolo));
};

distance().then(() => {});

// const payload = getDistance('Lyon', 'Lille');
//
// const distance = payload.then((result) => {
//   console.log(
//     R.path(['json', 'rows', 0, 'elements', 0, 'distance', 'value'],
// result)/1000 ); return R.path(['json', 'rows', 0, 'elements', 0, 'distance',
// 'value'], result); });

// const a = moment().format('LT');
// const b = moment(moment().add(datas.duration.value,'seconds'));
// a > b ? console.log('OUI') : console.log('NON');
// console.log(moment().format('LT'));