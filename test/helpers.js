const assert = require('assert');
const Helpers = require('../lib/helpers');

let helpers = new Helpers();

describe("Helpers", function () {
    describe('Helpers Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof helpers.validateAddress), ('function'));
        });
    });

    describe('#validateAddress()', function () {
        it('Should be equal to true', function () {
            assert.equal(helpers.validateAddress("K8z91expPsR3U78g62HjDBKzwuk5BGFsn3", 0x2D), true);
            assert.equal(helpers.validateAddress("KDgMh3H9GkBV9SrmjeWC8EzLsvhE8rsnfy", 0x2D), true);
            assert.equal(helpers.validateAddress("KDgMh3H9GkBV9SrmjeWC8EzLsvhE8rsnfy"), true);
        }) ;
    });

    describe('#validateAddress()', function () {
        it('Should be equal to false', function () {
            assert.equal(helpers.validateAddress("K8z91expPsR3U78g62HjDBKzwuk5BGFsn3", 0x3D), false);
            assert.equal(helpers.validateAddress("KDgMh3H9GkBV9SrmjeWC8EzLsvhezE8rsnfy", 0x2D), false);
            assert.equal(helpers.validateAddress("KDgMh3H9GkBV9SrmjeWC8445EzLsvhE8rsnfy"), false);
        }) ;
    });
});