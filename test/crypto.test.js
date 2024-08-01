const assert = require('assert');
const { getMd5Hash } = require('../src/helpers/crypto');

describe('getMd5Hash', function() {
  it('should return correct MD5 hash', function() {
    const text = 'test';
    const expectedHash = '098f6bcd4621d373cade4e832627b4f6'; // MD5 hash of 'test'
    const result = getMd5Hash(text);
    assert.equal(result, expectedHash);
  });
});