const assert = require('assert');
const MultiSignature = require('../lib/multisignature');

let multisig = new MultiSignature();

describe("MultiSignature", function () {
    describe('MultiSignature Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof multisig.getAccounts), ('function'));
            assert.equal((typeof multisig.getPending), ('function'));
        });
    });

    describe('#getPending()', function () {
        it('Should be equal to true', function () {
            multisig.getPending("03b041569251cb673c4c924d5d191a3669b2ba2515e37e37fda3952262a57ec759", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    /* Request is always pending even after a few minutes, maybe an endpoint problem
    describe('#getPending()', function () {
        it('Should be equal to true', function () {
            multisig.getAccounts("03b041569251cb673c4c924d5d191a3669b2ba2515e37e37fda3952262a57ec759", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
    */
});