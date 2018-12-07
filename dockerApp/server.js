const rp = require('request-promise');
const R = require('ramda');
const S = require('sanctuary');

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

const resetTown = town => postSomething(town, '/resetV');

const updateHero = (town, hero) => postSomething({town, hero}, '/updateH');

const getTown = () => getSomething('/getV');

const getHero = () => getSomething('/getH');

const deg2rad = deg => deg * (Math.PI / 180);

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
    (Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};



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

const processingHeroes = heroes => {

  const movingList = R.filter(R.pipe(R.prop('isMoving'), R.not), heroes);

  const bestHero = R.ifElse(
    R.isEmpty,
    R.always(), //Maybe.Nothing
    R.nth(0)
  )(movingList);

  console.log(bestHero);

  console.log(`Selected Hero is ${R.prop('name', bestHero)}`);

  return bestHero;
};

const processingVillains = (cities, hero) => {
  console.log(`
    ${hero.name} : ${hero.score} pts 
    Calculating best route ... 
    `);
  const bestCity = R.pipe(
    R.map(findBestCity(hero)),
    R.reduce(findBestRatio, {ratio: -Infinity}),
  )(cities);
  console.log(`
    The selected town is ${bestCity.town}, 
    + ${bestCity.points} points for ${hero.name}
    `);
  return bestCity;
};

const aHeroIsFree = async (selectedHero) => {

  const cities = await getTown();
  const bestCity = await processingVillains(cities, selectedHero);
  await Promise.all([
    resetTown(bestCity),
    updateHero(bestCity, selectedHero)
  ]);
  await updateTown(selectedHero);

  console.log(`
  Travelling to ${bestCity.town} ...
  ___________________________________________
  `);
};

const main = async () => {
  const heroes = await getHero();
  const selectedHero = await processingHeroes(heroes);

  R.ifElse(
    R.isEmpty,
    R.tap(console.log('Not Free')),
    R.tap(aHeroIsFree)
  )(selectedHero);
};

setInterval(() => {
  main().then(() => {});
}, 100);
