const request = require('request');
const cheerio = require('cheerio');

const main = 'http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx';
const specific = 'http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=';

function getLinks() {
  return new Promise((resolve, reject) => {
    request(main, (err, res, body) => {
      var $ = cheerio.load(body);
      var locations = [];

      $('select#locationSelector').children().each((i, e) => {
        var location = {};
        location['location'] = $(e).text();
        location['key'] = $(e).attr('value');
        locations.push(location);
      });

      resolve(locations);
    });
  });
}

function getDorms() {
  return new Promise((resolve, reject) => {
    request(main, (err, res, body) => {
      var $ = cheerio.load(body);
      var locations = [];

      $('select#locationSelector').children().each((i, e) => {
        locations.push($(e).text());
      });

      resolve(locations);
    });
  });
}

function getMachines(name, key = '') {
  return new Promise((resolve, reject) => {
    if (key === '') {
      getLinks().then((links) => {
        var exists = false;
        var key;

        for (e in links) {
          if (links[e]['location'] === name) {
            key = links[e]['key'];
            exists = true;
            break;
          }
        }

        if (!exists)
          return [];

        getMachinesByKey(key).then((machines) => {
          resolve(machines);
        });
      });
    }
    else {
      getMachinesByKey(key).then((machines) => {
        resolve(machines);
      });
    }
  });
}

function getMachinesByKey(key) {
  return new Promise((resolve, reject) => {
    request(specific + key, (err, res, body) => {
      var $ = cheerio.load(body);
      var machines = [];

      $('tbody').contents().each((i, e) => {
        var machine = {};

        if (typeof $(e).attr('class') !== 'undefined') {
          machine['name'] = $(e).find('.name').text();
          machine['status'] = $(e).find('.status').text();
          machine['time'] = $(e).find('.time').text();

          machines.push(machine);
        }
      });

      resolve(machines);
    });
  });
}

function getAllMachines() {
  return new Promise((resolve, reject) => {
    getLinks().then((links) => {
      var promises = [];

      for (i in links) {
        var link = links[i];
        promises.push(getMachines(link['location'], link['key']));
      }

      Promise.all(promises).then((machines) => {
        var arr = {};

        for (i in links) {
          var link = links[i];
          arr[link['location']] = machines[i];
        }

        resolve(arr);
      });
    });
  });
}

exports = module.exports = getAllMachines;
exports = module.exports.getMachines = getMachines;
exports = module.exports.getDorms = getDorms;
