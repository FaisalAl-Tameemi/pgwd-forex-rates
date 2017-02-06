/**
 * A file which includes methods to fetch publicly available
 * foreign exchange rates data from `fixer.io` which contains
 * exchange rates of currencies traded on the european exchange.
 */

const axios = require('axios');

const API_URL = 'http://api.fixer.io';

// get the exchange rates for a given base
// optionally provide a date (ex: '2010-01-01'), 'latest' is default
const getRates = (base, date = 'latest') => {
  const request_url = `${API_URL}/${date}?base=${base}`;
  return axios.get(request_url);
};

const getRatesCompare = (symbols, date = 'latest') => {
  return new Promise((resolve, reject) => {
    if (!(symbols instanceof Array) || symbols.length !== 2) {
      return reject('Invalid symbols type, must be an array of 2 values.');
    };
    // inputs are valid, make the request
    const symbols_compare = symbols.join(',');
    const request_url = `${API_URL}/${date}?symbols=${symbols_compare}`;
    axios
      .get(request_url)
      .then(resolve)
      .catch(reject);
  });
};

module.exports = {
  getRates,
  getRatesCompare
};
