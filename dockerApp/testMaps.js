const googleMapsClient = require('@google/maps').createClient({
  key: 'www.google.com/imfeelinglucky'
});

// googleMapsClient.geocode({
//   address: '1 rue de la Paix'
// }, function(err, response) {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log(err)
//   }
// });

googleMapsClient.distanceMatrix({
  origins: 'Paris',
  destinations: 'Lille'
}, (err, response) => {
  if (!err) {
    console.log(response);
  } else {
    console.log(err)
  }
});

