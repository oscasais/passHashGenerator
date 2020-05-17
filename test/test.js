const assert = require('chai').assert;
const lib = require('../dist/pass-hash-generator.min.cjs.js');

describe('lib', function() {
    it('sha1 for test:amazon should return Kaqk1bRiiZ55fBYfHTfBd2AD1Hg', function() {
        assert.equal(lib('test:amazon', 'sha1'),
            'Kaqk1bRiiZ55fBYfHTfBd2AD1Hg')
    })
    it('sha256 for test:amazon should return roZo5udEDdmrFoskl1C61kbm0ocIZOabW6nv3eK42PU', function() {
        assert.equal(lib('test:amazon', 'sha256'),
            'roZo5udEDdmrFoskl1C61kbm0ocIZOabW6nv3eK42PU')
    })
})