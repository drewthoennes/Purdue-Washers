# Purdue Washers
A simple package to gather data on washers and dryers in Purdue's dorms

## About
This package is built off of the [Purdue Wash Alert website](http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=000f2375-7317-4a89-b836-4140dcd49b7c). The website updates every few minutes and as a result, the data returned through this package will act similarly.

## Installation
```
$ npm install purdue-washers
```

## Usage

#### Get washers and dryers
Gets a key-value array of all dorms and their respective washers and dryers
```js
const washers = require('purdue-washers');

washers().then((machines) => {
  console.log(machines);
});

```

Output
```
{
  'Cary Quad East Laundry':
   [ { name: 'Dryer 015', status: 'Available', time: ' ' },
     { name: 'Dryer 016', status: 'End of cycle', time: ' ' },
     { name: 'Dryer 027', status: 'In use', time: '21 minutes left' } ],
  'Cary Quad West Laundry':
   [ { name: 'Dryer 013', status: 'Available', time: ' ' },
     { name: 'Dryer 015', status: 'Not online', time: ' ' },
     { name: 'Dryer 023', status: 'In use', time: '29 minutes left' },
     { name: 'Dryer 024', status: 'Payment in progress', time: ' ' } ],

  .
  .
  .

  'Windsor - Duhme Laundry Room':
   [ { name: 'Dryer 001', status: 'End of cycle', time: ' ' },
     { name: 'Dryer 002', status: 'End of cycle', time: ' ' } ],
  'Windsor - Warren Laundry Room':
   [ { name: 'Dryer 001', status: 'Available', time: ' ' },
     { name: 'Dryer 002', status: 'Available', time: ' ' } ]
}
```

#### Get dorms
Gets a list of all dorms
```js
const washers = require('purdue-washers');

washers.getDorms().then(links => {
  console.log(links);
});
```

Output
```
[ 'Cary Quad East Laundry',
  'Cary Quad West Laundry',
  'Earhart Laundry Room',
  'Harrison Laundry Room',
  'Hawkins Laundry Room',
  'Hillenbrand Laundry Room',
  'McCutcheon Laundry Room',
  'Meredith NW Laundry Room',
  'Meredith SE Laundry Room',
  'Owen Laundry Room',
  'Shreve Laundry Room',
  'Tarkington Laundry Room',
  'Third St. Suites Laundry Room',
  'Wiley Laundry Room',
  'Windsor - Duhme Laundry Room',
  'Windsor - Warren Laundry Room' ]
```

#### Get washers and dryers by dorm
Gets a list of washers and dryers by dorm
```js
const washers = require('purdue-washers');

washers.getMachines('Cary Quad West Laundry').then(machines => {
  console.log(machines);
});
```

Output
```
[ { name: 'Dryer 013', status: 'Available', time: ' ' },
  { name: 'Dryer 014', status: 'Available', time: ' ' },
  { name: 'Dryer 015', status: 'Not online', time: ' ' },
  { name: 'Dryer 016', status: 'Available', time: ' ' },
  { name: 'Dryer 017', status: 'In use', time: '19 minutes left' },
  { name: 'Dryer 018', status: 'Not online', time: ' ' },
  { name: 'Dryer 019', status: 'In use', time: '10 minutes left' },
  { name: 'Dryer 020', status: 'In use', time: '51 minutes left' },
  { name: 'Dryer 021', status: 'In use', time: '79 minutes left' },
  { name: 'Dryer 022', status: 'End of cycle', time: ' ' },
  { name: 'Dryer 023', status: 'End of cycle', time: ' ' },
  { name: 'Dryer 024', status: 'Payment in progress', time: ' ' },
  { name: 'Dryer 025', status: 'Available', time: ' ' },
  { name: 'Dryer 026 ADA', status: 'Available', time: ' ' },
  { name: 'Washer 001', status: 'Available', time: ' ' },
  { name: 'Washer 002', status: 'Available', time: ' ' },
  { name: 'Washer 003', status: 'Available', time: ' ' },
  { name: 'Washer 004', status: 'Available', time: ' ' },
  { name: 'Washer 005', status: 'Available', time: ' ' },
  { name: 'Washer 006', status: 'In use', time: '25 minutes left' },
  { name: 'Washer 007', status: 'Available', time: ' ' },
  { name: 'Washer 008 ADA', status: 'Available', time: ' ' },
  { name: 'Washer 009', status: 'Available', time: ' ' },
  { name: 'Washer 010', status: 'Available', time: ' ' },
  { name: 'Washer 011', status: 'Not online', time: ' ' },
  { name: 'Washer 012', status: 'Available', time: ' ' } ]
```

## Word of Warning
This package relies entirely on the [Purdue Wash Alert website](http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?), so if it is ever deprecated this package will no longer work.
