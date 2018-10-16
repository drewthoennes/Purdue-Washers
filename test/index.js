const washers = require('../index.js');

washers().then((machines) => {
  console.log(machines);
});

washers.getDorms().then((links) => {
  console.log(links);
});

washers.getMachines('Cary Quad West Laundry').then((machines) => {
  console.log(machines);
});
