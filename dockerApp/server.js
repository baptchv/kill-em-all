const rp = require('request-promise');
const R = require('ramda');
const d3 = require('d3');

const fixedPart = 'http://localhost:3000';

const postSomething = (body, path) => rp({
  method: 'POST',
  url: `${fixedPart}${path}`,
  body,
  json: true
});

const getSomething = path => rp({
  method: 'GET',
  url: `${fixedPart}${path}`,
  json: true
});

const updateTown = town => postSomething(town, '/updateV');

const updateHero = (town, hero) => postSomething({town, hero}, '/updateH');

const getTown = () => getSomething('/getV');

const getHero = () => getSomething('/getH');

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const deg2rad = deg => deg * (Math.PI / 180);

const findBestCity = R.curry((hero, v) => {
  const p = R.prop(R.__, v);
  return R.assoc('distance',
    getDistanceFromLatLonInKm(p('latitude'), v.longitude,
      hero.latitude, hero.longitude), v);
});

const findBestRatio = (acc, v) => {
  const ratio = R.divide(R.prop('points', v), R.prop('distance', v) || 1);
  return R.ifElse(
    R.lte(R.prop('ratio', acc)),
    R.assoc('ratio', R.__, v),
    R.always(acc)
  )(ratio);
};

const processingVillains = (cities, hero) => {
  console.log(`
    Hero ${hero.name} received
    he has ${hero.score} points  
    List of villains received ...
    Processing ... 
    `);
  const bestCity = R.pipe(
    R.map(findBestCity(hero)),
    R.reduce(findBestRatio, {ratio: -Infinity}),
  )(cities);
  console.log(
    `The selected town is ${bestCity.town}, the hero will earn ${bestCity.points} points`);
  return bestCity;
};

const main = async () => {
  const selectedHero = await getHero();
  const cities = await getTown();
  const bestCity = await processingVillains(cities, selectedHero);
  const aze = await Promise.all([
    updateTown(bestCity),
    updateHero(bestCity, selectedHero)
  ]);
};

main().then(() => {});

