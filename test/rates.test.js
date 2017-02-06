const ratesUtil = require('../lib/ratesUtil');
const should = require('should');

describe('#getRates()', function() {
  it('should return a promise', () => {
    return ratesUtil.getRates('CAD').should.be.Promise();
  });

  it('should get the rates for a given base currency (ex: "CAD")', () => {
    return ratesUtil
      .getRates('CAD')
      .then((response) => {
        response.should.have.property('data').which.is.an.Object();
        response.data.base.should.equal('CAD');
        response.data.should.have.property('rates').which.is.an.Object();
        return null;
      });
  });

  it('should reject the promise for a currency which does not exist', () => {
    return ratesUtil.getRates('CADASLDF').should.be.rejected();
  });

  it('should reject the promise if base currency is not provided', () => {
    return ratesUtil.getRates().should.be.rejected();
  });
});

describe('#getRatesCompare()', function() {
  it('should accept 2 symbols as an array and return a promise', () => {
    return ratesUtil.getRatesCompare(['CAD', 'USD']).should.be.Promise();
  });

  it('should get the exchange rate for the 2 provided currencies', () => {
    return ratesUtil
      .getRatesCompare(['CAD', 'USD'])
      .then((response) => {
        response.should.have.property('data').which.is.an.Object();
        response.data.should.have.property('rates').which.is.an.Object();
        response.data.rates.should.have.property('CAD').which.is.an.Number();
        response.data.rates.should.have.property('USD').which.is.an.Number();
        return null;
      });
  });

  it('should reject promise if a string is provided as symbols (currencies)', () => {
    return ratesUtil.getRatesCompare('CADASLDF').should.be.rejected();
  });

  it('should reject promise if an array of 1 symbols is provided', () => {
    return ratesUtil.getRatesCompare(['CAD']).should.be.rejected();
  });
});
