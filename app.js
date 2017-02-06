const ratesUtil = require('./lib/ratesUtil');

/**
 * Example of calling the `getRates` method
 */
ratesUtil
  .getRates('CAD')
  .then((response) => {
    console.log(response.data.rates);
  })
  .catch(console.error);

/**
 * Example of calling the `getRatesCompare` method
 */
ratesUtil
  .getRatesCompare(['CAD', 'USD'], '2015-10-10')
  .then((response) => {
    console.log(response.data.rates);
  })
  .catch(console.error);
