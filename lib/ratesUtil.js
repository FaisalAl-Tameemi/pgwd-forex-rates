/**
 * A file which includes methods to fetch publicly available
 * foreign exchange rates data from `fixer.io` which contains
 * exchange rates of currencies traded on the european exchange.
 */

const axios = require('axios');

// get the exchange rates for a given base
// optionally provide a date (ex: '2010-01-01'), 'latest' is default
const getRates = (base, date = 'latest') => {
  // your code here
};

// get the exchange rates between 2 symbols
// optionally provide a date (ex: '2010-01-01'), 'latest' is default
const getRatesCompare = (symbols, date = 'latest') => {
  // your code here
};

module.exports = {
  getRates,
  getRatesCompare
};
